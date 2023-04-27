var dataBox = [
    {
        'nameBox':'Prfile',
        'image':'../../img/profile.png'
    },
    {
        'nameBox':'Student Menagement',
        'image':'../../img/student.png'
    },
    {
        'nameBox':'Class Menagement',
        'image':'../../img/class.png'
    },
    {
        'nameBox':'Viwer User',
        'image':'../../img/viwer.png'
    },
    {
        'nameBox':'Subjetc Menagement',
        'image':'../../img/subject.png'
    },
    {
        'nameBox':'Fee Menagement',
        'image':'../../img/fee.png'
    },
    {
        'nameBox':'Print Slip',
        'image':'../../img/print.png'
    },
    {
        'nameBox':'Reset Password',
        'image':'../../img/reset.png'
    },
    {
        'nameBox':'Calender',
        'image':'../../img/Calender.png'
    },
    {
        'nameBox':'Mail',
        'image':'../../img/mail.png'
    },
    {
        'nameBox':'Staff Menagement',
        'image':'../../img/staff.png'
    },
    {
        'nameBox':'Result Menagement',
        'image':'../../img/result.png'
    }
];
var orderbox = "";
for (var i=0; i<dataBox.length; i++){
    orderbox += `
        <div class="indexBox">
            <p>${dataBox[i]['nameBox']}</p>
            <img src="${dataBox[i]['image']}" alt="">
        </div>
    `;
    document.querySelector('.parentsBox').innerHTML = orderbox;
}

const showMenu = document.querySelector('.mainMenu');
document.querySelector('#show').addEventListener('click', function(){
    showMenu.style.visibility = 'visible';
    document.getElementById('show').style.visibility = 'hidden';
    document.getElementById('cloes').style.visibility = 'visible';
});
document.querySelector('#cloes').addEventListener('click', function(){
    showMenu.style.visibility = 'hidden';
    document.getElementById('show').style.visibility = 'visible';
    document.getElementById('cloes').style.visibility = 'hidden';
});
