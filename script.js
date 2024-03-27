function addNewSkill(){
    const skillName = document.getElementById('name').value;
    console.log(skillName);
    document.getElementById('menu').innerHTML += `<li>${skillName}</li>`;
    document.getElementById('name').value = '';
}
document.getElementById('add-new-skill').addEventListener('click', addNewSkill());