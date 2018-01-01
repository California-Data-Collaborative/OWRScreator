sectionTextDict = {
	"water":"Water Rates",
	"fixedServiceChargeSection":"Fixed Service Charge",
	"variableCommChargeSection":"Variable Commodity Charge",
	"drought":"Drought Rates",
	"fixedDroughtCharge":"Fixed Drought Charge",
	"variableDroughtCharge":"Variable Drought Charge",
	"wastewater":"Wastewater Rates",
	"fixedWastewaterCharge":"Fixed Wastewater Charge",
	"variableWastewaterCharge":"Variable Wastewater Charge",
};

questionDict = {
	"intro": "This portion of the survey is designed to gather detailed technical information about the structure and pricing "+
				"of your water rates."+
				"<br><br>"+
				"<font color='red'>ATTENTION:<br>"+
				"Please DO NOT refresh the page or hit the 'back' button in your browser. Instead use the 'Next' and 'Previous' "+
				"buttons at the bottom of the page.</font>",
                
    "nameQuestion" : "<b>1) Please enter your full name:</b>",
    
    "emailQuestion" : "<b>2) Please enter your E-mail address:<b>",
    
    "phoneQuestion" : "<b>3) Please enter a phone number we can reach you at:</b>",
				
	"utilityNameQuestion": "<b>1) Enter the Name of the Utility:</b>",
    
    "prop218Question": "<b>2) Please enter a link to your utility's Prop. 218 notice or another webpage where full water rate information can be found:</b>",
	
	"billFrequencyQuestion": "<b>3) Enter the Bill Frequency:</b>"+
						"<br><br>"+
						"In the case of different billing frequencies for different customers, please choose the most common case.",
						
	"effectiveDateQuestion": "<b>4) Enter the Effective Date of this Rate Structure:</b>",
	
	"custClassQuestion": "<b>5) Select the Customer Classes Used by the Utility:</b>"+
							"<br><br>"+
							"Note: Not all rate structures will break neatly into these categories. "+
							"If your rate codes span multiple customer classes (e.g. single and multifamily are billed the same) "+
							"please provide the same pricing information for both classes."+
							"<br><br>"+
							"Alternately, there may be cases where "+
							"a single customer class (e.g. commercial) is broken up into a number of different rate codes. "+
							"In this case, please use your best judgement and provide information for the most common case.",
							
	"fixedServiceChargeQuestion": "<b>1) Are customers in this class charged a fixed Service Charge?</b>",
	
	"variableCommChargeQuestion": "<b>2) Are customers in this class charged a variable Commodity Charge?</b>", 
				
	"serviceChargeDepends": "<b>Does the price of the fixed Service Charge depend on attributes of the customer account?</b>"+
					"<br><br>"+
					"For example, service charges often depend on meter size of the connection "+
					"but they can also change depending on other attributes like the pressure zone the meter is located in.",
					
	"howManyTiers": "<b>2.2) How Many Tiers?</b>",
	
	"doTiersDepend": "<b>2.3) Do the Tier Levels Depend On Anything?</b>"+
						"<br><br>"+
						"For example some rate structures change their tier widths seasonally, or based on discrete temerature zones.",
						
	"doPricesDepend": "<b>2.4) Do the Tier Prices Depend On Anything?</b>",
				
	"budgetExplainer1":"",
	
	"budgetExplainer2":"For the next questions, we would like to collect information about your water budget rate structure tiers."+
						"<br><br>"+
						"Each of these budget tiers will span a range of water use. However, in the fields below, "+
						"please specify only the <b>START</b> of each tier. You can also think of this as the transition "+
						"point between tiers. The end of each tier will be infered from your reponses."+
						"<br><br>"+
						"The following example illustrates how this is done:<br><br> "+
						"<ul>"+
						"<li><b>Tier 1 (Efficient Indoor Use)</b> - Based on an amount of usage per day for each person in a household. "+
						"Any use from 0 to the indoor budget falls into this tier, so please enter 0 as the tier start.</li><br>"+
						"<li><b>Tier 2 (Efficient Outdoor Use)</b> - Based on amount of landscaping and local weather data. "+
						"Any use above the indoor budget and below the total budget falls into this tier, so please enter 'indoor'. "+
						"Alternately, this threshold is sometimes specified as a percentage of total budget, "+
						"in which case '40%' would be appropriate.</li><br>"+
						"<li><b>Tier 3 (Inefficient Use)</b> - Based on exceeding the total water budget by up to 25%. "+
						"Any use from 100% of budget to 125% of budget falls in this tier, so please specify 100%</li><br>"+						
						"<li><b>Tier 4 (Wasteful Use)</b> - Based on exceeding the total water budget by between 25% and 50%. "+
						"Any use from 125% of budget to 150% of budget falls in this tier, so please specify 125%</li><br>"+							
						"<li><b>Tier 5 (Unsustainable Use)</b> - Based on exceeding the total water budget by more than 50%. "+
						"Any use above 150% of budget falls in this tier, so please specify 150%</li>"+	
						"</ul>"+
						"<br><br>"+
						"The second question will ask for the corresponding rates for the budget rates described. ",
						
	"isThereFixedDrought":"<b>Is there a fixed Drought Surcharge?</b>",
	"isThereVolumeDrought":"<b>Is There A Volumetric Drought Surcharge?</b>",
	
	"isThereFixedWastewater":"<b>Is there a fixed wasterwater charge?</b>",
	"isThereVolumeWastewater":"<b>Is There a Volumetric Wastewater Charge?</b>",
}

