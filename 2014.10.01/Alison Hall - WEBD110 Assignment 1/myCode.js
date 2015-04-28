

var cost = 0;
var selected = 0;
var error = 1;

var initialModel = null;
var processor = null;
var memory = null;
var windowsSystem = null;
var microsoftOffice = null;
var antivirus = null;
var hardDrive = null;
var keyboard = null;
var mouse = null;
var monitor = null;
var warranty = null;

var computer = [initialModel, processor, memory, windowsSystem, microsoftOffice, antivirus, hardDrive, keyboard, mouse, monitor, warranty];

var myQuestions = [
	{
		question: "Select your initial model of computer. \n(1) Dell Inspiron - $500 \n(2) Dell Precision - $1000", 
		options: ["Dell Inspiron", "Dell Precision"], 
		costs: [500, 1000]
	},
	{
		question: "Select your processor. \n(1) Intel Xeon Processor - $300 \n(2) Intel i7 - $200 \n(3) Intel i5 - $100 \n(4) Intel i3 - $0", 
		options: ["Intel Xeon Processor", "Intel i7", "Intel i5", "Intel i3"], 
		costs: [300, 200, 100, 0]
	},
	{
		question: "Select your memory. \n(1) 2GB RAM - $0 \n(2) 4GB RAM - $20 \n(3) 8GB RAM - $40 \n(4) 12GB RAM - $60 \n(5) 16GB RAM - $80", 
		options: ["2GB RAM", "4GB RAM", "8GB RAM", "12GB RAM", "16GB RAM"], 
		costs: [0, 20, 40, 60, 80]
	},
	{
		question: "Select your Windows System. \n(1) Windows 7 Pro 32-bit - $0 \n(2) Windows 7 Pro 64-bit - $10 \n(3) Windows 8.1 Pro 32-bit - $50 \n(4) Windows 8.1 Pro 64-bit - $60", 
		options: ["Windows 7 Pro 32-bit", "Windows 7 Pro 64-bit", "Windows 8.1 Pro 32-bit", "Windows 8.1 Pro 64-bit"], 
		costs: [0, 10, 50, 60]
	},
	{
		question: "Select your version of Microsoft Office. \n(1) Home 2013 - $310 \n(2) Office Professional 2013 - $540 \n(3) None - $0", 
		options: ["Home 2013", "Office Professional 2013", "None"], 
		costs: [310, 540, 0]
	},
	{
		question: "Select your Antivirus software. \n(1) McAfee Security Center 12 month subscription - $60 \n(2) McAfee Security Center 36 month subscription - $80 \n(3) None - $0", 
		options: ["McAfee Security Center 12 month subscription", "McAfee Security Center 36 month subscription", "None"], 
		costs: [60, 80, 0]
	},
	{
		question: "Select your Hard Drive. \n(1) 1TB 3.5inch Serial ATA (7200 RPM) Hard Drive - $200 \n(2) 500GB 3.5inch Serial ATA (7200 RPM) Hard Drive - $150 \n(3) 320GB 3.5inch Serial ATA (7200 RPM) Hard Drive - $100 \n(4) 120GB SSD - $180", 
		options: ["1TB 3.5inch Serial ATA (7200 RPM) Hard Drive", "500GB 3.5inch Serial ATA (7200 RPM) Hard Drive", "320GB 3.5inch Serial ATA (7200 RPM) Hard Drive", "120GB SSD"], 
		costs: [200, 150, 100, 180]
	},
	{
		question: "Select your Keyboard. \n(1) Include standard Keyboard - $0 \n(2) Do Not Include Keyboard - $0", 
		options: ["Include standard Keyboard", "Do Not Include Keyboard"], 
		costs: [0, 0]
	},
	{
		question: "Select your mouse. \n(1) Include standard Mouse - $0 \n(2) Do Not Include Mouse", 
		options: ["Include standard Mouse", "Do Not Include Mouse"], 
		costs: [0, 0]
	},
	{
		question: "Select your monitor. \n(1) None - $0 \n(2) 22 inches - $199 \n(3) 23 inches - $219 \n(4) 24 inches - $269 \n(5) 20 inches Touch Screen - $269 \n(6) 22 inches Touch Screen - $369", 
		options: ["None", "22 inches", "23 inches", "24 inches", "20 inches Touch Screen", "22 inches Touch Screen"], 
		costs: [0, 199, 219, 269, 269, 369]
	},
	{
		question: "Select your warranty option. \n(1) 1 Year Basic - $0 \n(2) 2 Years Basic - $59 \n(3) 3 Years Basic - $119 \n(4) 1 Year Premium - $69 \n(5) 2 Years Premium - $139 \n(6) 3 Years Premium - $219", 
		options: ["1 Year Basic", "2 Years Basic", "3 Years Basic", "1 Year Premium", "2 Years Premium", "3 Years Premium"], 
		costs: [0, 59, 119, 69, 139, 219]
	}
]


function computerOptions(j){
	error = 1;
	while (error == 1){
		selected = 0;
		error = 0;
		selected = prompt(myQuestions[j].question);
		console.log("Selected option " + selected);
		selected = selected-1;

		for (i = 0; i <= myQuestions[j].options.length; i++){
			if (i >= myQuestions[j].options.length){
				error = 1;
				console.log("Error in input");
				alert("That reply was not recognized. Please try again.");
				break;
			} else if (i == selected){
				computer[j] = myQuestions[j].options[i];
				cost = cost + myQuestions[j].costs[i];
				console.log("Cost updated to $" + cost);
				break;
			} else {
				// console.log("No change in cost");
			}
		}
	}
}

alert("To Buy a Computer. \nTo select an option, please type in the number that appears beside the option you want.");

for(var k=0;k<myQuestions.length;k++){
	computerOptions(k);
}

console.log(computer);
console.log(cost);

alert("The specifications of your computer are:\n Initial Model: " + computer[0] + "\n Processor: " + computer[1] + "\n Memory: " + computer[2] + "\n Windows System: " + computer[3] + "\n Microsoft Office: " + computer[4] + "\n Antivirus: " + computer[5] + "\n Hard Drive: " + computer[6] + "\n Keyboard: " + computer[7] + "\n Mouse: " + computer[8] + "\n Monitor: " + computer[9] + "\n Warranty: " + computer[10] + "\n\n The cost of this computer is $" + cost);