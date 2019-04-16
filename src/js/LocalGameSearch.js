/* This script is for managing local game discovery */

const fs = require('fs');
const vdf = require('simple-vdf');
const path = require("path");
const Registery = require('winreg');
const rl = require('readline-specific');


module.exports = {
    init: function () { GetGameLocation(); }
}

function GetGameLocation()
{
    
    //64bit regObj path    
    RegSteamPath = new Registery({
        hive: Registery.HKLM,
        key: '\\SOFTWARE\\Wow6432Node\\Valve\\Steam'
    });

    //32bit regObj path
    RegSteamPathx86 = new Registery({
        hive: Registery.HKLM,
        key: 'HKEY_LOCAL_MACHINE\SOFTWARE\Valve\Steam'
    });

    //read steam install folder key value (32bit steam)
    RegSteamPathx86.get("InstallPath", GetLibrary);

    //read steam install folder key value (64bit steam)
    RegSteamPath.get("InstallPath", GetLibrary );
}



function GetLibrary(err, data)
{
    //Error handling (trust me)
    if (err)
        return;
    
    
    //normalise path

    let SteamPath = path.normalize(data.value);
    let LibrarySteamPath = SteamPath + "/steamapps/libraryfolders.vdf";
    
    //read game library location
      
     fs.readFile(LibrarySteamPath, (err, data) =>
     {
        if (err) throw err;
        let str = data.toString();
        let raw = vdf.parse(str);
        let SteamJSONobj = JSON.parse( JSON.stringify(raw) );
        if (SteamJSONobj === null){console.warn("can't read json")}
        
        //assign default game library, steam app(not common)
        var libraries = [SteamPath];
       
        //get object lenght, +1 because i start at 1
        let totalKey = Object.keys(SteamJSONobj.LibraryFolders).length + 1;

        for (let i = 1; i < totalKey; i++ )
        {
            if(SteamJSONobj.LibraryFolders[i] != null)
            {
                //WARNING i is initiliated at 1
                libraries[i] = path.normalize(SteamJSONobj.LibraryFolders[i].toString());
            }
        }
        //console.log(libraries);
        AnalyseLibrary(err,libraries);
    });
function AnalyseLibrary(err, data)
    { 

        //on hard code la request pour le moment https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid=76561198250223174&include_appinfo=1&include_played_free_games=1&appids_filter=
        
        //Look into steam libraries folders for acf file
        for(var i=0;i < data.length; i++ )
        {
            
            let files = fs.readdirSync(path.normalize(data[i] + "\\steamapps"));
            
           
            //only select acf file
            for(let o = 0; o < files.length; o++)
            {     
                if(path.extname(files[o]) === '.acf')
                { 
                    rl.oneline(data[i] + "\\steamapps\\" + files[o] ,5, Parser );
                }
            }
        }
        
    }

var Parser = function(err, str)
{
    if (err) console.log(err);

    // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
    str = str.replace(/\s+/g, '');
    //basicelly we are just hard-cutting the string hoping it'll never change but steam never change anything not even it's login system
    str = str.substring(7, str.length -1);
    console.log("srt: "+str);

};
    
}
