var cname,email,country,phone;
class contact
{
    constructor(name,email,country,phone)
    {
        this.name=name;
        this.country=country;
        this.email=email;
    }
    
}



$(document).ready(()=>
{
     cname=$('#cname');
     email=$('#email');
     country=$('#country_select');
     phone=$('#phone');
     $.getJSON('/database/countries.json', function(jsonData)
      {
         
         $.each( jsonData, function( key, value ) 
            {
             country.append('<option>'+value+'</option>')
            });
      });

init();
});


function init()
{
console.log('script started');



   


}



function resetButton()
{

    console.log('fun1called');
    cname.val("");
    email.val("");
    country.val("Select Country");
    phone.val("");
    
    

}

$('#submit').click(function(e){ 

    e.preventDefault();
    var wtext = $('#warning_text');

    if(cname.val()=='' || email.val()=='' || country.val()=='Select Country' || phone.val()=='')
    {
        if(cname.val()=='')
        {
        cname.focus();
        wtext.text('Please fill the name');

        
        }

        else if(email.val()=='')
        {
        email.focus();
        wtext.text('Please fill the email');
        }

        else if(country.val()=='Select Country')
        {
        country.focus();
        wtext.text('Please select the country ');
        }

        else
        {
        phone.focus();
        wtext.text('Please fill the phone Number');
        }

        
    }
    else
    {

    var ckeys=Object.keys(localStorage);
    console.log(ckeys);
    
    if(ckeys.indexOf(cname.val())==-1)
    {
    var con=new contact(cname.val(),email.val(),country.val(),phone.val());
    localStorage.setItem(cname.val(),JSON.stringify(con));
    wtext.text('');
    $('#green_text').text('Contact Saved ..');

    console.log('Contact saved '+con);
    
    }
    else
    {
        wtext.text('Error : Contact Already Exists !');
        
    }
    
    
    }
    

    
    
});


function addContact()
{
    var divi=$('#form_div');
    divi.show();

}

function modifyContact()
{

}

function deleteContact()
{

}
function listAll()
{

}
function searchContact()
{
    var divi=$('#form_div');
    divi.hide();



}