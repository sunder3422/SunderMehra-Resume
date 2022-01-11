var myImg= document.querySelectorAll(".background-image")
var para= document.querySelector(".para");
var greetings= document.querySelector(".greetings");
var initialPara="HI";
var Grettings="I am a Web Developer";
var getList=initialPara.split('');
var getGreeting= Grettings.split('');
var InitiateInterval
var greetingInterval
var i=0;
var j=0;
function initial()
{
	console.log("helo");
	para.append(getList[i]);
	i++;
	if(i>=2)
	{
		
		para.className='afterPara';
		i=0;
		clearInterval(InitiateInterval)
		greetingInterval=setInterval(greeting,200);		
	}
}
InitiateInterval=setInterval(initial,200);

function greeting()
{
	greetings.append(getGreeting[i]);
	i++;
	if(i>=getGreeting.length)
	{
		clearInterval(greetingInterval) 
	}
}

  // observer= new IntersectionObserver((entries)=>{
  // entries.forEach(entry=>{
	    // entry.target.classList.toggle('gotimage',entry.isIntersecting);
	  // if(entry.isIntersecting) observer.unobserve(entry.target);
    // })
    // })
   // myImg.forEach(image=>{
	   // observer.observe(image);
   // });

