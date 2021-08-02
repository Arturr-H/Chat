let text = `

void Start()
{
    MonsterDungeonResult = Random.Range(MonsterDungeonMinY, MonsterDungeonMaxY);
    StartGeneration();
    Mbdy = GameObject.Find("MonsterBodyFollow").GetComponent<MonsterBodyFollowScript>();
    Random.InitState(Seed);
}function regex(){
    let one = document.getElementById("a1")
    let two = document.getElementById("a2")
    let string = "f.txt f1.txt f2.txt f3.txt ass.bass";
    let rgx = /(\w+)(\.txt)/g;

    let match = rgx.exec(string);
    while (match) {

        one.innerHTML = one.innerHTML + match[1] + match[2] + "<br />" 

        match = rgx.exec(string);
    }

}
function Classes() {
    class poop{
        poo(){
            return "shit";
        }
        
    }
    
    const heJ = new poop();
    
    console.log(heJ.poo())
}
function TryCatch() {
    try {
        duck(21412)
    } catch (error) {
        console.error(error);
    }
}
function Switch(){
    let num = 5;
    switch (num) {
        case 5:
            return "shit five";
        case 6: 
            return "shit six";

        default:
            return "no number";
    }
}let TimesSwitched = 0;


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
if (getCookie("NightMode") == "") {
    setCookie("NightMode", false);
}
function ToggleNM(){
    TimesSwitched++;
    let a = document.getElementById("NightModeBtn")
    if (getCookie("NightMode") == "false") {
        setCookie("NightMode", true)
        a.style.background = "rgb(236, 68, 68)"
    }else{
        setCookie("NightMode", false)
        a.style.background = "rgb(236, 48, 48)"

    }
    SetNm()
}
const a = document.getElementsByTagName("a")

let done = false;

function SetNm() {
    let root = document.documentElement;
    if (TimesSwitched >= 100) {
        if (done==false) {
            EasterEggsFound++;
            done=true;
        }
        root.style.setProperty("--BG", "rgb(237, 223, 24)");

        root.style.setProperty("--Btext", "black");
        root.style.setProperty("--DarkBg", "yellow");
        root.style.setProperty("--Text", "black");
        document.body.style.background = "rgb(237, 223, 24)"

        for (element of a) {
            element.style.color = "blue";
            element.style.textDecoration = "underline 0.05vmax";
        }
    }
    else if (getCookie("NightMode") == "false") {
        root.style.setProperty("--BG", "white");

        root.style.setProperty("--Btext", "rgb(255, 255, 255)");
        root.style.setProperty("--DarkBg", "rgb(0, 0, 0)");
        root.style.setProperty("--Text", "rgb(120, 120, 120)");
        root.style.setProperty("--Red", "rgb(236, 48, 48)");
        root.style.setProperty("--BW", "black");

        document.body.style.background = "white"
        for (element of a) {
            element.style.color = "blue";
            element.style.textDecoration = "underline 0.05vmax";
        }
        
    }else{
        root.style.setProperty("--BG", "rgb(25, 25, 25)");

        root.style.setProperty("--Btext", "rgb(0, 0, 0)");
        root.style.setProperty("--DarkBg", "rgb(236, 48, 48)");//afhwafbahwfbjahfjahwbfjh
        root.style.setProperty("--Text", "white");
        root.style.setProperty("--Red", "rgb(25, 25, 25)");
        root.style.setProperty("--BW", "white");

        document.body.style.background = "rgb(25, 25, 25)"
        for (element of a) {
            element.style.color = "white";
            element.style.textDecoration = "underline 0.05vmax";
          }
    }

}

SetNm()
function newRgx() {
    let string = "hejsan.txt jag gillar kakor.txt jag vet inte vad jag ska.txt skriva.";
    let rgx = /(\w+)\.txt/g;

    let match = rgx.exec(string)

    while (match) {
        console.log("M: "+match[1])
        console.log(string)
        match = rgx.exec(string)
    }
}


void RandomlyGoUp(){
    if(CanRandomlyGoUp && Random.Range(1, GoUpRarity) == 1){
        Dir = 4;
    }
}
public void StartGeneration(){
    Seed = Random.Range(1, 1000000);
    Random.InitState(Seed);
    if(CanGoUp == true){
        Dir = Random.Range(1, 5);
    }else{
        Dir = Random.Range(1, 4);
        RandomlyGoUp();
    }

}
void FixedUpdate()
{
    Debug.Log(CurrentLength);
    if(TilePos.y >= SpawnYaxis.transform.position.y - 40 && CurrentLength <= TotalLength){
        GenerateDungeon();
        CurrentLength++;
    }
}
void Reset(){//resetar alla variablar när man kör igen, om inte så skulle labyrinten fortsätta på samma pos som innan
    WallTiles.ClearAllTiles();//ta bort alla tiles från tilemappen
    GroundTiles.ClearAllTiles();
    TilePos = new Vector3(0, 0, 0);
    End.transform.position = new Vector3(0, 0, 0);
    DungeonSpawner.transform.position = new Vector3(0, 0, 0);
    CurrentSizeX = 1;
    CurrentSizeY = 1;
    SpawnExitDoor = false;
    sec = 0;
    LastSpawn = false;
    CurrentTile = 0;
    CurrentLength = 0;
}
void CreateTiles(){
    Vector3Int currentCell = WallTiles.WorldToCell(TilePos);//få positionen vart den ska sätta blocket
    WallTiles.SetTile(currentCell, WallTile);//sätt ut de riktiga labyrinten
    GroundTiles.SetTile(currentCell, GroundTile);

    if(EveryFourthTarget >= 5 && !CurrentlySpawningMdungeon){//placerar bara vart fjärde target så det blir bättre performance
        GameObject InstantiatedTarget = Instantiate(TargetPoint, new Vector3((currentCell.x * 3) + 8.95f, (currentCell.y * 3) + 16.2f, 0), transform.rotation);//gör en target som monstret ska följa
        Mbdy.Targets.Add(InstantiatedTarget);
        EveryFourthTarget = 0;
    }else{
        EveryFourthTarget++;
    }
    // if(Random.Range(1, CableRarity) == 1){s
    //     GameObject cbl = Instantiate(Cable, TilePos, transform.rotation);
    //     cbl.GetComponent<SpriteRenderer>().sprite = CableSprites[Random.Range(0, CableSprites.Count)];
    // }

    for (int a = 0; a < sizeX; a++)//loopen som sätter ut X tiles, men bara om du har Xsize till större än 0 
    {
        currentCell = WallTiles.WorldToCell(new Vector3(TilePos.x + CurrentSizeX, TilePos.y, 0));
        CurrentSizeX++;
        WallTiles.SetTile(currentCell, WallTile);
        GroundTiles.SetTile(currentCell, GroundTile);
    }
    for (int a = 0; a < sizeY; a++)//loopen som sätter ut Y tiles, men bara om du har Ysize till större än 0
    {
        currentCell = WallTiles.WorldToCell(new Vector3(TilePos.x, TilePos.y + CurrentSizeY, 0));
        CurrentSizeY++;
        WallTiles.SetTile(currentCell, WallTile);
        GroundTiles.SetTile(currentCell, GroundTile);
    }

    if(Random.Range(1, CarpetRarity) == 1 && !CurrentlySpawningCarpet){
        CurrentlySpawningCarpet = true;
        CarpetLen = Random.Range(CarpetLenMin, CarpetLenMax);
    }if(CurrentlySpawningCarpet){
        CurrentCarpet++;

        if(CurrentCarpet >= CarpetLen){
            CurrentlySpawningCarpet = false;
        }
        Vector3Int RugCell = RugTiles.WorldToCell(TilePos);
        RugTiles.SetTile(RugCell, RugTile);

    }

    
    CurrentSizeY = 1;
    CurrentSizeX = 1;
    // if(Random.Range(1, CoinRarity) == 1){//spawna coins
    //     Instantiate(Coin, new Vector3(TilePos.x + 0.5f, TilePos.y + 0.5f, 0), transform.rotation);
    // }

    if(Random.Range(1, RoomRarity) == 1 && CanSpawnRooms){
        currentCell = WallTiles.WorldToCell(new Vector3(TilePos.x - (int)(RoomSizeX / 2), TilePos.y, 0));//GÖR RUM OM DET CAN SPAWN ROOMS ÄR PÅ OCH RANDOM BLÖIR RÄTT
        WallTiles.SetTile(currentCell, WallTile);
        GroundTiles.SetTile(currentCell, GroundTile);
        for (int height = 0; height < RoomSizeY; height++)//ypos av rummet
        {
            for (int d = 0; d < RoomSizeX; d++)//Xpos av rummet
            {
                currentCell = WallTiles.WorldToCell(new Vector3(TilePos.x - RoomSizeX + d, TilePos.y - height, 0));
                WallTiles.SetTile(currentCell, WallTile);
                GroundTiles.SetTile(currentCell, GroundTile);        
            }                
        }
    }
}

private void GenerateDungeon(){
    PrevDir = Dir;
    if(CanRepeat == true){
        if(CanGoUp == true){
            Dir = Random.Range(1, 5);
        }else{
            Dir = Random.Range(1, 4);
            RandomlyGoUp();
        }
    }
    else{
        while(Dir == PrevDir){//om CanRepeat == false så kollar den i en while loop om Dir = prevDir, om så så gör den om det.
            if(CanGoUp == true){// om man kan gå upp så ta ett nummer bland 1, 2, 3 och 4
                Dir = Random.Range(1, 5);
            }else{//om INTE man kan gå upp så ta ett nummer bland 1, 2 och 3
                Dir = Random.Range(1, 4);
                RandomlyGoUp();
            }
        }
    }

    if(Dir == 1){//vänster
        for (int i = 0; i < Random.Range(MinLength, MaxLength); i++)//Väljer en längd mellan minLength å maxLength
        {
            TilePos = new Vector3(DungeonSpawner.transform.position.x - 1, DungeonSpawner.transform.position.y, 0);
            DungeonSpawner.transform.position = TilePos;
            CreateTiles();   
        }
    }
    else if(Dir == 2){//ner
        for (int i = 0; i < Random.Range(MinLength, MaxLength); i++)//Väljer en längd mellan minLength å maxLength
        {
            TilePos = new Vector3(DungeonSpawner.transform.position.x, DungeonSpawner.transform.position.y - 1, 0);
            DungeonSpawner.transform.position = TilePos;
            CreateTiles();         
        }
    }
    else if(Dir == 3){//höger
        for (int i = 0; i < Random.Range(MinLength, MaxLength); i++)//Väljer en längd mellan minLength å maxLength
        {
            TilePos = new Vector3(DungeonSpawner.transform.position.x + 1, DungeonSpawner.transform.position.y, 0);
            DungeonSpawner.transform.position = TilePos;
            CreateTiles();               
        }
    }
    else if(Dir == 4){//Upp men bara om CanGOUp = true
        if(CanGoUp || CanRandomlyGoUp){//om randomly go up eller can go up är true så executas det här nere
            for (int i = 0; i < Random.Range(MinLength, MaxLength); i++)//Väljer en längd mellan minLength å maxLength
            {
                TilePos = new Vector3(DungeonSpawner.transform.position.x, DungeonSpawner.transform.position.y + 1, 0);
                DungeonSpawner.transform.position = TilePos;
                CreateTiles();               
            }
        }
    }
    if(CurrentLength >= TotalLength - 1){
        End.transform.position = TilePos;//Sätt ut en röd kub där den sista delen är
        for (int i = 0; i < EndCorridorLen; i++)
        {

            if(i == EndCorridorLen - 1){
                SpawnExitDoor = true;
                Debug.Log("EXITTT");
            }

            TilePos = new Vector3(DungeonSpawner.transform.position.x, DungeonSpawner.transform.position.y - 1, 0);
            DungeonSpawner.transform.position = TilePos;
            CreateTiles();
        }
    }
    CurrentTile++;

    if(CurrentTile >= MonsterDungeonResult && !HasSpawnedMonsterChamber){//om hur många tiles som är ute är mer än hur sent man vill att
        for (int i = 0; i < MonsterDungeonLen; i++)
        {
            TilePos = new Vector3(DungeonSpawner.transform.position.x + 1, DungeonSpawner.transform.position.y, 0);
            DungeonSpawner.transform.position = TilePos;
            CurrentlySpawningMdungeon = true;
            CreateTiles();
        }
        for (int i = 0; i < MonsterDungeonLen; i++)
        {
            TilePos = new Vector3(DungeonSpawner.transform.position.x - 1, DungeonSpawner.transform.position.y, 0);
            DungeonSpawner.transform.position = TilePos;
            CurrentlySpawningMdungeon = true;
            CreateTiles();
        }
        HasSpawnedMonsterChamber = true;
        CurrentlySpawningMdungeon = false;
    }
}
void Restart(){
    Reset();// Rensa Tilemappen och starta om variablar
    Vector3Int currentCell = WallTiles.WorldToCell(Vector3.zero);// StartTilen
    WallTiles.SetTile(currentCell, WallTile);// StartTilen
}
}


`
text = text.replaceAll("\n", "");
let textThing = document.getElementById("pt")
let index = 0;
let allText = text.split(" ")
document.addEventListener("keydown", function() {
    if (parseInt(Math.random() * 15) == 1) {
        textThing.innerHTML += "<br />"
    }
    
    window.scrollTo(0, 99999999);
    if (index <= allText.length) {
        textThing.innerHTML += allText[index] + " "
        index++;
    }else{
        index = 0;
    }
})