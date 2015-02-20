"use strict";

// Takes grunt-browserify aliasMappings config and converts it into an alias array
function aliasMappingsToAliasArray(grunt, aliasMappings)
{
    var aliasArray = [],
        aliases = Array.isArray(aliasMappings) ? aliasMappings : [aliasMappings];

    aliases.forEach(function (alias) {

        grunt.file.expandMapping(alias.src, alias.dest, {cwd: alias.cwd}).forEach(function(file) {
            
            var expose = file.dest.substr(0, file.dest.lastIndexOf("."));
            aliasArray.push("./" + file.src[0] + ":" + expose);
        });
    });

    return aliasArray;
}

exports.map = aliasMappingsToAliasArray;