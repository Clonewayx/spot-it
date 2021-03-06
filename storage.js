// stuff for saving data to localstorage
function saveData(){
    var name = window.prompt("Jako pojemnovat tento balíček dat?");
    // var name = "test";
    var curData = {};
    curData[name] = parseEnteredItems(itemEntry);
    console.debug(curData);
    var storage = localStorage.getItem("spot-it");
    storage = JSON.parse(storage);
    console.log("storage",storage);
    var result={};
    for(var key in storage) result[key]=storage[key];
    for(var key in curData) result[key]=curData[key];
    console.log("result",result);
    localStorage.setItem("spot-it",JSON.stringify(result));
    readStorage();
}

function readStorage(){
    var storage = localStorage.getItem("spot-it");
    // console.debug(storage);
    storage = JSON.parse(storage);
    // console.debug(storage,storage.length);
    var saves = document.querySelector(".saves");
    saves.innerHTML = "";
    for(var key in storage) {
        // console.debug(key,storage[key]);
        saves.innerHTML += '<li><a href="#d" data-saved="'+key+'" data-data="'+storage[key].join("^")+'">'+key+'</a> <a href="#d" class="save-remove" data-key="'+key+'">(delete)</a></li>';
    }
    
    [].forEach.call(document.querySelectorAll('[data-saved]'),function(elem){
        // console.log(elem);
        elem.addEventListener('click',function(event){
            event.preventDefault();
            var data = elem.getAttribute('data-data');
            console.log("data",data);
            itemEntry.value = data.replace(/\^/g,'\n');
            loadItems();
        });
    });
    [].forEach.call(document.querySelectorAll('.save-remove'),function(elem){
        // console.log(elem);
        elem.addEventListener('click',function(event){
            event.preventDefault();
            var keyToKill = elem.getAttribute('data-key');
            
            var storage = localStorage.getItem("spot-it");
            // console.debug(storage);
            storage = JSON.parse(storage);
            var result={};
            for(var key in storage) {
                if(key !== keyToKill){
                    result[key]=storage[key];
                }
            }
            localStorage.setItem("spot-it",JSON.stringify(result));
            readStorage();
        });
    });
}
readStorage();

document.querySelector('.save-it').addEventListener('click',function(event){
    event.preventDefault();
    saveData();
});
document.querySelector('#saves').classList.remove(classHide);

// stuff for accessing data from the URL

// to save on the URL size, lets see if there is a base portion of the strings, usually for images
function findBaseString(newWords){
    function sharedStart(array){ // http://stackoverflow.com/questions/1916218/find-the-longest-common-starting-substring-in-a-set-of-strings/1917041#1917041
        var A= array.concat().sort(), 
        a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
        while(i<L && a1.charAt(i)=== a2.charAt(i)) i++;
        return a1.substring(0, i);
    }
    var prefix = sharedStart(newWords);
    var croppedWords = [];
    newWords.forEach(function(word){
        croppedWords.push(word.replace(prefix,''));
    });
    
    return '?prefix='+prefix+'&value='+croppedWords.join('|');
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if(getParameterByName('value')){
    var itemList = getParameterByName('value').split('|');
    var prefix = getParameterByName('prefix');
    itemList = itemList.map(function(item){
        return prefix + item;
    });
    itemEntry.value = itemList.join("\n");
    urlLoaded = true;
    loadItems();
    // urlLoaded = false;
    document.querySelector('#urlWarning').classList.remove(classHide);
    
}

// list any locally stored images
function listLocal(){
    var theList = "";
    document.querySelector('.local_show').innerHTML = "";
    var storageTotal = 0;
    for(var key in localStorage) {
        // console.debug(key,localStorage[key]);
        // saves.innerHTML += '<li><a href="#d" data-saved="'+key+'" data-data="'+storage[key]+'">'+key+'</a> <a href="#d" class="save-remove" data-key="'+key+'">(delete)</a></li>';
        storageTotal += localStorage[key].length;
        if(key.indexOf('data') === 0){
            theList += '<li data-local="'+key+'">'+(key.replace("data:",""))+'<br /><img src="'+localStorage[key]+'" data-key="'+key+'" data-label="'+(key.split(":")[1].split(".")[0])+'"  /><br /><a href="#d" data-delete-local="'+key+'">Delete</a></li>';
        }
    }
    if(theList.length > 1){
        document.querySelector('.local_show').innerHTML = theList;
        document.querySelector('#local').classList.remove(classHide);
    }
    var prettyStorageTotal = (Math.floor(storageTotal/1024)/1000).toLocaleString()+'mb';
    console.log("StorageTotal: "+prettyStorageTotal);
}
listLocal();

function removeLocal(key){
    localStorage.removeItem(key);
    var theItem = document.querySelector('[data-local="'+key+'"]');
    if(theItem && theItem.parentNode){
        theItem.parentNode.removeChild(theItem);
    }
}
document.querySelector('.delete-all-local').addEventListener('click',function(event){
    event.preventDefault();
    if(confirm('Opravdu chcete smazat všechny obrázky?\nBudete je muset nahrát znovu pokud je budete chtít zpět.')){
        for(var key in localStorage) {
            // console.debug(key,localStorage[key]);
            if(key.indexOf('data') === 0){
                removeLocal(key);
            }
        }
    }
});
document.querySelector('.add-all-local').addEventListener('click',function(event){
    event.preventDefault();
    [].forEach.call(document.querySelectorAll('[data-local] img'),function(elem){
        if(!dataItemUsed(elem.getAttribute('data-key'))){
            itemEntry.value += '\n'+elem.getAttribute('data-key')+','+elem.getAttribute('data-label');
        }
    });
    loadItems();
});
document.querySelector('.remove-all-local').addEventListener('click',function(event){
    event.preventDefault();
    [].forEach.call(document.querySelectorAll('.used'),function(elem){
        // console.log(elem,elem.getAttribute('data-local'));
        var newList = removeFromList(elem.getAttribute('data-local'));
        // console.log(newList);
        itemEntry.value = newList.join('\n');
    });
    loadItems();
});
document.querySelector('.local_show').addEventListener('click',function(event){
    var target = event.target;
    while(target.nodeName !== "HTML"){
        // console.log(target.nodeName);
        if(target.nodeName === "A" || target.nodeName === "IMG"){ // found the closest A
            break;
        }
        target = target.parentNode;
        // console.debug("next parent",target);
    }
    if(target.nodeName === "A"){
        removeLocal(target.getAttribute('data-delete-local'));
    }
    if(target.nodeName === "IMG"){
        // console.log("use image",target);
        // console.log(target.parentNode,target.parentNode.classList.contains('used'),target.parentNode.classList);
        if(target.parentNode.classList.contains(classUsed)){
            // console.log("has used");
            // var theList = itemEntry.value.split("\n");
            // // console.log(theList);
            // var newList = theList.filter(function(a){
            //     // console.log(a.split(',')[0],target.getAttribute('data-key'),a.split(',')[0] !== target.getAttribute('data-key'));
            //     
            //     return a.split(',')[0] !== target.getAttribute('data-key');
            // });
            var newList = removeFromList(target.getAttribute('data-key'));
            // console.log(newList);
            itemEntry.value = newList.join('\n');
        } else {
            // console.log("no used");
            itemEntry.value += '\n'+target.getAttribute('data-key')+','+target.getAttribute('data-label');
        }
        loadItems();
    }
});

function removeFromList(key){
    var theList = itemEntry.value.split("\n");
    // console.log(theList);
    var newList = theList.filter(function(a){
        // console.log(a.split(',')[0],target.getAttribute('data-key'),a.split(',')[0] !== target.getAttribute('data-key'));
        
        return a.split(',')[0] !== key;
    });
    return newList;
}

function findDataItemsUsed(){
    // check the textarea for any items used
    // first remove any existing found indicators (we will reapply them later)
    var used = document.querySelectorAll('.'+classUsed);
    if(used.length){
        [].forEach.call(document.querySelectorAll('.'+classUsed),function(elem){
            elem.classList.remove(classUsed);
        });
    }
    // now loop through existing saved data items and see if they are in the list
    [].forEach.call(document.querySelectorAll('[data-local]'),function(elem){
        if(dataItemUsed(elem.getAttribute('data-local'))){
            elem.classList.add(classUsed);
        }
    });
}

function dataItemUsed(key){
    if(itemEntry.value.indexOf(key) !== -1){
        return true;
    }
    return false;
}
