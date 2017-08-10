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
				"of your water rates. "+
				"<br><br>"+
				"For inquiries, please contact Kevin Kostiuk < KKostiuk@raftelis.com >"+
				"<br><br>"+
				"<font color='red'>ATTENTION:<br>"+
				"Please DO NOT refresh the page or hit the 'back' button in your browser. Instead use the 'Next' and 'Previous' "+
				"buttons at the bottom of the page.</font>",
				
	"utilityNameQuestion": "<b>1) Enter the name of the utility:</b>",
	
	"billFrequencyQuestion": "<b>2) Enter the bill frequency:</b>"+
						"<br><br>"+
						"In the case of different billing frequencies for different customers, please choose the most common case.",
						
	"billingUnitQuestion": "<b>Select the billing unit:</b>",
						
	"effectiveDateQuestion": "<b>3) Enter the effective date of this rate structure:</b>",
	
	"custClassQuestion": "<b>4) Select the customer classes to report in this survey:</b>"+
							"<br><br>"+
							"Note: Please complete single-family rates and as many other classes as you are comfortable providing."+
							"<br><br>"+
							"Not all rate structures will break neatly into these categories. "+
							"If your rate codes span multiple customer classes (e.g. single and multifamily are billed the same) "+
							"please provide the same pricing information for both classes."+
							"<br><br>"+
							"Alternately, there may be cases where "+
							"a single customer class (e.g. commercial) is broken up into a number of different rate codes. "+
							"In this case, please use your best judgement and provide information for the most common case.",
							
	"fixedServiceChargeQuestion": "<b>1) Are customers in this class charged a Fixed Service Charge?</b>",
	
	"doFixedPricesDepend": "<b>1.2) What attributes does the price depend on?</b>",
	
	"variableCommChargeQuestion": "<b>2) Are customers in this class charged a Variable Commodity Charge?</b>", 
					
	"howManyTiers": "<b>2.2) How many tiers?</b>",
	
	"doTiersDepend": "<b>2.3) Do the tier definitions depend on customer attributes?</b>"+
						"<br><br>"+
						"For example some rate structures change their tier definitions seasonally, or based on discrete temperature zones.",
						
	"doTierPricesDepend": "<b>2.4) Do the tier prices depend on customer attributes?</b>",
	
	"tierPricesDependWhat": "<b>2.5) What attributes do the tier prices depend on?</b>",
				
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
						
	"isThereFixedDrought":"<b>Is there a Fixed Drought Surcharge? (also referred to as drought rates, water shortage charges, or similar):</b>",
	"isThereVolumeDrought":"<b>Is there a Variable Drought Surcharge? (also referred to as drought rates, water shortage charges, or similar):</b>",
	
	"isThereFixedWastewater":"<b>Is there a fixed wasterwater charge?</b>",
	"isThereVolumeWastewater":"<b>Is There a Variable Wastewater Charge?</b>",
}

