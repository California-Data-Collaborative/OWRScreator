var surveyJSON = '{"title": "Open Water Rate Survey",' +
'"billFrequency": ["Monthly", "Bi-Monthly", "Quarterly", "Annually", "Semi-Annually"],'+
'"rateStructures":['+
'"Single-Family Residential", "Multi-Family Residential",'+
'"Irrigation", "Commercial",'+
'"Industrial", "Institutional", "Agriculture",'+
'"Fire Service", "Raw Water",'+
'"Non-Residential", "Unmetered", "Governmental",'+
'"Interruptible",'+
'"Potable", "Recycled",'+
'"Other"],'+
'"commodityDependsOn": ["Meter Size", "Meter Type", "Season", "Temperature Zone", "Pressure Zone", '+
'"Lot Size Group", "Month", "City Limits"],'+
'"meterSizes": ["5/8","3/4", "1", "1 1/2", "2", "3", "4", "6", "8", "10", "12", "14", "16", "18"],'+
'"meterTypes": ["Disc", "Compound", "Turbo", "Magnetic Meter", "Propeller", "Omni F2", "Displacement"],'+
'"season": ["Summer", "Winter"],'+
'"temperatureZone": ["Low", "Medium", "High"], '+
'"pressureZone":["1", "2", "3", "4", "5", "6"],'+
'"lotSizeGroup":["1", "2", "3", "4", "5"],'+
'"month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],'+
'"cityLimits": ["Inside City", "Outside City"]}'
var survey = JSON.parse(surveyJSON);
survey.utilities = utilityList;

                var form = document.getElementById("survey");
                var title = document.getElementById("Header");
                var subtitle = document.getElementById("lilHeader");
                var currentIndex = 0;
				var surveyIsCompleted = false;
                
                var Question;
                var Answer;
                var text;
                var OWRSformat;
                
                var UtilityName = "";
                var BillFrequency = "";
				var BillingUnit = "ccf";
                var EffectiveDate = "";
                var SelectedRateStructures = [];
                var ServiceSame = [];
                
                var serviceParameters = [];
                var serviceChargeCategories = [];
                var serviceCharges = [];
                var isServiceCharge = [];
                var isServiceDepends = [];
                var isServiceSame = [];
                var serviceSameStructure = [];
                var ParametersToUse = [];
                
                var uniformParameters = [];
                var commodityStructure = [];
                var numOfTiers = [];
                var tierStartsParameters = [];
                var tierStarts = [];
                var isTierStartsDepends = [];
                var tierStartsValues = [];
                var tierStartsCategories = [];
                var tierPricesParameters = [];
                var tierPrices = [];
                var isTierPricesDepends = [];
                var tierLevels = [];
                var uniformPrices = [];
                var isCommodityCharge = [];
                var isUniformDependsOn = [];
                var commodityChargeCategories = [];
                var commodityCharges = [];
                var tierStartsDependsOn = [];
                var tierPricesDependsOn = [];
                var isCapacityCharge = false;
                var capacityMeterSizes = [];
                var capacityCharges;
                
                var gpcd = [];
                var landscape_factor = [];
                var indoor = [];
                var outdoor = [];
                var budget = [];
                //var billingUnits = [];
                
                var uniformDependsOn = [];
                var commodityMeterSize = [];
                var month = [];
                var season = [];
                var pressureZone = [];
                var temperatureZone = [];
                var lotSizeGroup = [];
                var meterType = [];
                var cityLimits = [];
                
                var serviceJSON;
                var commodityJSON;
                
                function primeArrays()
                {
                    if(serviceParameters[currentIndex] == null)
                        serviceParameters[currentIndex] = [];
                    if(serviceChargeCategories[currentIndex] == null)
                        serviceChargeCategories[currentIndex] = [];
                    if(serviceCharges[currentIndex] == null)
                        serviceCharges[currentIndex] = [];
                    if(isServiceCharge[currentIndex] == null)
                        isServiceCharge[currentIndex] = [];
                    if(isServiceDepends[currentIndex] == null)
                        isServiceDepends[currentIndex] = [];
                    if(isServiceSame[currentIndex] == null)
                        isServiceSame[currentIndex] = [];
                    if(serviceSameStructure[currentIndex] == null)
                        serviceSameStructure[currentIndex] = [];
                    if(ParametersToUse[currentIndex] == null)
                        ParametersToUse[currentIndex] = [];
                    
                    if(uniformParameters[currentIndex] == null)
                        uniformParameters[currentIndex] = [];
                    if(commodityStructure[currentIndex] == null)
                        commodityStructure[currentIndex] = [];
                    if(numOfTiers[currentIndex] == null)
                        numOfTiers[currentIndex] = [];
                    if(tierStartsParameters[currentIndex] == null)
                        tierStartsParameters[currentIndex] = [];
                    if(tierStarts[currentIndex] == null)
                        tierStarts[currentIndex] = [];
                    if(isTierStartsDepends[currentIndex] == null)
                        isTierStartsDepends[currentIndex] = [];
                    if(tierStartsValues[currentIndex] == null)
                        tierStartsValues[currentIndex] = [];
                    if(tierStartsCategories[currentIndex] == null)
                        tierStartsCategories[currentIndex] = [];
                    if(tierPricesParameters[currentIndex] == null)
                        tierPricesParameters[currentIndex] = [];
                    if(tierPrices[currentIndex] == null)
                        tierPrices[currentIndex] = [];
                    if(isTierPricesDepends[currentIndex] == null)
                        isTierPricesDepends[currentIndex] = [];
                    if(tierLevels[currentIndex] == null)
                        tierLevels[currentIndex] = [];
                    if(uniformPrices[currentIndex] == null)
                        uniformPrices[currentIndex] = [];
                    if(isCommodityCharge[currentIndex] == null)
                        isCommodityCharge[currentIndex] = [];
                    if(isUniformDependsOn[currentIndex] == null)
                        isUniformDependsOn[currentIndex] = [];
                    if(commodityChargeCategories[currentIndex] == null)
                        commodityChargeCategories[currentIndex] = [];
                    if(commodityCharges[currentIndex] == null)
                        commodityCharges[currentIndex] = [];
                    if(tierStartsDependsOn[currentIndex] == null)
                        tierStartsDependsOn[currentIndex] = [];
                    if(tierPricesDependsOn[currentIndex] == null)
                        tierPricesDependsOn[currentIndex] = [];
                    
                    if(gpcd[currentIndex] == null)
                        gpcd[currentIndex] = [];
                    if(landscape_factor[currentIndex] == null)
                        landscape_factor[currentIndex] = [];
                    if(indoor[currentIndex] == null)
                        indoor[currentIndex] = [];
                    if(outdoor[currentIndex] == null)
                        outdoor[currentIndex] = [];
                    if(budget[currentIndex] == null)
                        budget[currentIndex] = [];
                    //if(billingUnits[currentIndex] == null)
                    //    billingUnits[currentIndex] = [];
                    
                    if(uniformDependsOn[currentIndex] == null)
                        uniformDependsOn[currentIndex] = [];
                    if(commodityMeterSize[currentIndex] == null)
                        commodityMeterSize[currentIndex] = [];
                    if(month[currentIndex] == null)
                        month[currentIndex] = [];
                    if(season[currentIndex] == null)
                        season[currentIndex] = [];
                    if(pressureZone[currentIndex] == null)
                        pressureZone[currentIndex] = [];
                    if(temperatureZone[currentIndex] == null)
                        temperatureZone[currentIndex] = [];
                    if(lotSizeGroup[currentIndex] == null)
                        lotSizeGroup[currentIndex]= [];
                    if(meterType[currentIndex] == null)
                        meterType[currentIndex] = [];
                    if(cityLimits[currentIndex] == null)
                        cityLimits[currentIndex] = [];
                }
                
                //Fills All Html elements for first page
                function MainPage()
                {
                    //Set The Title and Clear Form If Present
                    title.innerHTML = survey.title;
                    subtitle.innerHTML = "";
                    clear(form);
                    
					createSection(questionDict["intro"], "intro", "h5", form)
					
                    QuestionTxt(questionDict["utilityNameQuestion"], "utilityNameQuestion", form);
                
                    //Create Utility Name DropDown List
                    Answer = document.createElement("input");
					Answer.setAttribute("id", "utilityName");
					Answer.setAttribute("name", "utilityName");
					Answer.setAttribute("type", "text");
					Answer.setAttribute("placeholder", "Anytown Water District...");
					Answer.classList.add("form-control");
					Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
					form.appendChild(Answer);
					
					new autoComplete({
						selector: 'input[name="utilityName"]',
						minChars: 2,
						source: function(term, suggest){
							term = term.toLowerCase();
							var choices = survey.utilities;
							var matches = [];
							for (i=0; i<choices.length; i++)
								if (typeof choices[i] != 'undefined'){
									if (~choices[i].toLowerCase().indexOf(term)) 
										matches.push(choices[i]);
								}
							suggest(matches);
						},
						onSelect: function(e, term, item){
							return false;
						}
					});
                
                    QuestionTxt(questionDict["billFrequencyQuestion"], "billFrequencyQuestion", form);
                    
                    //Create Bill Frequency Drop Down
                    Answer = document.createElement("select");
                
                    for(var i = 0; i < survey.billFrequency.length; ++i)
                    {
                        Answer.appendChild(new Option(survey.billFrequency[i], survey.billFrequency[i]));
                    }
                    Answer.id = "billFrequency";
                    Answer.classList.add("form-control");
                    form.appendChild(Answer);
					
					QuestionTxt(questionDict["billingUnitQuestion"], "billingUnitQuestion", form);
                    
                    //Create Billing Unit Radio button
                    Answer = document.createElement("span");
                    Answer.innerHTML = '<label for = "YesBillUnits" class = "radio-inline"><input type = "radio" id = "YesBillUnits" name = "BillUnits" onclick = "BillingUnit=\'kgal\'" value = "kgal" />'+
                    'Kgal (1000 gallons)</label>'+
                    '<label for = "NoBillUnits" class = "radio-inline"><input type = "radio" id = "NoBillUnits" name = "BillUnits" onclick = "BillingUnit=\'ccf\'" value = "ccf" checked/>'+
                    'CCF (748.052 gallons)</label>';
                    Answer.id = "billingUnit";
                    Answer.classList.add("form-control");
                    form.appendChild(Answer);
                    
                    QuestionTxt(questionDict["effectiveDateQuestion"], "effectiveDateQuestion", form);
                    
                    //Create Effective Date Date Input
                    Answer = document.createElement("input");
                    Answer.setAttribute("type", "text");
                    Answer.classList.add("form-control");
                    Answer.id = "effectiveDate";
					Answer.setAttribute("placeholder", "mm/dd/yyyy");
                    form.appendChild(Answer);
					$( "#effectiveDate" ).datepicker();
                    
                    QuestionTxt(questionDict["custClassQuestion"], "custClassQuestion", form);
                    
                    //Creates Checkboxes for all the Rate Structures
                    for(var i = 0; i < survey.rateStructures.length; ++i)
                    {
                        DIV = document.createElement("div");
                        DIV.classList.add("checkbox");
                        form.appendChild(DIV);
                        
                        Answer = document.createElement("label");
                        Answer.setAttribute("for", "custClass" + i); 
						
						if(survey.rateStructures[i] === "Single-Family Residential")
						{
							Answer.innerHTML = '<input type = "checkbox" id = "custClass'+ i +
												'" value = "' + survey.rateStructures[i] +'" checked/> ' + survey.rateStructures[i] + '';
						}
						else
						{
							Answer.innerHTML = '<input type = "checkbox" id = "custClass'+ i +
												'" value = "' + survey.rateStructures[i] +'"/> ' + survey.rateStructures[i] + '';
						}
                        
                        DIV.appendChild(Answer); 
                    }
                    
                    //Buttons To Call answers and go to next rate stucture
                    var ButtonDiv = document.createElement("div");
                    ButtonDiv.style.marginTop = "15px";
                    form.appendChild(ButtonDiv);
                    
                    var Button = document.createElement("span");
                    Button.id = "nextButton";
                    Button.innerHTML = '<button type = "button" onclick = "GetMainPageAnswers()" class = "btn">Next</button>';
                    ButtonDiv.appendChild(Button);
                    
                    //Checks if Data is Present and Populates inputs if so
                    if(UtilityName != "")
                    {
                        document.getElementById("utilityName").value = UtilityName;
                        document.getElementById("billFrequency").value = BillFrequency;
						setBillingUnit();
                        document.getElementById("effectiveDate").value = EffectiveDate;
                        
                        for(var i = 0; i < 17; ++i)
                        {
                            var temp = document.getElementById("custClass" + i);
                            
                            check = false;
                            for(var j = 0; j < SelectedRateStructures.length; ++j)
                            {
                                var test = survey.rateStructures[i];
                                
                                if( test == SelectedRateStructures[j])
                                {
                                    var check = true;
                                }
                            }
                            
                            if(check)
                            {
                                temp.checked = true;
                            }
                        }
                    }
                }
                
                //Gets Data from first page and calls RateStructure Function
                function GetMainPageAnswers()
                {
                    //Clears array and gets data from form elements
                    SelectedRateStructures = [];
                    UtilityName = document.getElementById("utilityName").value;
                    BillFrequency = document.getElementById("billFrequency").value;
                    EffectiveDate = document.getElementById("effectiveDate").value;
                    
                    //Error checking for Date
                    var date = true;
                    if(EffectiveDate == "" | !EffectiveDate.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/g))
                    { 
                        alert("Must select a valid Effective Date for the Rate Structure");
                        date = false;
                    }
                    
                    //Error Checking for Rate Structures
                    var noneChecked = true;
                    for(var numOfCheckBoxes = 0; numOfCheckBoxes < survey.rateStructures.length ; ++numOfCheckBoxes)
                    {
                        var temp = document.getElementById("custClass" + numOfCheckBoxes);
                        
                        
                        if(temp.checked == true)
                        { 
                            SelectedRateStructures.push(survey.rateStructures[numOfCheckBoxes]);
                            noneChecked = false;
                        }
                    }
                    if(noneChecked)
                    { alert("Please Select A Customer Class"); }
                    
                    //Call Next Page
                    if(!noneChecked && date)
                    ChargePage();
                }
                
                function ChargePage()
                {
                    title.innerHTML = UtilityName;
                    subtitle.innerHTML = "Capacity Charges";
                    clear(form);
                    
                    var capacityDiv = document.createElement("div");
                    capacityDiv.id = "Capacity";
                    form.appendChild(capacityDiv);
                    
                    var questionDiv = document.createElement("div");
                    questionDiv.id = "questionDiv";
                    capacityDiv.appendChild(questionDiv);
                    
                    var meterDiv = document.createElement("div");
                    meterDiv.id = "meterDiv";
                    capacityDiv.appendChild(meterDiv);
                    
                    var fieldDiv = document.createElement("div");
                    fieldDiv.id = "fieldDiv";
                    capacityDiv.appendChild(fieldDiv);
                    
                    QuestionTxt("<b>5) Is there a Capacity Charge(s) for this Utility</b>", 13, questionDiv);
                    
                    Answer = document.createElement("span");
                    
                    if(isCapacityCharge)
                    {
                        Answer.innerHTML = '<label for = "YesCapacityCharge" class ="radio-inline"><input type = "radio" id = "YesCapacityCharge" name = "isCapacityCharge" onclick = "capacityCharge()" value = "Yes"   checked = "true"/>Yes</label>'+
                        '<label for = "NoCapacityCharge" class ="radio-inline"><input type = "radio" id = "NoCapacityCharge" name = "isCapacityCharge" onclick = "capacityCharge()" value = "No"/>No</label>';
                        questionDiv.appendChild(Answer);
                        capacityCharge();
                    }
                    else
                    {
                        Answer.innerHTML = '<label for = "YesCapacityCharge" class ="radio-inline"><input type = "radio" id = "YesCapacityCharge" name = "isCapacityCharge" onclick = "capacityCharge()" value = "Yes" />Yes</label>'+
                        '<label for = "NoCapacityCharge" class ="radio-inline"><input type = "radio" id = "NoCapacityCharge" name = "isCapacityCharge" onclick = "capacityCharge()" value = "No"  checked = "true"/>No</label>';
                        questionDiv.appendChild(Answer);
                    }
                    
                    var ButtonDiv = document.createElement("div");
                    ButtonDiv.style.marginTop = "15px";
                    form.appendChild(ButtonDiv);
                    
                    
                    var Button = document.createElement("span");
                    Button.innerHTML = '<button type = "button" style = "margin-right: 10px" onclick = "MainPage()" class ="btn">Previous</button>' + 
                    '<button type = "button" onclick = "ChargePageAnswers()" class = "btn">Next</button>';
                    ButtonDiv.appendChild(Button);
                }
                
                function capacityCharge()
                {
                    var Radio = document.getElementById("YesCapacityCharge");
                    isCapacityCharge = Radio.checked;
                    
                    if(isCapacityCharge)
                    {
                        var meterDiv = document.getElementById("meterDiv");
                        if(meterDiv.childNodes.length > 0)
                        {
                            clear(meterDiv)
                        }
                        
                        QuestionTxt("<b>5.1) Select the Meter Sizes that have a Capacity Charge</b>", 100, meterDiv);
                        
                        for(var i = 0; i < survey.meterSizes.length; ++i)
                        {
                            var divider = document.createElement("div");
                            divider.classList.add("checkbox");
                            var checkboxID = "MeterSize" + i;
                            divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "CapacityValues" onclick = "getCapacityValues()" value ="' + survey.meterSizes[i]+ '"/>'+
                            '' + survey.meterSizes[i] + '"</label>';
                            meterDiv.appendChild(divider);
                        }
                        
                        if(capacityMeterSizes.length > 0)
                        {
                            for(var i = 0; i < survey.meterSizes.length; ++i)
                            {
                                var checkCheckBox = document.getElementById("MeterSize" + i);
                                for(var j = 0; j < capacityMeterSizes.length; ++j)
                                {
                                    if(capacityMeterSizes[i] == checkCheckBox.value + "<QUOTE>")
                                    {   
                                        checkCheckBox.checked = true;
                                    }
                                }
                            }
                            
                            getCapacityValues();
                        }
                    }
                    else
                    {
                        capacityMeterSizes = [];
                        ChargePage();
                    }
                }
                
                function getCapacityValues()
                {
                    capacityMeterSizes = [];
                    
                    for(var i = 0; i < survey.meterSizes.length; ++i)
                    {
                        var temp = document.getElementById("MeterSize" + i);
                        if(temp.checked)
                        {
                            capacityMeterSizes.push(temp.value + "<QUOTE>");
                        }
                    }
                    
                    createCapacityFields();
                }
                
                function createCapacityFields()
                {
                    var fieldDiv = document.getElementById("fieldDiv");
                    if(fieldDiv.childNodes.length > 0)
                        clear(fieldDiv);
                    
                    QuestionTxt("<b>5.2) Enter The Capacity Charges Below:</b>", 45, fieldDiv)
                    
                    for(var i = 0; i < capacityMeterSizes.length; ++i)
                        {
                            divider = document.createElement("div");
                            divider.classList.add("form-group");
                            fieldDiv.appendChild(divider);
                                    
                            Answer = document.createElement("label");
                            Answer.setAttribute("for", "capacityCharge" + i);
                            Answer.appendChild(document.createTextNode(capacityMeterSizes[i].split("<QUOTE>").join('"')));
                            divider.appendChild(Answer);
                                
                            inputGroup = document.createElement("div");
                            inputGroup.classList.add("input-group");
                            divider.appendChild(inputGroup);
                                    
                            Answer = document.createElement("span");
                            Answer.classList.add("input-group-addon");
                            Answer.innerHTML = '<i class="glyphicon glyphicon-usd"></i>';
                            inputGroup.appendChild(Answer);
                                
                            Answer = document.createElement("input");
                            Answer.setAttribute("type", "text");
                            Answer.id = "capacityCharge" + i;
                            Answer.classList.add("form-control");
							Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                            inputGroup.appendChild(Answer);
                        }
                        
                    if(capacityCharges != null && capacityCharges != [])
                    {
                        if(capacityCharges.length == capacityMeterSizes.length)
                        {
                            for(var i = 0; i < capacityCharges.length; ++i)
                            {
                                var temp = document.getElementById("capacityCharge" + i);
                                temp.value = capacityCharges[i];
                            }
                        }
                    }
                }
                
                function ChargePageAnswers()
                {
                    capacityCharges = [];
                    var Continue = true;
                    if(isCapacityCharge)
                    {
                        if(capacityMeterSizes == null || capacityMeterSizes == [])
                        {
                            alert("You must select a Meter Size");
                        }
                        else
                        {
                            for(var i = 0; i < capacityMeterSizes.length; ++i)
                            {
                                var temp = document.getElementById("capacityCharge" + i);
                                if(temp.value == "")
                                {
                                    alert("A value must be enter for Meter Size " + capacityMeterSizes[i].replace('<QUOTE>', '"'));
                                    Continue = false;
                                }
                                else
                                {
                                    var regex = /^\d+(\.\d+)?$/.test(temp.value);
                                    if(regex)
                                        capacityCharges.push(temp.value);
                                    else
                                    {
                                        alert("Charge price must be a non-negative number");
                                        Continue = false;
                                        i = capacityMeterSizes.length;
                                    }
                                }
                            }
                            if(Continue)
                            {
                                RateStructure(0);
                            }
                        }
                    }
                    else
                    {
                        RateStructure(0);
                    }
                }
                
                //Creates All Rate Structure/Customer Class Pages
                function RateStructure(index)
                {
					window.scroll(0, 0);
                    primeArrays(0); primeArrays(1); primeArrays(2);
                    //Sets title to Utility Name and Subtitle to Cusstomer class and Clears page
                    title.innerHTML = UtilityName;
                    subtitle.innerHTML = SelectedRateStructures[index];
                    clear(form);
					
					s = "<p style='color: #66afe9;'>Questions in this section refer to " + SelectedRateStructures[index] + " customers</p>";
					createSection(s, "custClassExplainer", "h4", form);
                    
                    //Populates The Service Charge Div
                    var serviceList = document.createElement("div");
                    serviceList.id = "serviceList0";
                    form.appendChild(serviceList);
                    
					createSection(sectionTextDict["water"], "water", "h2", serviceList)
					createSection(sectionTextDict["fixedServiceChargeSection"], "fixedServiceChargeSection", "h3", serviceList)
					
                    QuestionTxt(questionDict["fixedServiceChargeQuestion"], "fixedServiceChargeQuestion", serviceList);
                    
                    Answer = document.createElement("span");
                    
                    //
                    if(isServiceCharge[currentIndex][0])
                    {
                        Answer.innerHTML = '<label for = "YesServiceCharge0" class = "radio-inline"><input type = "radio" id = "YesServiceCharge0" name = "isServiceCharge0" onclick = "serviceChargeTheSame(0, \'' + questionDict["fixedServiceChargeQuestion"] + '\', \'Fixed Service Charge\')" value = "Yes" checked = "true"/>Yes</label>'+
                        '<label for = "NoServiceCharge0" class ="radio-inline"><input type = "radio" id = "NoServiceCharge0" name = "isServiceCharge0" onclick = "serviceChargeTheSame(0, \'' + questionDict["fixedServiceChargeQuestion"] + '\', \'Fixed Service Charge\')" value = "No" />No</label>';
                        serviceList.appendChild(Answer);
                        serviceChargeTheSame(0, questionDict["fixedServiceChargeQuestion"], "Fixed Service Charge");
                    }
                    else
                    {  
                        isServiceCharge[currentIndex][0] = false;
                        Answer.innerHTML = '<label for = "YesServiceCharge0" class ="radio-inline"><input type = "radio" id = "YesServiceCharge0" name = "isServiceCharge0" onclick = "serviceChargeTheSame(0, \'' + questionDict["fixedServiceChargeQuestion"] + '\', \'Fixed Service Charge\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoServiceCharge0" class ="radio-inline"><input type = "radio" id = "NoServiceCharge0" name = "isServiceCharge0" onclick = "serviceChargeTheSame(0, \'' + questionDict["fixedServiceChargeQuestion"] + '\', \'Fixed Service Charge\')" value = "No"  checked = "true"/>No</label>';
                        serviceList.appendChild(Answer);
                    }
                    
                    var commodityList = document.createElement("div");
                    commodityList.id = "commodityList0";
                    form.appendChild(commodityList);
                    
					createSection(sectionTextDict["variableCommChargeSection"], "variableCommChargeSection", "h3", commodityList)
                    QuestionTxt(questionDict["variableCommChargeQuestion"], "variableCommChargeQuestion", commodityList);
                    
                    Answer = document.createElement("span");
                    
                    if(isCommodityCharge[currentIndex][0])
                    {
                        Answer.innerHTML = '<label for = "YesCommodityCharge0" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge0" name = "isCommodityCharge0" onclick = "getCommodityChargeInfo(0, \'' + questionDict["variableCommChargeQuestion"] + '\', \'Variable Commodity Charge\')" value = "Yes" checked = "true"/>Yes</label>'+
                        '<label for = "NoCommodityCharge0" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge0" name = "isCommodityCharge0" onclick = "getCommodityChargeInfo(0, \'' + questionDict["variableCommChargeQuestion"] + '\', \'Variable Commodity Charge\')" value = "No" />No</label>';
                        commodityList.appendChild(Answer);
                        getCommodityChargeInfo(0, questionDict["variableCommChargeQuestion"], "Variable Commodity Charge");
                    }
                    else
                    {  
                        isCommodityCharge[currentIndex][0] = false;
                        Answer.innerHTML = '<label for = "YesCommodityCharge0" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge0" name = "isCommodityCharge0" onclick = "getCommodityChargeInfo(0, \'' + questionDict["variableCommChargeQuestion"] + '\', \'Variable Commodity Charge\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoCommodityCharge0" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge0" name = "isCommodityCharge0" onclick = "getCommodityChargeInfo(0, \'' + questionDict["variableCommChargeQuestion"] + '\', \'Variable Commodity Charge\')" value = "No"  checked = "true"/>No</label>';
                        commodityList.appendChild(Answer);
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    var serviceList = document.createElement("div");
                    serviceList.id = "serviceList1";
                    form.appendChild(serviceList);
                    
					createSection(sectionTextDict["drought"], "drought", "h2", serviceList)
					createSection(sectionTextDict["fixedDroughtCharge"], "fixedDroughtCharge", "h3", serviceList)
                    QuestionTxt(questionDict["isThereFixedDrought"], 5, serviceList);
                    
                    Answer = document.createElement("span");
                    
                    //
                    if(isServiceCharge[currentIndex][1])
                    {
                        Answer.innerHTML = '<label for = "YesServiceCharge1" class = "radio-inline"><input type = "radio" id = "YesServiceCharge1" name = "isServiceCharge1" onclick = "serviceChargeTheSame(1, questionDict[\'isThereFixedDrought\'], \'Fixed Drought Charge\')" value = "Yes" checked = "true"/>Yes</label>'+
                        '<label for = "NoServiceCharge1" class ="radio-inline"><input type = "radio" id = "NoServiceCharge1" name = "isServiceCharge1" onclick = "serviceChargeTheSame(1, questionDict[\'isThereFixedDrought\'], \'Fixed Drought Charge\')" value = "No" />No</label>';
                        serviceList.appendChild(Answer);
                        serviceChargeTheSame(1, questionDict["isThereFixedDrought"], "Fixed Drought Charge");
                    }
                    else
                    {  
                        isServiceCharge[currentIndex][1] = false;
                        Answer.innerHTML = '<label for = "YesServiceCharge1" class ="radio-inline"><input type = "radio" id = "YesServiceCharge1" name = "isServiceCharge1" onclick = "serviceChargeTheSame(1, questionDict[\'isThereFixedDrought\'], \'Fixed Drought Charge\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoServiceCharge1" class ="radio-inline"><input type = "radio" id = "NoServiceCharge1" name = "isServiceCharge1" onclick = "serviceChargeTheSame(1, questionDict[\'isThereFixedDrought\'], \'Fixed Drought Charge\')" value = "No"  checked = "true"/>No</label>';
                        serviceList.appendChild(Answer);
                    }
                    
                    var commodityList = document.createElement("div");
                    commodityList.id = "commodityList1";
                    form.appendChild(commodityList);
                    
					createSection(sectionTextDict["variableDroughtCharge"], "variableDroughtCharge", "h3", commodityList)
                    QuestionTxt(questionDict["isThereVolumeDrought"], 9, commodityList);
                    
                    Answer = document.createElement("span");
                    
                    if(isCommodityCharge[currentIndex][1])
                    {
                        Answer.innerHTML = '<label for = "YesCommodityCharge1" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge1" name = "isCommodityCharge1" onclick = "getCommodityChargeInfo(1, questionDict[\'isThereVolumeDrought\'], \'Variable Drought Surcharge\')" value = "Yes" checked = "true"/>Yes</label>'+
                        '<label for = "NoCommodityCharge1" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge1" name = "isCommodityCharge1" onclick = "getCommodityChargeInfo(1, questionDict[\'isThereVolumeDrought\'], \'Variable Drought Surcharge\')" value = "No" />No</label>';
                        commodityList.appendChild(Answer);
                        getCommodityChargeInfo(1, questionDict["isThereVolumeDrought"], "Variable Drought Surcharge");
                    }
                    else
                    {  
                        isCommodityCharge[currentIndex][1] = false;
                        Answer.innerHTML = '<label for = "YesCommodityCharge1" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge1" name = "isCommodityCharge1" onclick = "getCommodityChargeInfo(1, questionDict[\'isThereVolumeDrought\'], \'Variable Drought Surcharge\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoCommodityCharge1" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge1" name = "isCommodityCharge1" onclick = "getCommodityChargeInfo(1, questionDict[\'isThereVolumeDrought\'], \'Variable Drought Surcharge\')" value = "No"  checked = "true"/>No</label>';
                        commodityList.appendChild(Answer);
                    }
                    
                    
                    
                    
                    
                    
                    /*
                    var serviceList = document.createElement("div");
                    serviceList.id = "serviceList2";
                    form.appendChild(serviceList);
                    
					createSection(sectionTextDict["wastewater"], "wastewater", "h2", serviceList)
					createSection(sectionTextDict["fixedWastewaterCharge"], "fixedWastewaterCharge", "h3", serviceList)
                    QuestionTxt(questionDict["isThereFixedWastewater"], 5, serviceList);
                    
                    Answer = document.createElement("span");
                    
                    //
                    if(isServiceCharge[currentIndex][2])
                    {
                        Answer.innerHTML = '<label for = "YesServiceCharge2" class = "radio-inline"><input type = "radio" id = "YesServiceCharge2" name = "isServiceCharge2" onclick = "serviceChargeTheSame(2, \'Is there a fixed wasterwater charge?\', \'Fixed Wastewater Charge\')" value = "Yes" checked = "true"/>Yes</label>'+
                        '<label for = "NoServiceCharge2" class ="radio-inline"><input type = "radio" id = "NoServiceCharge2" name = "isServiceCharge2" onclick = "serviceChargeTheSame(2, \'Is there a fixed wasterwater charge?\', \'Fixed Wastewater Charge\')" value = "No" />No</label>';
                        serviceList.appendChild(Answer);
                        serviceChargeTheSame(2, questionDict["isThereFixedWastewater"], "Fixed Wastewater Charge");
                    }
                    else
                    {  
                        isServiceCharge[currentIndex][2] = false;
                        Answer.innerHTML = '<label for = "YesServiceCharge2" class ="radio-inline"><input type = "radio" id = "YesServiceCharge2" name = "isServiceCharge2" onclick = "serviceChargeTheSame(2, \'Is there a fixed wasterwater charge?\', \'Fixed Wastewater Charge\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoServiceCharge2" class ="radio-inline"><input type = "radio" id = "NoServiceCharge2" name = "isServiceCharge2" onclick = "serviceChargeTheSame(2, \'Is there a fixed wasterwater charge?\', \'Fixed Wastewater Charge\')" value = "No"  checked = "true"/>No</label>';
                        serviceList.appendChild(Answer);
                    }
                    
                    var commodityList = document.createElement("div");
                    commodityList.id = "commodityList2";
                    form.appendChild(commodityList);
                    
                    QuestionTxt(questionDict["isThereVolumeWastewater"], 9, commodityList);
                    
                    Answer = document.createElement("span");
                    
                    if(isCommodityCharge[currentIndex][2])
                    {
                        Answer.innerHTML = '<label for = "YesCommodityCharge2" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge2" name = "isCommodityCharge2" onclick = "getCommodityChargeInfo(2, \'Is There a Variable Wastewater Charge?\', \'Variable Wastewater Charge\')" value = "Yes" checked = "true"/>Yes</label>'+
                        '<label for = "NoCommodityCharge2" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge2" name = "isCommodityCharge2" onclick = "getCommodityChargeInfo(2, \'Is There a Variable Wastewater Charge?\', \'Variable Wastewater Charge\')" value = "No" />No</label>';
                        commodityList.appendChild(Answer);
                        getCommodityChargeInfo(2, questionDict["isThereVolumeWastewater"], "Variable Wastewater Charge");
                    }
                    else
                    {  
                        isCommodityCharge[currentIndex][2] = false;
                        Answer.innerHTML = '<label for = "YesCommodityCharge2" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge2" name = "isCommodityCharge2" onclick = "getCommodityChargeInfo(2, \'Is There a Variable Wastewater Charge?\', \'Variable Wastewater Charge\')"value = "Yes" />Yes</label>'+
                        '<label for = "NoCommodityCharge2" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge2" name = "isCommodityCharge2" onclick = "getCommodityChargeInfo(2, \'Is There a Variable Wastewater Charge?\', \'Variable Wastewater Charge\')" value = "No"  checked = "true"/>No</label>';
                        commodityList.appendChild(Answer);
                    }
                    */
                    
                    
                    
                    
                    
                    
                    
                    //Buttons To Move To Previous Page Or Next Page
                    var ButtonDiv = document.createElement("div");
                    ButtonDiv.style.marginTop = "15px";
                    form.appendChild(ButtonDiv);
                    
                    
                    var Button = document.createElement("span");
                    //final page?
					if(currentIndex == SelectedRateStructures.length - 1)  
                    {
                        Button.innerHTML = '<button type = "button" style = "margin-right: 10px" onclick = "PreviousGetAnswers()" class ="btn">Previous Customer Class</button>' + 
                        '<button type = "button" onclick = "NextGetAnswers()" class = "btn">Complete</button>';
                    }
                    else
                    {
                        Button.innerHTML = '<button type = "button" style = "margin-right: 10px" onclick = "PreviousGetAnswers()" class = "btn">Previous</button>' + 
                        '<button type = "button" onclick = "NextGetAnswers()"class = "btn">Next Customer Class</button>';
                    }
                    ButtonDiv.appendChild(Button);
                }
                
                //Checks if The Service Charge is The Same as a previously entered Service Charge 
				//If it is the same it calls the getServiceSame() Function
                //If it isn't it goes to serviceChargeDepends()
                function serviceChargeTheSame(chargeIdentifier, Question, chargeName)
                {
                    var DIV = document.getElementById("serviceList" + chargeIdentifier);
                    //
                    var RadioButton = document.getElementById("YesServiceCharge" + chargeIdentifier);
                    isServiceCharge[currentIndex][chargeIdentifier] = RadioButton.checked;
                    
                    
                    //if rate structure has a service charge
                    if(RadioButton.checked == true)
                    {
                        // if not the first entry
                        if(currentIndex > 0)
                        {
							q = "<b>1b) Is this " + chargeName + " the same as one you previously entered into this survey?</b> " +
									"<br><br>"+
									"If so, you may select 'Yes' and the customer class to save some time."
							
                            QuestionTxt(q, 42, DIV);
                            Answer = document.createElement("span");
                        
                            Answer.innerHTML = '<label for = "YesServiceSame' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesServiceSame' + chargeIdentifier + '" name = "isServiceSame' + chargeIdentifier + '" onclick = "getServiceSame(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes" />Yes</label>'+
                            '<label for = "NoServiceSame' + chargeIdentifier + '" class ="radio-inline"><input type = "radio" id = "NoServiceSame' + chargeIdentifier + '" name = "isServiceSame' + chargeIdentifier + '" onclick = "getServiceSame(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No" />No</label>';
                            DIV.appendChild(Answer);
                            
                            var serviceSame = document.createElement("div");
                            serviceSame.id = "serviceSame" + chargeIdentifier + "Div";
                            DIV.appendChild(serviceSame);
                            
                            // if data already exists
                            if(isServiceSame[currentIndex][chargeIdentifier] != null)
                            {
                                //is same as previous cust class
                                if(isServiceSame[currentIndex][chargeIdentifier])
                                {
                                    var temp = document.getElementById("YesServiceSame" + chargeIdentifier);
                                    temp.checked = true;
                                    
                                    getServiceSame(chargeIdentifier, chargeName);
                                }
                                //not same as a previous cust class
                                else
                                {
                                    var temp = document.getElementById("NoServiceSame" + chargeIdentifier);
                                    temp.checked = true;
                                    
                                    serviceChargeDepends(chargeIdentifier, chargeName);
                                }
                            }
                        }
                        //is the first customer class
                        else
                        {
                            var service = document.createElement("div");
                            service.id = "serviceSame" + chargeIdentifier + "Div";
                            DIV.appendChild(service);
                        
                            serviceChargeDepends(chargeIdentifier, chargeName);
                        }
                    }
                    //no service charge
                    else
                    {
                        clear(DIV);
                        serviceParameters[currentIndex][chargeIdentifier] = [];
                        
						if(chargeIdentifier === 1)
						{
							createSection(sectionTextDict["drought"], "drought", "h2", DIV)
							createSection(sectionTextDict["fixedDroughtCharge"], "fixedDroughtCharge", "h3", DIV)
						}
						else if(chargeIdentifier === 0)
						{
							createSection(sectionTextDict["water"], "water", "h2", DIV)
							createSection(sectionTextDict["fixedServiceChargeSection"], "fixedServiceChargeSection", "h3", DIV)
						}
						
						
                        QuestionTxt(Question, 5, DIV);
                        
                        Answer = document.createElement("span");
                    
                        Answer.innerHTML = '<label for = "YesServiceCharge' + chargeIdentifier + '" class ="radio-inline"><input type = "radio" id = "YesServiceCharge' + chargeIdentifier + '" name = "isServiceCharge' + chargeIdentifier + '" onclick = "serviceChargeTheSame(' + chargeIdentifier + ', \'' + Question + '\', \'' + chargeName + '\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoServiceCharge' + chargeIdentifier + '" class ="radio-inline"><input type = "radio" id = "NoServiceCharge' + chargeIdentifier + '" name = "isServiceCharge' + chargeIdentifier + '" onclick = "serviceChargeTheSame(' + chargeIdentifier + ', \'' + Question + '\', \'' + chargeName + '\')" value = "No"  checked = "true"/>No</label>';
                        DIV.appendChild(Answer);
                    }
                }
                
                
                //populates dropdown list of previous customer classes
                //
                //after selection, calls serviceSameValues to get the service charge data for that class
                function getServiceSame(chargeIdentifier, chargeName)
                {
                    var serviceSame = document.getElementById("serviceSame" + chargeIdentifier + "Div")
                    
                    if(serviceSame.childNodes.length > 0)
                        clear(serviceSame);
                    
                    var radiobutton = document.getElementById("YesServiceSame" + chargeIdentifier);
                    if(radiobutton.checked)
                    {
                        if(serviceSame.childNodes.length> 0)
                            clear(serviceSame);
                        
                        isServiceSame[currentIndex][chargeIdentifier] = true;
                        
                        QuestionTxt("<b>Select which customer class has the same " + chargeName +"</b>", 78, serviceSame);
                        
                        Answer = document.createElement("select");
                
                        for(var i = 0; i < currentIndex; ++i)
                        {
                            Answer.appendChild(new Option(SelectedRateStructures[i], i));
                        }
                        Answer.id = "serviceSame" + chargeIdentifier;
                        Answer.classList.add("form-control");
                        if(serviceSameStructure[currentIndex][chargeIdentifier] != null)
                        {
                            Answer.value = serviceSameStructure[currentIndex][chargeIdentifier];
                        }
                        Answer.setAttribute("onchange", "serviceSameValues(" + chargeIdentifier + ")");
                        serviceSame.appendChild(Answer);
                        serviceSameValues(chargeIdentifier);
                    }
                    else
                    {
                        if(serviceSame.childNodes.length > 0)
                            clear(serviceSame);
                        
                        serviceChargeDepends(chargeIdentifier, chargeName);
                    }
                }
                
                //gets service charge data from previously entered class
                //populates the variables related to service charge
                function serviceSameValues(chargeIdentifier)
                {
                    serviceSameStructure[currentIndex][chargeIdentifier] = document.getElementById("serviceSame" + chargeIdentifier).value;
                    var temp = serviceSameStructure[currentIndex][chargeIdentifier];
                   
                    
                    isServiceDepends[currentIndex][chargeIdentifier] = isServiceDepends[temp][chargeIdentifier];
                    serviceParameters[currentIndex][chargeIdentifier] = serviceParameters[temp][chargeIdentifier];
                    serviceChargeCategories[currentIndex][chargeIdentifier] = serviceChargeCategories[temp][chargeIdentifier];
                    serviceCharges[currentIndex][chargeIdentifier] = serviceCharges[temp][chargeIdentifier];
                    if(serviceParameters[temp][chargeIdentifier] != null)
                    {
                        if(serviceParameters[temp][chargeIdentifier].length > 0)
                        {
                            if(season[temp][chargeIdentifier][3] != null)
                            {
                                season[currentIndex][chargeIdentifier] = [];
                                season[currentIndex][chargeIdentifier][3] = season[temp][chargeIdentifier][3];
                            }
                            if(temperatureZone[temp][chargeIdentifier][3] != null)
                            {
                                temperatureZone[currentIndex][chargeIdentifier] = [];
                                temperatureZone[currentIndex][chargeIdentifier][3] = temperatureZone[temp][chargeIdentifier][3];
                            }
                            if(pressureZone[temp][chargeIdentifier][3] != null)
                            {
                                pressureZone[currentIndex][chargeIdentifier] = [];
                                pressureZone[currentIndex][chargeIdentifier][3] = pressureZone[temp][chargeIdentifier][3];
                            }
                            if(lotSizeGroup[temp][chargeIdentifier][3] != null)
                            {
                                lotSizeGroup[currentIndex] = [];
                                lotSizeGroup[currentIndex][3] = lotSizeGroup[temp][3];
                            }
                            if(month[temp][3] != null)
                            {
                                month[currentIndex][chargeIdentifier] = [];
                                month[currentIndex][chargeIdentifier][3] = month[temp][chargeIdentifier][3];
                            }
                            if(commodityMeterSize[temp][chargeIdentifier][3] != null)
                            {
                                commodityMeterSize[currentIndex][chargeIdentifier] = [];
                                commodityMeterSize[currentIndex][chargeIdentifier][3] = commodityMeterSize[temp][chargeIdentifier][3];
                            }
                            if(meterType[temp][chargeIdentifier][3] != null)
                            {
                                meterType[currentIndex][chargeIdentifier] = [];
                                meterType[currentIndex][chargeIdentifier][3] = meterType[temp][chargeIdentifier][3];
                            }
                            if(cityLimits[temp][chargeIdentifier][3] != null)
                            {
                                cityLimits[currentIndex][chargeIdentifier] = [];
                                cityLimits[currentIndex][chargeIdentifier][3] = cityLimits[temp][chargeIdentifier][3];
                            }
                        }
                    }
                }
                
                //sets the YesServiceDepends button based on program state
                function serviceChargeDepends(chargeIdentifier, chargeName)
                {
                    var serviceSame = document.getElementById("serviceSame" + chargeIdentifier + "Div");
                    
                    if(serviceSame.childNodes.length > 0)
                        clear(serviceSame);
                    
					q = "<b>1.1) Does the price of the " + chargeName + " depend on attributes of the customer account?</b>"+
					"<br><br>"+
					"For example, fixed charges often depend on meter size of the connection "+
					"but they can also change depending on other attributes like which pressure zone the meter is located in."
					
                    QuestionTxt(q, 25, serviceSame);
                    Answer = document.createElement("span");
                        
                    Answer.innerHTML = '<label for = "YesServiceDepends' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesServiceDepends' + chargeIdentifier + '" name = "isServiceDepends' + chargeIdentifier + '" onclick = "getServiceChargeInfo(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes" />Yes</label>'+
                    '<label for = "NoServiceDepends' + chargeIdentifier + '" class ="radio-inline"><input type = "radio" id = "NoServiceDepends' + chargeIdentifier + '" name = "isServiceDepends' + chargeIdentifier + '" onclick = "getServiceChargeInfo(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No" checked = "true"/>No</label>';
                    serviceSame.appendChild(Answer);
                        
                    var service = document.createElement("div");
                    service.id = "serviceStuff" + chargeIdentifier + "Div";
                    serviceSame.appendChild(service);
                        
                    if(isServiceDepends[currentIndex][chargeIdentifier])
                    {
                        var temp = document.getElementById("YesServiceDepends" + chargeIdentifier);
                        temp.checked = true;
                    }
                        
                    getServiceChargeInfo(chargeIdentifier, chargeName);
                    
                }
                
                //based on whether YesServiceDepends is yes or no,
                //yes: calls getDepends to populate checklist of depend parameters
                //no: creates numeric input for service charge
                function getServiceChargeInfo(chargeIdentifier, chargeName)
                {
                    var RadioButton = document.getElementById("YesServiceDepends" + chargeIdentifier);
                    isServiceDepends[currentIndex][chargeIdentifier] = RadioButton.checked;
                    
                    var service = document.getElementById("serviceStuff" + chargeIdentifier + "Div");
                    
                    if(service.childNodes.length > 0)
                        clear(service);
                    
                    if(RadioButton.checked == true)
                    {
                        primeParamArrays(chargeIdentifier);
                        
                        if(service.childNodes.length > 0)
                            clear(service);
                        
                        var serviceParametersDiv = document.createElement("div");
                        serviceParametersDiv.id = "serviceParameters" + chargeIdentifier + "Div";
                        service.appendChild(serviceParametersDiv);
                    
                        var serviceParametersValueDiv = document.createElement("div");
                        serviceParametersValueDiv.id = "serviceParametersValue" + chargeIdentifier + "Div";
                        service.appendChild(serviceParametersValueDiv);
                    
                        var servicePriceDiv = document.createElement("div");
                        servicePriceDiv.id = "servicePrice" + chargeIdentifier + "Div";
                        service.appendChild(servicePriceDiv);
                        
                        getDepends("serviceParameters" + chargeIdentifier + "Div", serviceParameters[currentIndex][chargeIdentifier], "service", chargeIdentifier, chargeName);
                    }
                    else
                    {
                        serviceParameters[currentIndex][chargeIdentifier] = [];
                        
                        if(service.childNodes.length > 0)
                            clear(service);
                        
                        QuestionTxt("<b>Enter the " + chargeName + " (In the form of 15.99):</b>", 512, service);
                        
                        divider = document.createElement("div");
                        divider.classList.add("form-group");
                        service.appendChild(divider);
                        
                        inputGroup = document.createElement("div");
                        inputGroup.classList.add("input-group");
                        divider.appendChild(inputGroup);
                        
                        Answer = document.createElement("span");
                        Answer.classList.add("input-group-addon");
                        Answer.innerHTML = '<i class="glyphicon glyphicon-usd"></i>';
                        inputGroup.appendChild(Answer);
                        
                        Answer = document.createElement("input");
                        Answer.setAttribute("type", "text");
                        Answer.id = "ServiceCharge" + chargeIdentifier;
                        Answer.classList.add("form-control");
						Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                        inputGroup.appendChild(Answer);
                        
                        if(serviceCharges[currentIndex][chargeIdentifier] != null)
                        {
                            if(serviceCharges[currentIndex][chargeIdentifier].length == 1)
                            {
                                Answer.value = serviceCharges[currentIndex][chargeIdentifier][0];
                            }
                            else
                                serviceCharges[currentIndex][chargeIdentifier] = [];
                        }
                    }
                }
                
                //creates numeric inputs for each category of each depend parameter
                function getServiceRate(chargeIdentifier, chargeName)
                {
                    var servicePriceDiv = document.getElementById("servicePrice" + chargeIdentifier + "Div")
                    if(servicePriceDiv.childNodes.length > 0)
                    {
                        clear(servicePriceDiv);
                    }
                    
                    createUsedParameters(serviceParameters[currentIndex][chargeIdentifier], 3, chargeIdentifier);
                        
                    var Continue = true;
                            
                    for(var i = 0; i < ParametersToUse.length; ++i)
                    {
                        if(ParametersToUse[i] == null)
                        {
                            Continue = false;
                            i = ParametersToUse.length;
                        }
                    }
                            
                    if(Continue && ParametersToUse.length > 0)
                    {
                        QuestionTxt("<b>Enter The " + chargeName + " (In the form of 15.99):</b>", 43, servicePriceDiv)
                        serviceChargeCategories[currentIndex][chargeIdentifier] = [];
                        getCategories(serviceChargeCategories[currentIndex][chargeIdentifier], 0, ParametersToUse.length, "", "Rate:");
                            
                        
                        for(var i = 0; i < serviceChargeCategories[currentIndex][chargeIdentifier].length; ++i)
                        {
                            divider = document.createElement("div");
                            divider.classList.add("form-group");
                            servicePriceDiv.appendChild(divider);
                                    
                            Answer = document.createElement("label");
                            Answer.setAttribute("for", "serviceCharge" + chargeIdentifier + i);
                            Answer.appendChild(document.createTextNode(serviceChargeCategories[currentIndex][chargeIdentifier][i].split("<QUOTE>").join("")));
                            divider.appendChild(Answer);
                                
                            inputGroup = document.createElement("div");
                            inputGroup.classList.add("input-group");
                            divider.appendChild(inputGroup);
                                    
                            Answer = document.createElement("span");
                            Answer.classList.add("input-group-addon");
                            Answer.innerHTML = '<i class="glyphicon glyphicon-usd"></i>';
                            inputGroup.appendChild(Answer);
                                
                            Answer = document.createElement("input");
                            Answer.setAttribute("type", "text");
                            Answer.id = "serviceCharge" + chargeIdentifier + i;
                            Answer.classList.add("form-control");
							Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                            inputGroup.appendChild(Answer);
                        }
                            
                        if(serviceCharges[currentIndex][chargeIdentifier] != null && serviceChargeCategories[currentIndex][chargeIdentifier] != null)
                        {
                            if(serviceCharges[currentIndex][chargeIdentifier].length == serviceChargeCategories[currentIndex][chargeIdentifier].length)
                            {
                                for(var i = 0; i < serviceCharges[currentIndex][chargeIdentifier].length; ++i)
                                {
                                    var input = document.getElementById("serviceCharge" + chargeIdentifier + i);
                                    input.value = serviceCharges[currentIndex][chargeIdentifier][i];
                                }
                            }
                         }
                    }
                    
                }
                
                // checks if YesCommodityCharge is yes or no 
                //yes: create radio buttons to choose between uniform/tiered/budget
                function getCommodityChargeInfo(chargeIdentifier, Question, chargeName)
                {
                    var DIV = document.getElementById("commodityList" + chargeIdentifier);
                    
                    var RadioButton = document.getElementById("YesCommodityCharge" + chargeIdentifier);
                    
                    isCommodityCharge[currentIndex][chargeIdentifier] = RadioButton.checked;
                    
                    if(RadioButton.checked == true)
                    {
						q = "<b>2.1) What type of " + chargeName + "?</b>"+
								"<br><br>"+
								"Note that while a budget-based rate structure may include tiers, "+
								"we consider 'Budget' and 'Tiered' as unique rate structures. "+
								"<br><br>"+
								"Please choose 'Budget' if the tier definitions change based on "+
								"attributes like household size, landscape area, evapotranspiration, or on historic average use. "+
								"For tier definitions that change based on season or discrete temperature zones, "+
								"please choose 'Tiered'."	
						
                        QuestionTxt(q , 10, DIV);
                        
                        Answer = document.createElement("span");
                        Answer.innerHTML = '<label for = "Uniform' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "Uniform' + chargeIdentifier + '" name = "CommodityStructure' + chargeIdentifier + '" onclick = "UniformDepends(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Uniform"/>Uniform</label>'+
                        '<label for = "Tiered' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "Tiered' + chargeIdentifier + '" name = "CommodityStructure' + chargeIdentifier + '" onclick = "TieredDepends(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Tiered"/>Tiered</label>'+
                        '<label for = "Budget' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "Budget' + chargeIdentifier + '" name = "CommodityStructure' + chargeIdentifier + '" onclick = "BudgetDepends(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Budget"/>Budget</label>';
                        
                        DIV.appendChild(Answer);
                        
                        var commodityDependsOnDiv = document.createElement("div");
                        commodityDependsOnDiv.id = "commodityDependsOn" + chargeIdentifier + "Div";
                        DIV.appendChild(commodityDependsOnDiv);
                    }
                    else
                    {
                        clear(DIV);
                        commodityStructure[currentIndex][chargeIdentifier] = [];
                        
						if(chargeIdentifier === 1)
						{
							createSection(sectionTextDict["variableDroughtCharge"], "variableDroughtCharge", "h3", DIV)
						}
						else if(chargeIdentifier === 0)
						{
							createSection(sectionTextDict["variableCommChargeSection"], "variableCommChargeSection", "h3", DIV)
						}
						
                        QuestionTxt(Question, 9, DIV);
                        
                        Answer = document.createElement("span");
                        
                        Answer.innerHTML = '<label for = "YesCommodityCharge' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesCommodityCharge' + chargeIdentifier + '" name = "isCommodityCharge' + chargeIdentifier + '" onclick = "getCommodityChargeInfo(' + chargeIdentifier + ', \'' + Question + '\', \'' + chargeName + '\')" value = "Yes" />Yes</label>'+
                        '<label for = "NoCommodityCharge' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "NoCommodityCharge' + chargeIdentifier + '" name = "isCommodityCharge' + chargeIdentifier + '" onclick = "getCommodityChargeInfo(' + chargeIdentifier + ', \'' + Question + '\', \'' + chargeName + '\')" value = "No"  checked = "true"/>No</label>';
                        DIV.appendChild(Answer);
                    }
                    
                    if(commodityStructure[currentIndex][chargeIdentifier] == 'Uniform')
                    {
                        var Radio = document.getElementById("Uniform" + chargeIdentifier);
                        Radio.checked = true;
                        
                        UniformDepends(chargeIdentifier, chargeName);
                    }
                    else if(commodityStructure[currentIndex][chargeIdentifier] == 'Tiered')
                    {
                        var Radio = document.getElementById("Tiered" + chargeIdentifier);
                        Radio.checked = true;
                        
                        TieredDepends(chargeIdentifier, chargeName);
                    }
                    else if(commodityStructure[currentIndex][chargeIdentifier] == 'Budget')
                    {
                        var Radio = document.getElementById("Budget" + chargeIdentifier);
                        Radio.checked = true;
                        
                        BudgetDepends(chargeIdentifier, chargeName);
                    }
                }
                
                //fill param arrays with empty subarrays
                function primeParamArrays(chargeIdentifier)
                {
                    if(season[currentIndex][chargeIdentifier] == null)
                        season[currentIndex][chargeIdentifier] = [];
                    if(temperatureZone[currentIndex][chargeIdentifier] == null)
                        temperatureZone[currentIndex][chargeIdentifier] = [];
                    if(pressureZone[currentIndex][chargeIdentifier] == null)
                        pressureZone[currentIndex][chargeIdentifier] = [];
                    if(lotSizeGroup[currentIndex][chargeIdentifier] == null)
                        lotSizeGroup[currentIndex][chargeIdentifier] = [];
                    if(month[currentIndex][chargeIdentifier] == null)
                        month[currentIndex][chargeIdentifier] = [];
                    if(commodityMeterSize[currentIndex][chargeIdentifier] == null)
                        commodityMeterSize[currentIndex][chargeIdentifier] = [];
                    if(meterType[currentIndex][chargeIdentifier] == null)
                        meterType[currentIndex][chargeIdentifier] = [];
                    if(cityLimits[currentIndex][chargeIdentifier] == null)
                        cityLimits[currentIndex][chargeIdentifier] = [];
                }
                
                //clear and populate the commodityDependsOnDiv with options for uniform rates
                function UniformDepends(chargeIdentifier, chargeName)
                {
                    commodityStructure[currentIndex][chargeIdentifier] = 'Uniform';
                    
                    primeParamArrays(chargeIdentifier);
                    
                    var commodityDependsOnDiv = document.getElementById("commodityDependsOn" + chargeIdentifier + "Div");
                    if(commodityDependsOnDiv.childNodes.length > 0)
                    {
                        clear(commodityDependsOnDiv);
                    }
                    
                    QuestionTxt("<b>2.2) Does this Uniform " + chargeName + " depend on anything?</b>", 11, commodityDependsOnDiv);
                    
                    Answer = document.createElement("span");
                        
                    Answer.innerHTML = '<label for = "YesUniformDepends' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesUniformDepends' + chargeIdentifier + '" name = "isUniformDependsOn' + chargeIdentifier + '" onclick = "callGetDepends(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes" />'+
                    'Yes</label>'+
                    '<label for = "NoUniformDepends' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "NoUniformDepends' + chargeIdentifier + '" name = "isUniformDependsOn' + chargeIdentifier + '" onclick = "getUniformRate(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No"/>'+
                    'No</label>';
                        
                    commodityDependsOnDiv.appendChild(Answer);
                    
                    var uniformParametersDiv = document.createElement("div");
                    uniformParametersDiv.id = "uniformParameters" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(uniformParametersDiv);
                    
                    var uniformParametersValueDiv = document.createElement("div");
                    uniformParametersValueDiv.id = "uniformParametersValue" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(uniformParametersValueDiv);
                    
                    var uniformPriceDiv = document.createElement("div");
                    uniformPriceDiv.id = "uniformPrice" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(uniformPriceDiv);
                    
                    if(isUniformDependsOn[currentIndex][chargeIdentifier] == 'Yes')
                    {
                        var Radio = document.getElementById("YesUniformDepends" + chargeIdentifier);
                        Radio.checked = true;
                        getDepends('uniformParameters' + chargeIdentifier + 'Div', uniformParameters[currentIndex][chargeIdentifier], "uniform", chargeIdentifier, chargeName);
                    }
                    else if(isUniformDependsOn[currentIndex][chargeIdentifier] == 'No')
                    {
                        var Radio = document.getElementById("NoUniformDepends"  + chargeIdentifier);
                        Radio.checked = true;
                        getUniformRate(chargeIdentifier, chargeName);
                    }
                }
                
                function callGetDepends(chargeIdentifier, chargeName)
                {
                    getDepends('uniformParameters' + chargeIdentifier + 'Div', uniformParameters[currentIndex][chargeIdentifier], 'uniform', chargeIdentifier, chargeName)
                }
                
                //
                function getUniformRate(chargeIdentifier, chargeName)
                {
                    var uniformPriceDiv = document.getElementById("uniformPrice" + chargeIdentifier + "Div");
                    var Radio = document.getElementById("NoUniformDepends" + chargeIdentifier);
                    
                    if(uniformPriceDiv.childNodes.length > 0)
                    {
                        clear(uniformPriceDiv);
                    }
                    
                    if(Radio.checked)
                    {
                        isUniformDependsOn[currentIndex][chargeIdentifier] = 'No';
                        
                        var uniformParametersDiv = document.getElementById("uniformParameters" + chargeIdentifier + "Div");
                        var uniformParametersValueDiv = document.getElementById("uniformParametersValue" + chargeIdentifier + "Div");
                        if(uniformParametersDiv.childNodes.length > 0)
                        {
                            clear(uniformParametersDiv);
                        }
                        if(uniformParametersValueDiv.childNodes.length > 0)
                        {
                            clear(uniformParametersValueDiv);
                        }
                    }
                    else
                    {
                        isUniformDependsOn[currentIndex][chargeIdentifier] = 'Yes';
                    }
                    
                    if(isUniformDependsOn[currentIndex][chargeIdentifier] == 'Yes')
                    {
                        createUsedParameters(uniformParameters[currentIndex][chargeIdentifier], 0, chargeIdentifier);
                        
                            var Continue = true;
                            
                            for(var i = 0; i < ParametersToUse.length; ++i)
                            {
                                if(ParametersToUse[i] == null)
                                {
                                    Continue = false;
                                    i = ParametersToUse.length;
                                }
                            }
                            
                            if(Continue && ParametersToUse.length > 0)
                            {
                                //billUnit(chargeIdentifier, uniformPriceDiv);
                                
                                QuestionTxt("<b>Enter the cost per unit (In the form of 15.99):</b>", 12, uniformPriceDiv)
                                commodityChargeCategories[currentIndex][chargeIdentifier] = [];
                                getCategories(commodityChargeCategories[currentIndex][chargeIdentifier], 0, ParametersToUse.length, "", "Rate:");
                            
                        
                                for(var i = 0; i < commodityChargeCategories[currentIndex][chargeIdentifier].length; ++i)
                                {
                                    divider = document.createElement("div");
                                    divider.classList.add("form-group");
                                    uniformPriceDiv.appendChild(divider);
                                    
                                    Answer = document.createElement("label");
                                    Answer.setAttribute("for", "commodityCharge" + chargeIdentifier + i);
                                    Answer.appendChild(document.createTextNode(commodityChargeCategories[currentIndex][chargeIdentifier][i].split("<QUOTE>").join("")));
                                    divider.appendChild(Answer);
                                
                                    inputGroup = document.createElement("div");
                                    inputGroup.classList.add("input-group");
                                    divider.appendChild(inputGroup);
                                    
                                    Answer = document.createElement("span");
                                    Answer.classList.add("input-group-addon");
                                    Answer.innerHTML = '<i class="glyphicon glyphicon-usd"></i>';
                                    inputGroup.appendChild(Answer);
                                
                                    Answer = document.createElement("input");
                                    Answer.setAttribute("type", "text");
                                    Answer.id = "commodityCharge" + chargeIdentifier + i;
                                    Answer.classList.add("form-control");
									Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                                    inputGroup.appendChild(Answer);
                                }
                            
                                if(commodityCharges[currentIndex][chargeIdentifier] != null && commodityChargeCategories[currentIndex][chargeIdentifier] != null)
                                {
                                    if(commodityCharges[currentIndex][chargeIdentifier].length == commodityChargeCategories[currentIndex][chargeIdentifier].length)
                                    {
                                        for(var i = 0; i < commodityCharges[currentIndex][chargeIdentifier].length; ++i)
                                        {
                                            var input = document.getElementById("commodityCharge" + chargeIdentifier + i);
                                            input.value = commodityCharges[currentIndex][chargeIdentifier][i];
                                        }
                                    }
                                }
                            }
                    }
                    else if(isUniformDependsOn[currentIndex][chargeIdentifier] == 'No')
                    {
                        //billUnit(chargeIdentifier, uniformPriceDiv);
                        
                        QuestionTxt("<b>Enter the cost per unit (In the form of 15.99):</b>", 12, uniformPriceDiv);
                       
                        inputGroup = document.createElement("div");
                        inputGroup.classList.add("input-group");
                        uniformPriceDiv.appendChild(inputGroup);
                                    
                        Answer = document.createElement("span");
                        Answer.classList.add("input-group-addon");
                        Answer.innerHTML = '<i class="glyphicon glyphicon-usd"></i>';
                        inputGroup.appendChild(Answer);
                                
                        Answer = document.createElement("input");
                        Answer.setAttribute("type", "text");
                        Answer.id = "commodityCharge" + chargeIdentifier + "0";
                        Answer.classList.add("form-control");
						Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                        inputGroup.appendChild(Answer);
                        
                        if(commodityCharges[currentIndex][chargeIdentifier] != null)
                        {
                            Answer = document.getElementById("commodityCharge" + chargeIdentifier + "0");
                            Answer.value = commodityCharges[currentIndex][chargeIdentifier][0];
                        }
                    }
                }
                
				/*
                function billUnit(chargeIdentifier, DIV)
                {
                    QuestionTxt("<b>Select The Billing Unit</b>", 45, DIV);
                    
                    Answer = document.createElement("span");
                    Answer.innerHTML = '<label for = "BillUnits' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesBillUnits' + chargeIdentifier + '" name = "isBillUnits' + chargeIdentifier + '" onclick = "changeBillUnits(' + chargeIdentifier + ', 0)" value = "kgal" />'+
                    'Kgal</label>'+
                    '<label for = "BillUnits' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "NoBillUnits' + chargeIdentifier + '" name = "isBillUnits' + chargeIdentifier + '" onclick = "changeBillUnits(' + chargeIdentifier + ', 1)" value = "ccf"/>'+
                    'CCF</label>';
                    DIV.appendChild(Answer);
                    
                    var Radio = document.getElementById("YesBillUnits" + chargeIdentifier);
                    var CCF = document.getElementById("NoBillUnits" + chargeIdentifier);
                    
                    if(billingUnits[currentIndex][chargeIdentifier] != null)
                    {
                        if(billingUnits[currentIndex][chargeIdentifier] == "ccf")
                            CCF.checked = true;
                        else
                            Radio.checked = true;
                    }
                }
                
				
                function changeBillUnits(chargeIdentifier, num)
                {
                    if(num == 0)
                        billingUnits[currentIndex][chargeIdentifier] = "kgal";
                    else
                        billingUnits[currentIndex][chargeIdentifier] = "ccf";
                }
				*/
				
				function setBillingUnit()
				{
					var Kgal = document.getElementById("YesBillUnits");
                    var CCF = document.getElementById("NoBillUnits");
                    
                    if(BillingUnit != "")
                    {
                        if(BillingUnit == "ccf")
                            CCF.checked = true;
                        else
                            Kgal.checked = true;
                    }
				}
                
                function TieredDepends(chargeIdentifier, chargeName)
                {
                    commodityStructure[currentIndex][chargeIdentifier] = 'Tiered';
                    
                    primeParamArrays(chargeIdentifier);
                    
                    var commodityDependsOnDiv = document.getElementById("commodityDependsOn" + chargeIdentifier + "Div");
                    if(commodityDependsOnDiv.childNodes.length > 0)
                    {
                        clear(commodityDependsOnDiv);
                    }
                    
                    QuestionTxt(questionDict["howManyTiers"], "howManyTiers", commodityDependsOnDiv);
                    Answer = document.createElement("select");
                    Answer.classList.add("form-control");
                    for(var i = 2; i <= 6; ++i)
                    {
                        Answer.appendChild(new Option(i, i));
                    }
                    Answer.id = "numOfTiers" + chargeIdentifier;
                    if(tierLevels[currentIndex][chargeIdentifier] != null)
                    {
                    Answer.value = tierLevels[currentIndex][chargeIdentifier];
                    }
                    Answer.setAttribute("onchange", "createTierLevels(" + chargeIdentifier + ", \"" + chargeName + "\")");
                    commodityDependsOnDiv.appendChild(Answer);
                    
                    var tierStartsDiv = document.createElement("div");
                    tierStartsDiv.id = "tierStarts" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(tierStartsDiv);
                    
                    var tierPricesDiv = document.createElement("div");
                    tierPricesDiv.id = "tierPrices" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(tierPricesDiv);
                    
                    createTierLevels(chargeIdentifier, chargeName);
                }
                
                function createTierLevels(chargeIdentifier, chargeName)
                {
                    var tiers = document.getElementById("numOfTiers" + chargeIdentifier);
                    tierLevels[currentIndex][chargeIdentifier] = tiers.value;
                    
                    Tier("tierStarts" + chargeIdentifier + "Div", questionDict["doTiersDepend"], "doTiersDepend", isTierStartsDepends[currentIndex][chargeIdentifier], "TierStarts", getTierStartsInfo, chargeIdentifier, chargeName);
                    Tier("tierPrices" + chargeIdentifier + "Div", questionDict["doTierPricesDepend"], "doTierPricesDepend", isTierPricesDepends[currentIndex][chargeIdentifier], "TierPrices", getTierPricesInfo, chargeIdentifier, chargeName);
                    getTierStartsInfo(chargeIdentifier, chargeName);
                    getTierPricesInfo(chargeIdentifier, chargeName);
                }
                
                //creates a yes/no radio  button for whether tiers depend on something
                function Tier(DIV, question, qNumber, dependsOn, Identifier, Function, chargeIdentifier, chargeName)
                {
                    var tierDiv = document.getElementById(DIV);
                    if(tierDiv.childNodes.length > 0)
                    {
                        clear(tierDiv);
                    }
                    QuestionTxt(question, qNumber, tierDiv);
                    
                    if(dependsOn)
                    {
                        Answer = document.createElement("span");
                        
                        Answer.innerHTML = '<label for = "Yes' + Identifier + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "Yes' + Identifier + chargeIdentifier + '" name = "is' + Identifier + 'Depends' + chargeIdentifier + '" onclick = "get' + Identifier + 'Info(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes" checked = "true"/>'+
                        'Yes</label>'+
                        '<label for = "No' + Identifier + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "No' + Identifier + chargeIdentifier + '" name = "is' + Identifier + 'Depends' + chargeIdentifier + '" onclick = "get' + Identifier + 'Info(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No" />'+
                        'No</label>';
                        
                        tierDiv.appendChild(Answer);
                        
                        
                        if(Identifier == "TierStarts")
                        {
                            getTierStartsInfo(chargeIdentifier, chargeName);
                        }
                        else
                            getTierPricesInfo(chargeIdentifier, chargeName)
                    }
                    else
                    {
                        Answer = document.createElement("span");
                        
                        Answer.innerHTML = '<label for = "Yes' + Identifier + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "Yes' + Identifier + chargeIdentifier + '" name = "is' + Identifier + 'Depends' + chargeIdentifier + '" onclick = "get' + Identifier + 'Info(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes"/>'+
                        'Yes</label>'+
                        '<label for = "No' + Identifier + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "No' + Identifier + chargeIdentifier + '" name = "is' + Identifier + 'Depends' + chargeIdentifier + '" onclick = "get' + Identifier + 'Info(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No" checked = "true"/>'+
                        'No</label>';
                        
                        tierDiv.appendChild(Answer);
                    }
                }
                
                //checks value of YesTierStarts radio button
                //yes: calls getDepends to create depends checklist
                //no: calles createTierFields to create tier fields
                function getTierStartsInfo(chargeIdentifier, chargeName)
                {
                    var Radio = document.getElementById("YesTierStarts" + chargeIdentifier);
                    var tierStartsDiv = document.getElementById("tierStarts" + chargeIdentifier + "Div");
                    
                    
                    if(Radio.checked)
                    {
                        isTierStartsDepends[currentIndex][chargeIdentifier] = true;
                        if(tierStartsDiv.childNodes.length > 0)
                        {
                            clear(tierStartsDiv);
                        }
                        
                        //if(commodityStructure[currentIndex][chargeIdentifier])
                            //billUnit(chargeIdentifier, tierStartsDiv);
                        
                        QuestionTxt(questionDict["doTiersDepend"], "doTiersDepend",tierStartsDiv)
                        Answer = document.createElement("span");
                        
                        Answer.innerHTML = '<label for = "YesTierStarts' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesTierStarts' + chargeIdentifier + '" name = "isTierStartsDepends' + chargeIdentifier + '" onclick = "getTierStartsInfo(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes" checked = "true"/>'+
                        'Yes</label>'+
                        '<label for = "NoTierStarts' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "NoTierStarts' + chargeIdentifier + '" name = "isTierStartsDepends' + chargeIdentifier + '" onclick = "getTierStartsInfo(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No" />'+
                        'No</label>';
                        
                        tierStartsDiv.appendChild(Answer);
                        
                        var tierStartsParameterDiv = document.createElement("div");
                        tierStartsParameterDiv.id = "tierStartsParameter" + chargeIdentifier + "Div";
                        tierStartsDiv.appendChild(tierStartsParameterDiv);
                        
                        var tierStartsParameterValueDiv = document.createElement("div");
                        tierStartsParameterValueDiv.id = "tierStartsParameterValue" + chargeIdentifier + "Div";
                        tierStartsDiv.appendChild(tierStartsParameterValueDiv);
                        
                        var tierStartsValuesDiv = document.createElement("div");
                        tierStartsValuesDiv.id = "tierStartsValues" + chargeIdentifier + "Div";
                        tierStartsDiv.appendChild(tierStartsValuesDiv);
                        
                        getDepends('tierStartsParameter' + chargeIdentifier + 'Div', tierStartsParameters[currentIndex][chargeIdentifier], 'tierStarts', chargeIdentifier, chargeName);
                    }
                    else
                    {
                        isTierStartsDepends[currentIndex][chargeIdentifier] = false;
                        Tier("tierStarts" + chargeIdentifier + "Div", questionDict["doTiersDepend"], "doTiersDepend", isTierStartsDepends[currentIndex][chargeIdentifier], "TierStarts", getTierStartsInfo, chargeIdentifier, chargeName);
                       
                        Answer = document.createElement('div');
                        Answer.id = "tierStartsValues" + chargeIdentifier + "Div";
                        tierStartsDiv.appendChild(Answer);
                        
                        tierStartsCategories[currentIndex][chargeIdentifier] = [""];
                        
                        if(commodityStructure[currentIndex][chargeIdentifier] == "Tiered")
                        {
                            createTierFields(Answer, "tierStarts", tierStartsCategories[currentIndex][chargeIdentifier], "Start of each tier (see example above):", chargeIdentifier, chargeName);
                        }
                        else
                        {
                            createTierFields(Answer, "tierStarts", tierStartsCategories[currentIndex][chargeIdentifier], "Start of each tier (see example above):", chargeIdentifier, chargeName);
                        }
                    }
                }
                
                //checks value of YesTierPrices radio button
                //yes: calls getDepends to create depends checklist
                //no: calles createTierFields to create tier fields for prices
                function getTierPricesInfo(chargeIdentifier, chargeName)
                {
                    var Radio = document.getElementById("YesTierPrices" + chargeIdentifier);
                    var tierPricesDiv = document.getElementById("tierPrices" + chargeIdentifier + "Div");
                    
                    if(Radio.checked)
                    {
                        isTierPricesDepends[currentIndex][chargeIdentifier] = true;
                        if(tierPricesDiv.childNodes.length > 0)
                        {
                            clear(tierPricesDiv);
                        }
                        QuestionTxt(questionDict["doTierPricesDepend"], "doTierPricesDepend", tierPricesDiv)
                        Answer = document.createElement("span");
                        
                        Answer.innerHTML = '<label for = "YesTierPrices' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "YesTierPrices' + chargeIdentifier + '" name = "isTierPricesDepends' + chargeIdentifier + '" onclick = "getTierPricesInfo(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "Yes" checked = "true"/>'+
                        'Yes</label>'+
                        '<label for = "NoTierPrices' + chargeIdentifier + '" class = "radio-inline"><input type = "radio" id = "NoTierPrices' + chargeIdentifier + '" name = "isTierPricesDepends' + chargeIdentifier + '" onclick = "getTierPricesInfo(' + chargeIdentifier + ', \'' + chargeName + '\')" value = "No" />'+
                        'No</label>';
                        
                        tierPricesDiv.appendChild(Answer);
                        
                        var tierPricesParameterDiv = document.createElement("div");
                        tierPricesParameterDiv.id = "tierPricesParameter" + chargeIdentifier + "Div";
                        tierPricesDiv.appendChild(tierPricesParameterDiv);
                        
                        var tierPricesParameterValueDiv = document.createElement("div");
                        tierPricesParameterValueDiv.id = "tierPricesParameterValue" + chargeIdentifier + "Div";
                        tierPricesDiv.appendChild(tierPricesParameterValueDiv);
                        
                        var tierPricesValuesDiv = document.createElement("div");
                        tierPricesValuesDiv.id = "tierPricesValues" + chargeIdentifier + "Div";
                        tierPricesDiv.appendChild(tierPricesValuesDiv);
                        
                        getDepends('tierPricesParameter' + chargeIdentifier + 'Div', tierPricesParameters[currentIndex][chargeIdentifier], 'tierPrices', chargeIdentifier, chargeName);
                    }
                    else
                    {
                        isTierPricesDepends[currentIndex][chargeIdentifier] = false;
                        Tier("tierPrices" + chargeIdentifier + "Div", questionDict["doTierPricesDepend"], "doTierPricesDepend", isTierPricesDepends[currentIndex][chargeIdentifier], "TierPrices", getTierPricesInfo, chargeIdentifier, chargeName);
                        
                        Answer = document.createElement('div');
                        Answer.id = "tierPricesValues" + chargeIdentifier + "Div";
                        tierPricesDiv.appendChild(Answer);
                        
                        commodityChargeCategories[currentIndex][chargeIdentifier] = [""];
                        
                        createTierFields(Answer, "tierPrices", commodityChargeCategories[currentIndex][chargeIdentifier], "Tier Prices (In the Form of 15.99):", chargeIdentifier, chargeName)
                    }
                }
                
                //create budget equation fields
                function budgetVariableFieldCreator(DIV, chargeIdentifier, id, Text, glyphicon, valueArray, defaultValue)
                {
                    divider = document.createElement("div");
                    divider.classList.add("form-group");
                    DIV.appendChild(divider);
                   
                    Answer = document.createElement("label");
                    Answer.setAttribute("for", id + chargeIdentifier);
                    Answer.appendChild(document.createTextNode(Text));
                    divider.appendChild(Answer);
                        
                    inputGroup = document.createElement("div");
                    inputGroup.classList.add("input-group");
                    divider.appendChild(inputGroup);
                        
                    Answer = document.createElement("span");
                    Answer.classList.add("input-group-addon");
                    Answer.innerHTML = '<i class="glyphicon glyphicon-tint"></i><i class="glyphicon ' + glyphicon + '"></i>';
                    inputGroup.appendChild(Answer);
                    
                    Answer = document.createElement("input");
                    Answer.setAttribute("type", "text");
                    Answer.classList.add("form-control");
					Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                    Answer.id = id + chargeIdentifier;
                    if(valueArray != null)
                    {
                        Answer.value = valueArray;
                    }
                    else
                    {
                        Answer.value = defaultValue;
                    }
                    inputGroup.appendChild(Answer);
                    
                }
                
                // create dropdown of number of tiers along with yes/no radio button for if tiers depend on something
                function BudgetDepends(chargeIdentifier, chargeName)
                {
                    commodityStructure[currentIndex][chargeIdentifier] = 'Budget';
                    primeParamArrays(chargeIdentifier);
                    
                    var commodityDependsOnDiv = document.getElementById("commodityDependsOn" + chargeIdentifier + "Div");
                    if(commodityDependsOnDiv.childNodes.length > 0)
                    {
                        clear(commodityDependsOnDiv);
                    }
                    
                    QuestionTxt(questionDict["budgetExplainer1"], 17, commodityDependsOnDiv);
                    
                    
                    budgetVariableFieldCreator(commodityDependsOnDiv, chargeIdentifier, 
						"gpcd", "Gallons Per Capita Day:", "glyphicon-user", gpcd[currentIndex][chargeIdentifier], "60");
                    budgetVariableFieldCreator(commodityDependsOnDiv, chargeIdentifier, 
						"landscape_factor", "Landscape Factor:", "glyphicon-grain", landscape_factor[currentIndex][chargeIdentifier], ".7");
                    budgetVariableFieldCreator(commodityDependsOnDiv, chargeIdentifier, 
						"indoor", "Indoor Budget Equation:", "glyphicon-home", indoor[currentIndex][chargeIdentifier], "hhsize*gpcd*days_in_period*(1/748)");
                    budgetVariableFieldCreator(commodityDependsOnDiv, chargeIdentifier, 
						"outdoor", "Outdoor Budget Equation:", "glyphicon-globe", gpcd[currentIndex][chargeIdentifier], "landscape_factor*et_amount*irr_area*0.62*(1/748)");
                    budgetVariableFieldCreator(commodityDependsOnDiv, chargeIdentifier, 
						"budget", "Budget:", "glyphicon-usd", budget[currentIndex][chargeIdentifier], "indoor+outdoor");
                    
					QuestionTxt(questionDict["budgetExplainer2"], "budgetExplainer2", commodityDependsOnDiv);
                    
                    QuestionTxt(questionDict["howManyTiers"], "howManyTiers", commodityDependsOnDiv);
                    Answer = document.createElement("select");
                    for(var i = 2; i <= 6; ++i)
                    {
                        Answer.appendChild(new Option(i, i));
                    }
                    Answer.id = "numOfTiers" + chargeIdentifier;
                    Answer.classList.add("form-control");
                    if(tierLevels[currentIndex][chargeIdentifier] != null)
                    {
                        if(tierLevels[currentIndex][chargeIdentifier] < 2)
                        {
                            Answer.value = 2;
                        }
                        else
                        {
                            Answer.value = tierLevels[currentIndex][chargeIdentifier];
                        }
                    }
                    Answer.setAttribute("onchange", "createTierLevels(" + chargeIdentifier + ", \"" + chargeName + "\")");
                    commodityDependsOnDiv.appendChild(Answer);
                    
                    var tierStartsDiv = document.createElement("div");
                    tierStartsDiv.id = "tierStarts" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(tierStartsDiv);
                    
                    var tierPricesDiv = document.createElement("div");
                    tierPricesDiv.id = "tierPrices" + chargeIdentifier + "Div";
                    commodityDependsOnDiv.appendChild(tierPricesDiv);
                    
                    createTierLevels(chargeIdentifier, chargeName);
                }
                
                //create depends checklist and populates based on program state
                function getDepends(DIVname, identifier, Structure, chargeIdentifier, chargeName)
                {
                    var DIV = document.getElementById(DIVname)
                    if(DIV.childNodes.length > 0)
                    {
                        clear(DIV);
                    }
					
					if(DIVname.substring(0,7) === "service"){
						QuestionTxt(questionDict["doFixedPricesDepend"], "doTierPricesDepend", DIV);
					}
					else
					{
						QuestionTxt(questionDict["tierPricesDependWhat"], "tierPricesDependWhat", DIV);
					}
                    
                    
                    for(var i = 0; i < survey.commodityDependsOn.length; ++i)
                    {
                        var divider = document.createElement("div");
                        divider.classList.add("checkbox");
                        var checkboxID = Structure + "DependsOn" + chargeIdentifier + i;
                        divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "CommodityDependsOn' + chargeIdentifier + '" onclick = "storeCommodityDepends(\'' + Structure + '\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value ="' + survey.commodityDependsOn[i]+ '"/>'+
                        '' + survey.commodityDependsOn[i] + '</label>';
                        DIV.appendChild(divider);
                    }
                    
                    
                    if(identifier != null)
                    {
                        for(var i = 0; i < survey.commodityDependsOn.length; ++i)
                        {
                            var checkCheckBox = document.getElementById(Structure + "DependsOn" + chargeIdentifier + i)
                            for(var j = 0; j < identifier.length; ++j)
                            {
                                if(identifier[j] == checkCheckBox.value)
                                {
                                    checkCheckBox.checked = true;
                                }
                            }
                        }
                        storeCommodityDepends(Structure, chargeIdentifier, chargeName);
                    }
                    
                }
                
                // save the values of the various  depends checklists (tiered, service, budget, etc) into global params
                function storeCommodityDepends(tierIdentifier, chargeIdentifier, chargeName)
                {
                    if(tierIdentifier == 'uniform')
                    {
                        var uniformParametersValueDiv = document.getElementById("uniformParametersValue" + chargeIdentifier + "Div");
                        uniformParameters[currentIndex][chargeIdentifier] = [];
                        pushParameters(uniformParameters[currentIndex][chargeIdentifier], 'uniform', chargeIdentifier);
                        
                        if(uniformParametersValueDiv.childNodes.length >  0)
                        {
                            clear(uniformParametersValueDiv);
                        }
                        
                        for(var i = 0; i < uniformParameters[currentIndex][chargeIdentifier].length; ++i)
                        {
                            getParameterValues(uniformParameters[currentIndex][chargeIdentifier][i], uniformParametersValueDiv, 'Uniform', 0, chargeIdentifier, chargeName);
                        }
                        clearParametersNotUsed(uniformParameters[currentIndex][chargeIdentifier], 0, chargeIdentifier);
                        commodityChargeCategories[currentIndex][chargeIdentifier] = null;
                        getUniformRate(chargeIdentifier, chargeName);
                    }
                    else if(tierIdentifier == 'tierStarts' || tierIdentifier == 'tierPrices')
                    {
                        if(tierIdentifier == "tierStarts")
                        {
                            tierStartsParameters[currentIndex][chargeIdentifier] = [];
                            pushParameters(tierStartsParameters[currentIndex][chargeIdentifier], tierIdentifier, chargeIdentifier);
                            
                            var tierStartsParameterValueDiv = document.getElementById("tierStartsParameterValue" + chargeIdentifier + "Div");
                            if(tierStartsParameterValueDiv.childNodes.length > 0)
                            {
                                clear(tierStartsParameterValueDiv);
                            }
                            
                            clearParametersNotUsed(tierStartsParameters[currentIndex][chargeIdentifier], 1, chargeIdentifier);
                            tierStartsCategories[currentIndex][chargeIdentifier] = null;
                            
                            for(value in tierStartsParameters[currentIndex][chargeIdentifier])
                            {
                                getParameterValues(tierStartsParameters[currentIndex][chargeIdentifier][value], tierStartsParameterValueDiv, 'tierStarts', 1, chargeIdentifier, chargeName);
                            }
                            pushParameterValues('tierStarts', chargeIdentifier, chargeName);
                        }
                        else
                        {
                            tierPricesParameters[currentIndex][chargeIdentifier] = [];
                            pushParameters(tierPricesParameters[currentIndex][chargeIdentifier], tierIdentifier, chargeIdentifier);
                            
                            var tierPricesParameterValueDiv = document.getElementById("tierPricesParameterValue" + chargeIdentifier + "Div");
                            if(tierPricesParameterValueDiv.childNodes.length > 0)
                            {
                                clear(tierPricesParameterValueDiv);
                            }
                            
                            clearParametersNotUsed(tierPricesParameters[currentIndex][chargeIdentifier], 2, chargeIdentifier);
                            commodityChargeCategories[currentIndex][chargeIdentifier] = null;
                            
                            for(value in tierPricesParameters[currentIndex][chargeIdentifier])
                            {
                                getParameterValues(tierPricesParameters[currentIndex][chargeIdentifier][value], tierPricesParameterValueDiv, 'tierPrices', 2, chargeIdentifier, chargeName);
                            }
                            pushParameterValues('tierPrices', chargeIdentifier, chargeName);
                        }
                    }
                    else if(tierIdentifier == "service")
                    {
                        serviceParameters[currentIndex][chargeIdentifier] = [];
                        pushParameters(serviceParameters[currentIndex][chargeIdentifier], tierIdentifier, chargeIdentifier);
                        var serviceParametersValueDiv = document.getElementById("serviceParametersValue" + chargeIdentifier + "Div")
                        if(serviceParametersValueDiv.childNodes.length >  0)
                        {
                            clear(serviceParametersValueDiv);
                        }
                        
                        for(var i = 0; i < serviceParameters[currentIndex][chargeIdentifier].length; ++i)
                        {
                            getParameterValues(serviceParameters[currentIndex][chargeIdentifier][i], serviceParametersValueDiv, 'service', 3, chargeIdentifier, chargeName);
                        }
                        clearParametersNotUsed(serviceParameters[currentIndex][chargeIdentifier], 3, chargeIdentifier);
                        serviceChargeCategories[currentIndex][chargeIdentifier] = null;
                        getServiceRate(chargeIdentifier, chargeName);
                    }
                }
                
                function pushParameters(STRUCTURE, identifier, chargeIdentifier)
                {
                    for(var i = 0; i < survey.commodityDependsOn.length; ++i)
                    {
                        var checkCheckBox = document.getElementById(identifier + "DependsOn" + chargeIdentifier + i);
                        
                        if(checkCheckBox.checked)
                        {
                            STRUCTURE.push(checkCheckBox.value);
                        }
                    }
                }
                
                function getParameterValues(parameter, DIV, identifier, tierIdentifier, chargeIdentifier, chargeName)
                {
                    QuestionTxt(dependsOnValueText(parameter) ,13 , DIV)
                    
                    switch(parameter)
                    {
                        case 'Season': 
                            for(var i = 0; i < survey.season.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "Season" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'SeasonValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value ="' + survey.season[i]+ '"/>'+
                                '' + survey.season[i] + '</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(season[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.season.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "Season" + chargeIdentifier + i);
                                        for(var j = 0; j < season[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(season[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'Meter Size': 
                            for(var i = 0; i < survey.meterSizes.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "MeterSize" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'MeterSizeValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value =\'' + survey.meterSizes[i] + '"\'/>'+
                                '' + survey.meterSizes[i] + '"</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.meterSizes.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "MeterSize" + chargeIdentifier + i);
                                        for(var j = 0; j < commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value.replace('"', '') + "<QUOTE>")
                                            {
                                                
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'Meter Type': 
                            for(var i = 0; i < survey.meterTypes.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "MeterType" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'MeterTypeValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value =\'' + survey.meterTypes[i] + '\'/>'+
                                '' + survey.meterTypes[i] + '</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(meterType[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.meterTypes.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "MeterType" + chargeIdentifier + i);
                                        for(var j = 0; j < meterType[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(meterType[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'City Limits': 
                            for(var i = 0; i < survey.cityLimits.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
								
                                var checkboxID = identifier + "CityLimits" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'CityLimitsValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value =\'' + survey.cityLimits[i] + '\'/>'+
                                '' + survey.cityLimits[i] + '</label>';
                                
								DIV.appendChild(divider);
                            }                            
                            if(cityLimits[currentIndex][chargeIdentifier][tierIdentifier] != null)
                                {
                                    for(var i = 0; i < survey.cityLimits.length; ++i)
                                        {
                                        var checkCheckBox = document.getElementById(identifier + "CityLimits" + chargeIdentifier + i);
                                        for(var j = 0; j < cityLimits[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(cityLimits[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'Month': 
                            for(var i = 0; i < survey.month.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "Month" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'MonthValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value ="' + survey.month[i] + '"/>'+
                                '' + survey.month[i] + '</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(month[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.month.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "Month" + chargeIdentifier + i);
                                        for(var j = 0; j < month[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(month[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'Temperature Zone':
                            for(var i = 0; i < survey.temperatureZone.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "TemperatureZone" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'TemperatureZoneValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value ="' + survey.temperatureZone[i]+ '"/>'+
                                '' + survey.temperatureZone[i] + '</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(temperatureZone[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.temperatureZone.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "TemperatureZone" + chargeIdentifier + i);
                                        for(var j = 0; j < temperatureZone[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(temperatureZone[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'Pressure Zone':
                            for(var i = 0; i < survey.pressureZone.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "PressureZone" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'PressureZoneValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value ="Pressure ' + survey.pressureZone[i]+ '"/>'+
                                '' + survey.pressureZone[i] + '</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(pressureZone[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.pressureZone.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "PressureZone" + chargeIdentifier + i);
                                        for(var j = 0; j < pressureZone[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(pressureZone[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                        case 'Lot Size Group':
                            for(var i = 0; i < survey.lotSizeGroup.length; ++i)
                            {   
                                var divider = document.createElement("div");
                                divider.classList.add("checkbox");
                                var checkboxID = identifier + "LotSizeGroup" + chargeIdentifier + i;
                                divider.innerHTML += '<label for = "' + checkboxID + '"><input type = "checkbox" id = "' + checkboxID + '" name = "' + identifier + 'LotSizeGroupValues' + chargeIdentifier + '" onclick = "pushParameterValues(\''+ identifier +'\', ' + chargeIdentifier + ', \'' + chargeName + '\')" value ="Lot Size ' + survey.lotSizeGroup[i]+ '"/>'+
                                '' + survey.lotSizeGroup[i] + '</label>';
                                DIV.appendChild(divider);
                            }
                            
                            if(lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier] != null)
                            {
                                    for(var i = 0; i < survey.lotSizeGroup.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(identifier + "LotSizeGroup" + chargeIdentifier + i);
                                        for(var j = 0; j < lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier].length; ++j)
                                        {
                                            if(lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier][j] == checkCheckBox.value)
                                            {
                                                checkCheckBox.checked = true;
                                            }
                                        }
                                    }
                            }
                            break;
                    }
                }
                
                //Clears parameters not used by cust class
                function clearParametersNotUsed(Structure, tierIdentifier, chargeIdentifier)
                {
                    for(value in survey.commodityDependsOn)
                    {
                        if(jQuery.inArray(survey.commodityDependsOn[value], Structure) == -1)
                        {
                            switch(survey.commodityDependsOn[value])
                            {
                                case 'Season': season[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'Meter Size': commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'Month': month[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'Temperature Zone': temperatureZone[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'Lot Size Group': lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'Pressure Zone': pressureZone[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'Meter Type': meterType[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                                case 'City Limits': cityLimits[currentIndex][chargeIdentifier][tierIdentifier] = []; break;
                            }
                        }
                    }
                }
                
                function pushParameterValues(Identifier, chargeIdentifier, chargeName)
                {
                    if(Identifier == 'Uniform')
                    {
                        theSwitchStatement(uniformParameters[currentIndex][chargeIdentifier], Identifier, 0, chargeIdentifier);
                        getUniformRate(chargeIdentifier,chargeName);
                    }
                    else if(Identifier == 'tierStarts' || Identifier == 'tierPrices')
                    {
                        if(Identifier == "tierStarts")
                        {
                            var Continue = true;
                            theSwitchStatement(tierStartsParameters[currentIndex][chargeIdentifier], Identifier, 1, chargeIdentifier);
                            createUsedParameters(tierStartsParameters[currentIndex][chargeIdentifier], 1, chargeIdentifier);
                            for(var i = 0; i < ParametersToUse.length; ++i)
                            {
                                if(ParametersToUse[i] == null)
                                {
                                    Continue = false;
                                    i = ParametersToUse.length;
                                }
                            }
                            
                            if(Continue)
                            {
                                tierStartsCategories[currentIndex][chargeIdentifier] = [];
                                getCategories(tierStartsCategories[currentIndex][chargeIdentifier], 0, ParametersToUse.length, "", "Level:");
                            }
                            
                            var tierStartsValuesDiv = document.getElementById("tierStartsValues" + chargeIdentifier + "Div");
                            
                            if(tierStartsCategories[currentIndex][chargeIdentifier].length  > 0)
                            {
                                if(commodityStructure[currentIndex][chargeIdentifier] == "Tiered")
                                {
                                    createTierFields(tierStartsValuesDiv, "tierStarts", tierStartsCategories[currentIndex][chargeIdentifier], "Tier Definitions (Must be a whole number): ", chargeIdentifier);
                                }
                                else
                                {
                                    createTierFields(tierStartsValuesDiv, "tierStarts", tierStartsCategories[currentIndex][chargeIdentifier], "Tier Definitions (Must be in the format 100%): ", chargeIdentifier);
                                }
                            }
                        }
                        else
                        {
                            var Continue = true;
                            theSwitchStatement(tierPricesParameters[currentIndex][chargeIdentifier], Identifier, 2, chargeIdentifier);
                            createUsedParameters(tierPricesParameters[currentIndex][chargeIdentifier], 2, chargeIdentifier);
                            for(var i = 0; i < ParametersToUse.length; ++i)
                            {
                                if(ParametersToUse[i] == null)
                                {
                                    Continue = false;
                                    i = ParametersToUse.length;
                                }
                            }
                            
                            if(Continue)
                            {
                                commodityChargeCategories[currentIndex][chargeIdentifier] = [];
                                getCategories(commodityChargeCategories[currentIndex][chargeIdentifier], 0, ParametersToUse.length, "", "Rate:");
                            }
                            
                            var tierPricesValuesDiv = document.getElementById("tierPricesValues" + chargeIdentifier + "Div");
                            
                            if(commodityChargeCategories[currentIndex][chargeIdentifier].length > 0)
                            {
                                createTierFields(tierPricesValuesDiv, "tierPrices", commodityChargeCategories[currentIndex][chargeIdentifier], "Tier Prices (Must be in the format 15.99):", chargeIdentifier);
                            }
                        }
                    }
                    else if (Identifier == "service")
                    {
                        theSwitchStatement(serviceParameters[currentIndex][chargeIdentifier], Identifier, 3, chargeIdentifier);
                        getServiceRate(chargeIdentifier, chargeName);
                    }
                }
                
                function theSwitchStatement(theArray, Identifier, tierIdentifier, chargeIdentifier)
                {
                    for(var j = 0; j < theArray.length; ++j)
                        {
                            switch(theArray[j])
                            {
                                case 'Season': 
                                    season[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.season.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "Season" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { 
                                            season[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); 
                                        }
                                    } break;
                                case 'Meter Size': 
                                    commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.meterSizes.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "MeterSize" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { 
                                            commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value.replace('"', '') + "<QUOTE>"); 
                                        }
                                    } break;
                                case 'Meter Type': 
                                    meterType[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.meterTypes.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "MeterType" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { 
                                            meterType[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); 
                                        }
                                    } break;
                                case 'City Limits': 
                                    cityLimits[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.cityLimits.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "CityLimits" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { 
                                            cityLimits[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); 
                                        }
                                    } break;
                                case 'Month': 
                                    month[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.month.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "Month" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { 
                                            month[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); 
                                        }
                                    } break;
                                case 'Temperature Zone':
                                    temperatureZone[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.temperatureZone.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "TemperatureZone" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { temperatureZone[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); }
                                    } break;
                                case 'Pressure Zone':
                                    pressureZone[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.pressureZone.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "PressureZone" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { pressureZone[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); }
                                    } break;
                                case 'Lot Size Group':
                                    lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier] = [];
                                    for(var i = 0; i < survey.lotSizeGroup.length; ++i)
                                    {
                                        var checkCheckBox = document.getElementById(Identifier + "LotSizeGroup" + chargeIdentifier + i);
                                        if(checkCheckBox.checked)
                                        { lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier].push(checkCheckBox.value); }
                                    } break;
                            }
                        }
                }
                
                function getCategories(actualArray, Position, Stop, Text, EndText)
                {
                    if(Position == Stop)
                    {
                        actualArray.push(Text + EndText);
                    }
                    else
                    {
                        for(var i = 0; i < ParametersToUse[Position].length; ++i)
                        {
                            Temp = Text;
                            Temp += ParametersToUse[Position][i] + " ";
                            getCategories(actualArray, Position + 1, Stop, Temp, EndText);
                        }
                    }
                }
                
                function createUsedParameters(parameterList, identifier, chargeIdentifier)
                {
                    ParametersToUse = [];
                        
                    for(var i = 0; i < parameterList.length; ++i)
                    {
                        if(season[currentIndex][chargeIdentifier] != null || commodityMeterSize[currentIndex][chargeIdentifier] != null || month[currentIndex][chargeIdentifier] != null || temperatureZone[currentIndex][chargeIdentifier] != null || pressureZone[currentIndex][chargeIdentifier] != null || lotSizeGroup[currentIndex][chargeIdentifier] != null )
                        {
                            switch(parameterList[i])
                            {
                                case 'Season': ParametersToUse[i] = season[currentIndex][chargeIdentifier][identifier]; break;
                                case 'Meter Size': ParametersToUse[i] = commodityMeterSize[currentIndex][chargeIdentifier][identifier]; break;
                                case 'Month': ParametersToUse[i] = month[currentIndex][chargeIdentifier][identifier]; break;
                                case 'Temperature Zone': ParametersToUse[i] = temperatureZone[currentIndex][chargeIdentifier][identifier]; break;
                                case 'Pressure Zone': ParametersToUse[i] = pressureZone[currentIndex][chargeIdentifier][identifier]; break;
                                case 'Lot Size Group': ParametersToUse[i] = lotSizeGroup[currentIndex][chargeIdentifier][identifier]; break;
                                case 'Meter Type': ParametersToUse[i] = meterType[currentIndex][chargeIdentifier][identifier]; break;
                                case 'City Limits': ParametersToUse[i] = cityLimits[currentIndex][chargeIdentifier][identifier]; break;
                            }
                        }
                    }
                }
                
                function createTierFields(DIV, identifier, categoryArray, subtitle, chargeIdentifier)
                {
                    if(DIV.childNodes.length > 0)
                    {
                        clear(DIV);
                    }
                    
                    if(commodityCharges[currentIndex][chargeIdentifier] != null && commodityCharges[currentIndex][chargeIdentifier].length != 0)
                    {
                        if(commodityCharges[currentIndex][chargeIdentifier].length != commodityChargeCategories[currentIndex][chargeIdentifier].length*tierLevels[currentIndex][chargeIdentifier])
                            commodityCharges[currentIndex][chargeIdentifier] = [];
                    }
                    if(tierStartsValues[currentIndex][chargeIdentifier] != null)
                    {
                        if(tierStartsValues[currentIndex][chargeIdentifier].length != tierStartsCategories[currentIndex][chargeIdentifier].length*tierLevels[currentIndex][chargeIdentifier])
                            tierStartsValues[currentIndex][chargeIdentifier] = [];
                    }
                    
                    Answer = document.createElement("h4");
                    Answer.appendChild(document.createTextNode(subtitle));
                    DIV.appendChild(Answer);
                    
                    var number = 0;
                    for(var i = 0; i < categoryArray.length; ++i)
                    {
                        var ID = categoryArray[i].split(" ").join();
                        
                        if(ID != "" && ID != "Level :" && ID != "Rate:")
                        {
                            Answer = document.createElement("h5");
                            Answer.appendChild(document.createTextNode(categoryArray[i].split("<QUOTE>").join("")));
                            DIV.appendChild(Answer);
                        }
                        
                        for(var j = 0; j < tierLevels[currentIndex][chargeIdentifier]; ++j)
                        {
                            var divider = document.createElement("div");
                            divider.classList.add("form-group");
                            DIV.appendChild(divider);
                            
                            Answer = document.createElement("label");
                            Answer.setAttribute("for", identifier + chargeIdentifier + number);
                            Answer.appendChild(document.createTextNode("Tier " + (j + 1) + ": "));
                            divider.appendChild(Answer);
                            
                            var itemGroup = document.createElement("div");
                            itemGroup.classList.add("input-group");
                            divider.appendChild(itemGroup);
                            
                            Answer = document.createElement("span");
                            Answer.classList.add("input-group-addon");
                            
                            if(identifier == "tierStarts")
                                Answer.innerHTML = '<i class = "glyphicon glyphicon-tint"></i>'
                            else
                                Answer.innerHTML = '<i class = "glyphicon glyphicon-usd"></i>'
                            itemGroup.appendChild(Answer);
                            
                            Answer = document.createElement("input");
                            Answer.setAttribute("type", "text");
                            Answer.classList.add("form-control");
							Answer.setAttribute("onkeydown", "if (event.keyCode == 13) return false;");
                            Answer.id = identifier + chargeIdentifier + number;
                            number++;
                            
                            if(j == 0 && identifier == "tierStarts")
                            {
                                Answer.value = 0;
                                Answer.readOnly = true;
                            }
                            
                            if(identifier == "tierStarts" &&  commodityStructure[currentIndex][chargeIdentifier] == 'Budget')
                            {
								if(j == 1)
									Answer.placeholder = 'indoor (OR outdoor OR x%)';
								else if(j==2)
									Answer.placeholder = '100%';
								else if(j==3)
									Answer.placeholder = '125%';
								else if(j==4)
									Answer.placeholder = '150%';
                            }
                            
                            itemGroup.appendChild(Answer);
                        }
                    }
                    
                    if(identifier == "tierStarts" && tierStartsValues[currentIndex][chargeIdentifier] != null && tierStartsValues[currentIndex][chargeIdentifier].length == tierStartsCategories[currentIndex][chargeIdentifier].length*tierLevels[currentIndex][chargeIdentifier])
                    {
                        var index = 0;
                        for(var i = 0; i < categoryArray.length; ++i)
                        {
                            for(var j = 0; j < tierLevels[currentIndex][chargeIdentifier]; ++j)
                            {
                                var temp = document.getElementById(identifier + chargeIdentifier + index);
                                temp.value = tierStartsValues[currentIndex][chargeIdentifier][index];
                                index++;
                            }
                        }
                    }
                    else if(identifier == "tierPrices" && commodityCharges[currentIndex][chargeIdentifier] != null && commodityCharges[currentIndex][chargeIdentifier].length == commodityChargeCategories[currentIndex][chargeIdentifier].length*tierLevels[currentIndex][chargeIdentifier])
                    {
                        var index = 0;
                        for(var i = 0; i < categoryArray.length; ++i)
                        {
                            for(var j = 0; j < tierLevels[currentIndex][chargeIdentifier]; ++j)
                            {
                                var temp = document.getElementById(identifier + chargeIdentifier + index);
                                temp.value = commodityCharges[currentIndex][chargeIdentifier][index];
                                index++;
                            }
                        }
                    }
                }
                
                function errorCheckCommodityParameters(structure, tierIdentifier, chargeIdentifier, Continue)
                {
                    for(var i = 0; i < structure.length; ++i)
                    {
                        switch(structure[i])
                        {
                            case "Season":
                                if(season[currentIndex][chargeIdentifier][tierIdentifier] == null || season[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for Season");
                                } break;
                            case "Meter Size":
                                if(commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier] == null || commodityMeterSize[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for Meter Size");
                                } break;
                            case "Month":
                                if(month[currentIndex][chargeIdentifier][tierIdentifier] == null || month[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for Month");
                                } break;
                            case "Temperature Zone":
                                if(temperatureZone[currentIndex][chargeIdentifier][tierIdentifier] == null || temperatureZone[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for Temperature Zone");
                                } break;
                            case "Pressure Zone":
                                if(pressureZone[currentIndex][chargeIdentifier][tierIdentifier] == null || pressureZone[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                     alert("No parameters selected for Pressure Zone");
                                } break;
                            case "Lot Size Group":
                                if(lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier] == null || lotSizeGroup[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for Lot Size Group");
                                } break;
                            case "Meter Type":
                                if(meterType[currentIndex][chargeIdentifier][tierIdentifier] == null || meterType[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for Meter Type");
                                } break;
                            case "City Limits":
                                if(cityLimits[currentIndex][chargeIdentifier][tierIdentifier] == null || cityLimits[currentIndex][chargeIdentifier][tierIdentifier].length == 0)
                                {
                                    Continue = false;
                                    alert("No parameters selected for City Limits");
                                } break;
                        }
                    }
                    
                    
                    return Continue;
                }
                
                
                function PreviousGetAnswers()
                {
                    
                    if(currentIndex == 0)
                    {
                        ChargePage();
                    }
                    else
                    {   
                        currentIndex -= 1;
                        RateStructure(currentIndex);
                    }
                }
                
                function NextGetAnswers()
                {
                    var Continue = true;
                    for(var i = 0; i < 3; ++i)
                    {
                    if(isServiceCharge[currentIndex][i])
                    {
                        if(!isServiceSame[currentIndex][i])
                        {
                            if(isServiceDepends[currentIndex][i])
                            {
                                if(serviceParameters[currentIndex][i] != null)
                                {
                                    Continue = errorCheckCommodityParameters(serviceParameters[currentIndex][i], 3, i, Continue);
                                            
                                    if(Continue)
                                    {
                                        if(serviceChargeCategories[currentIndex][i] != null)
                                        {
                                            serviceCharges[currentIndex][i] = []
                                            for(var j = 0; j < serviceChargeCategories[currentIndex][i].length; ++j)
                                            {
                                                var tempCharge = document.getElementById("serviceCharge" + i + j);
                            
                                                if(tempCharge.value == "")
                                                {
                                                    alert("Service Charge at row " + (j + 1) + " isn't filled out");
                                                    Continue = false;
                                                }
                                                else
                                                {
                                                    var regex = /^\d+(\.\d+)?$/.test(tempCharge.value);
                                                    if(regex)
                                                    {
                                                        serviceCharges[currentIndex][i].push(tempCharge.value);
                                                    }
                                                    else
                                                    {
                                                        alert("Service Charge at row " + (j + 1) + " must be a non-negative number");
                                                        Continue = false;
                                                    }
                                                }
                                            }   
                                        }  
                                        else
                                        {
                                            Continue = false;
                                            alert("Please Select a Parameter");
                                        }
                                    }
                                }
                                else
                                {
                                    Continue = false;
                                    alert('You must select a parameter for the Service Charge or select "No" the Service Charge does not depend on anything');
                                }
                            }
                            else
                            {
                                var temp = document.getElementById("ServiceCharge" + i );
                                if(temp.value == "")
                                {
                                    alert("The Service Charge Field is Empty");
                                    Continue = false;
                                }
                                else
                                {
                                    var regex = /^\d+(\.\d+)?$/.test(temp.value);
                                    if(regex)
                                    {
                                        serviceCharges[currentIndex][i] = []
                                        serviceCharges[currentIndex][i].push(temp.value);
                                    }
                                    else
                                    {
                                        alert("The service charge must be a non-negative number");
                                        Continue = false;
                                    }
                                }
                            }
                        }
                        else
                        {
                            if(isServiceCharge[serviceSameStructure[currentIndex][i]][i] == false)
                            {
                                Continue = false;
								alertText = "You said that this customer class has the same fixed service charge as a previously entered customer class. "+
											"However, the previous customer class you selected does not appear to have a fixed service charge."+
											"\n\n"+
											"Please do one of the following:\n"+
											"* Select a different customer class in section (1b)\n"+
											"* Change your response to question (1)\n"+
											"* Return to the previous customer class using the 'Previous' button below and enter the proper information."
                                alert(alertText);
                            }
                        }
                    }
                        
                    if(isCommodityCharge[currentIndex][i])
                    {
                        if(commodityStructure[currentIndex][i] == null)
                        {
                            Continue = false;
                            alert('A commodity structure must be selected');
                        }
                        else
                        {
                            switch(commodityStructure[currentIndex][i])
                            {
                                case 'Uniform': 
                                commodityCharges[currentIndex][i] = []
                                if(isUniformDependsOn[currentIndex][i] == "No")
                                {
                                    var Charge = document.getElementById("commodityCharge" + i + "0");
                                    if(Charge.value == "")
                                    { alert("You must enter a uniform rate"); Continue = false; } 
                                    else
                                    { 
                                        var regex = /^\d+(\.\d+)?$/.test(Charge.value);
                                        if(regex && parseFloat(Charge.value) >= 0)
                                        {
                                            commodityCharges[currentIndex][i].push(Charge.value);
                                        }
                                        else
                                        {
                                            alert('Rate must be a non-negative number');
                                            Continue = false;
                                        }
                                    }
                                }
                                else
                                {
                                    if(uniformParameters[currentIndex][i] != null)
                                    {
                                        Continue = errorCheckCommodityParameters(uniformParameters[currentIndex][i], 0, i, Continue);
                                        
                                        if(Continue)
                                        {
                                            if(commodityChargeCategories[currentIndex][i] != null)
                                            {
                                                for(var j = 0; j < commodityChargeCategories[currentIndex][i].length; ++j)
                                                {
                                                    var tempCharge = document.getElementById("commodityCharge" + i + j);
                                    
                                                    if(tempCharge.value == "")
                                                    {
                                                        alert("Commodity Charge at row " + (j + 1) + " isn't filled out");
                                                        Continue = false;
                                                    }
                                                    else
                                                    {
                                                        var regex = /^\d+(\.\d+)?$/.test(tempCharge.value);
                                                        if(regex && parseFloat(tempCharge.value) >= 0)
                                                        {
                                                            commodityCharges[currentIndex][i].push(tempCharge.value);
                                                        }
                                                        else
                                                        {
                                                            alert("Commodity Charge at tier " + (j + 1) + " must be a non-negative number");
                                                            Continue = false;
                                                        }
                                                    }
                                                }   
                                            }  
                                            else
                                            {
                                                Continue = false;
                                                alert("Please Select a Parameter");
                                            }
                                        }
                                    }
                                    else
                                    {
                                        Continue = false;
                                        alert('You must select a parameter for the flat rate or select "No" the rate does not depend on anything');
                                    }
                                }
                                break;
                                case 'Tiered': 
                                commodityCharges[currentIndex][i] = [];
                                tierStartsValues[currentIndex][i] = [];
                                
                                if(isTierStartsDepends[currentIndex][i])
                                {
                                    if(tierStartsParameters[currentIndex][i] != null && tierStartsParameters[currentIndex][i].length > 0)
                                    {
                                        Continue = errorCheckCommodityParameters(tierStartsParameters[currentIndex][i], 1, i, Continue);
                                        
                                        if(Continue)
                                        {
                                            if(tierStartsCategories[currentIndex][i] != null && tierStartsCategories[currentIndex][i].length > 0)
                                            {
                                                for(var j = 0; j < (tierStartsCategories[currentIndex][i].length*tierLevels[currentIndex][i]); ++j)
                                                {
                                                    var tempCharge = document.getElementById("tierStarts" + i + j);
                                    
                                                    if(tempCharge.value == "")
                                                    {
                                                        var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                        alert("The Tier Level for " + tierStartsCategories[currentIndex][i][tempIndex].replace(" Level:", "").replace("<QUOTE>", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " isn't filled out");
                                                        Continue = false;
                                                    }
                                                    else
                                                    {
                                                        var regex = /^\d+$/.test(tempCharge.value);
                                                        if(regex && parseFloat(tempCharge.value) >= 0)
                                                        {
                                                            tierStartsValues[currentIndex][i].push(tempCharge.value);
                                                        }
                                                        else
                                                        {
                                                            var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                            alert("The Tier Level for " + tierStartsCategories[currentIndex][i][tempIndex].replace(" Level:", "").replace("<QUOTE>", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " must be a whole number and non-negative");
                                                            Continue = false;
                                                        }
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                Continue = false;
                                                alert("Parameter Fields are empty");
                                            }
                                        }
                                    }
                                    else
                                    {
                                        Continue = false;
                                        alert("No parameters Selected for Tier Definitions");
                                    }
                                }
                                else
                                {
                                    for(var j = 0; j < tierLevels[currentIndex][i]; ++j)
                                    {
                                        var Level = document.getElementById("tierStarts" + i + j);
                                        if(Level.value == "")
                                        { 
                                            alert("You must enter a CCF level for tier " + (j + 1)); 
                                            Continue = false;
                                        } 
                                        else
                                        { 
                                            var regex = /^\d+$/.test(Level.value);
                                            if(regex && parseFloat(Level.value) >= 0)
                                            {
                                                tierStartsValues[currentIndex][i].push(Level.value);
                                            }
                                            else
                                            {
                                                alert("The Tier Level for tier " + (j % tierLevels[currentIndex][i] + 1) + " must be a whole number and non-negative");
                                                Continue = false;
                                            } 
                                        }
                                    }
                                }
                                
                                if(isTierPricesDepends[currentIndex][i])
                                {
                                    if(tierPricesParameters[currentIndex][i] != null && tierPricesParameters[currentIndex][i].length > 0)
                                    {
                                        Continue = errorCheckCommodityParameters(tierPricesParameters[currentIndex][i], 2, i, Continue);
                                        
                                        if(Continue)
                                        {
                                            if(commodityChargeCategories[currentIndex][i] != null && commodityChargeCategories[currentIndex][i].length > 0)
                                            { 
                                                for(var j = 0; j < (commodityChargeCategories[currentIndex][i].length*tierLevels[currentIndex][i]); ++j)
                                                {
                                                    var tempCharge = document.getElementById("tierPrices" + i + j);
                                    
                                                    if(tempCharge.value == "")
                                                    {
                                                        var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                        alert("The Tier Price for " + commodityChargeCategories[currentIndex][i][tempIndex].replace(" Rate:", "").replace("<QUOTE>", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " isn't filled out");
                                                        Continue = false;
                                                    }
                                                    else
                                                    {
                                                        var regex = /^\d+(\.\d+)?$/.test(tempCharge.value);
                                                        if(regex && parseFloat(tempCharge.value) >= 0)
                                                        {
                                                            commodityCharges[currentIndex][i].push(tempCharge.value);
                                                        }
                                                        else
                                                        {
                                                            var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                            alert("The Tier Price for " + commodityChargeCategories[currentIndex][i][tempIndex].replace(" Rate:", "").replace("<QUOTE>", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " must be a non-negative number");
                                                            Continue = false;
                                                        }
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                Continue = false;
                                                alert("Parameter Fields are empty");
                                            }
                                        }
                                    }
                                    else
                                    {
                                        Continue = false;
                                        alert("No parameters Selected for Tier Prices");
                                    }
                                }
                                else
                                {
                                    for(var j = 0; j < tierLevels[currentIndex][i]; ++j)
                                    {
                                        var Price = document.getElementById("tierPrices" + i + j);
                                        if(Price.value == "")
                                        { 
                                            alert("You must enter a Price for tier " + (j + 1)); 
                                            Continue = false;
                                        } 
                                        else
                                        { 
                                            var regex = /^\d+(\.\d+)?$/.test(Price.value);
                                            if(regex && parseFloat(Price.value) >= 0)
                                            {
                                                commodityCharges[currentIndex][i].push(Price.value);
                                            }
                                            else
                                            {
                                                alert("The Tier Price for tier " + (j % tierLevels[currentIndex][i] + 1) + " must be a non-negative number");
                                                Continue = false;
                                            } 
                                        }
                                    }
                                }
                                
                                break;
                                case 'Budget':
                                gpcd[currentIndex][i] = null;
                                indoor[currentIndex][i] = null;
                                outdoor[currentIndex][i] = null;
                                landscape_factor[currentIndex][i] = null;
                                budget[currentIndex][i] = null;
                                commodityCharges[currentIndex][i] = [];
                                tierStartsValues[currentIndex][i] = [];
                                
                                gpcdValue = document.getElementById("gpcd" + i);
                                if(gpcdValue.value != "")
                                {
                                    try
                                    {
                                        gpcd[currentIndex][i] = Number(gpcdValue.value);
                                    }
                                    catch (err)
                                    {
                                        alert("Gallons Per Capita Daily must be a number");
                                        Continue = false;
                                    }
                                }
                                else
                                {
                                    alert("Gallons Per Capita Day field empty");
                                    Continue = false;
                                }
                                
                                indoorValue = document.getElementById("indoor" + i);
                                if(indoorValue.value != "")
                                    indoor[currentIndex][i] = indoorValue.value;
                                else
                                {
                                    alert("Indoor Equation field empty");
                                    Continue = false;
                                }
                                
                                outdoorValue = document.getElementById("outdoor" + i);
                                if(indoorValue.value != "")
                                    outdoor[currentIndex][i] = outdoorValue.value;
                                else
                                {
                                    alert("Outdoor Equation field empty");
                                    Continue = false;
                                }
                                
                                landscape_factorValue = document.getElementById("landscape_factor" + i);
                                if(landscape_factorValue.value != "")
                                    landscape_factor[currentIndex][i] = landscape_factorValue.value;
                                else
                                {
                                    alert("Landscape Factor field empty");
                                    Continue = false;
                                }
                                
                                budgetValue = document.getElementById("budget" + i);
                                if(budgetValue.value != "")
                                    budget[currentIndex][i] = budgetValue.value;
                                else
                                {
                                    alert("Outdoor Equation field empty");
                                    Continue = false;
                                }
                                
                                if(isTierStartsDepends[currentIndex][i])
                                {
                                    if(tierStartsParameters[currentIndex][i] != null && tierStartsParameters[currentIndex][i].length > 0)
                                    {
                                        Continue = errorCheckCommodityParameters(tierStartsParameters[currentIndex][i], 1, i, Continue);
                                        
                                        if(Continue)
                                        {
                                            if(tierStartsCategories[currentIndex][i] != null && tierStartsCategories[currentIndex][i].length > 0)
                                            {
                                                for(var j = 0; j < (tierStartsCategories[currentIndex][i].length*tierLevels[currentIndex][i]); ++j)
                                                {
                                                    var tempCharge = document.getElementById("tierStarts" + i + j);
                                    
                                                    if(tempCharge.value == "")
                                                    {
                                                        var tempIndex = Math.floor(i/tierLevels[currentIndex][i]);
                                                        alert("The Tier Level for " + tierStartsCategories[currentIndex][i][tempIndex].replace(" Level:", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " isn't filled out");
                                                        Continue = false;
                                                    }
                                                    else
                                                    {
                                                        var regex = /^\d+(?:%)$/.test(tempCharge.value);
                                                        if(j % tierLevels[currentIndex][i] + 1 == 2)
                                                        {
                                                            if(tempCharge.value == "indoor" || tempCharge.value == "outdoor" || regex)
                                                            {
                                                                tierStartsValues[currentIndex][i].push(tempCharge.value);
                                                            }
                                                            else
                                                            {
                                                                var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                                alert("The Tier Level for " + tierStartsCategories[currentIndex][i][tempIndex].replace(" Level:", "").replace("<QUOTE>", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " must be in the format 100% or say 'indoor' or 'outdoor'");
                                                                Continue = false;
                                                            }
                                                        }
                                                        else if(j % tierLevels[currentIndex][i] + 1 > 2)
                                                        {
                                                            if(regex)
                                                            {
                                                                tierStartsValues[currentIndex][i].push(tempCharge.value);
                                                            }
                                                            else
                                                            {
                                                                var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                                alert("The Tier Level for " + tierStartsCategories[currentIndex][i][tempIndex].replace(" Level:", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " must be in the format 100% or 1%");
                                                                Continue = false;
                                                            }
                                                        }
                                                        else
                                                        {
                                                            tierStartsValues[currentIndex][i].push(tempCharge.value);
                                                        }
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                Continue = false;
                                                alert("Parameter Fields are empty");
                                            }
                                        }
                                    }
                                    else
                                    {
                                        Continue = false;
                                        alert("No parameters Selected for Tier Definitions");
                                    }
                                }
                                else
                                {
                                    for(var j = 0; j < tierLevels[currentIndex][i]; ++j)
                                    {
                                        var Level = document.getElementById("tierStarts" + i + j);
                                        if(Level.value == "")
                                        { 
                                            alert("You must enter a CCF level for tier " + (j + 1)); 
                                            Continue = false;
                                        } 
                                        else
                                        { 
                                            var regex = /^\d+(?:%)$/.test(Level.value);
                                            if(j > 1)
                                            {
                                                if(regex)
                                                {
                                                    tierStartsValues[currentIndex][i].push(Level.value);
                                                }
                                                else
                                                {
                                                    alert("The Tier Level for tier " + (j + 1) + " must be in the format 100% or 1%");
                                                    Continue = false;
                                                }
                                            }
                                            else
                                            {
                                                if(j == 1)
                                                {
                                                    if(Level.value == "indoor" || Level.value == "outdoor" || regex)
                                                        tierStartsValues[currentIndex][i].push(Level.value);
                                                    else
                                                        alert("The Tier Level for tier " + (j + 1) + " must be in the format 100% or say 'indoor' or 'outdoor'");
                                                }
                                                else
                                                    tierStartsValues[currentIndex][i].push(Level.value); 
                                            }
                                        }
                                    }
                                }
                                
                                if(isTierPricesDepends[currentIndex][i])
                                {
                                    if(tierPricesParameters[currentIndex][i] != null && tierPricesParameters[currentIndex][i].length > 0)
                                    {
                                        Continue = errorCheckCommodityParameters(tierPricesParameters[currentIndex][i], 2, i, Continue);
                                        
                                        if(Continue)
                                        {
                                            if(commodityChargeCategories[currentIndex][i] != null && commodityChargeCategories[currentIndex][i].length > 0)
                                            { 
                                                for(var j = 0; j < (commodityChargeCategories[currentIndex][i].length*tierLevels[currentIndex][i]); ++j)
                                                {
                                                    var tempCharge = document.getElementById("tierPrices" + i + j);
                                    
                                                    if(tempCharge.value == "")
                                                    {
                                                        var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                        alert("The Tier Price for " + commodityChargeCategories[currentIndex][i][tempIndex].replace(" Rate:", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " isn't filled out");
                                                        Continue = false;
                                                    }
                                                    else
                                                    {
                                                        var regex = /^\d+(\.\d+)?$/.test(tempCharge.value);
                                                        if(regex)
                                                        {
                                                            commodityCharges[currentIndex][i].push(tempCharge.value);
                                                        }
                                                        else
                                                        {
                                                            var tempIndex = Math.floor(j/tierLevels[currentIndex][i]);
                                                            alert("The Tier Price for " + commodityChargeCategories[currentIndex][i][tempIndex].replace(" Rate:", "") + " at tier " + (j % tierLevels[currentIndex][i] + 1) + " must be a non-negative number");
                                                            Continue = false;
                                                        }
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                Continue = false;
                                                alert("Parameter Fields are empty");
                                            }
                                        }
                                    }
                                    else
                                    {
                                        Continue = false;
                                        alert("No parameters Selected for Tier Prices");
                                    }
                                }
                                else
                                {
                                    for(var j = 0; j < tierLevels[currentIndex][i]; ++j)
                                    {
                                        var Price = document.getElementById("tierPrices"  + i + j);
                                        if(Price.value == "")
                                        { 
                                            alert("You must enter a Price for tier " + (j + 1)); 
                                            Continue = false;
                                        } 
                                        else
                                        { 
                                            var regex = /^\d+(\.\d+)?$/.test(Price.value);
                                            if(regex)
                                            {
                                                commodityCharges[currentIndex][i].push(Price.value);
                                            }
                                            else
                                            {
                                                alert("The Tier Price for tier " + (j % tierLevels[currentIndex][i] + 1) + " must be a non-negative number");
                                                Continue = false;
                                            } 
                                        }
                                    }
                                }                                
                                break;
                            }
                        }
                    }
                    
                    }
                    
                    if(Continue)
                    {
                        if(currentIndex == SelectedRateStructures.length - 1)
                        {
                            Complete();
                        }
                        else
                        {
                            currentIndex += 1;
                            RateStructure(currentIndex);
                        }
                    }
                }
                
                function parameterParser(structure)
                {
                    switch(structure)
                    {
                        case 'Season': return 'season'; break;
                        case 'Temperature Zone': return 'temperature_zone'; break;
                        case 'Pressure Zone': return 'pressure_zone'; break;
                        case 'Lot Size Group': return 'lot_size_group'; break;
                        case 'Meter Size': return 'meter_size'; break;
                        case 'Month': return 'month'; break;
                        case 'Meter Type': return 'meter_type'; break;
                        case 'City Limits': return 'city_limits'; break;
                    }
                }
                
                function Complete()
                {
                    OWRSformat = {
                       "metadata" : {
                            "effective_date" : "" + EffectiveDate + "",
                            "utility_name" : "" + UtilityName + "",
                            "bill_frequency" : "" + BillFrequency + "",
							"bill_unit" : "" + BillingUnit + ""
                       },
                       "rate_structure" : {
                       
                       }
                    };
                    
                    if(isCapacityCharge)
                    {
                        OWRSformat.capacity_charge = {
                            "depends_on" : ["meter_size"]
                        }
                        
                        var valueStorage = '{';
                        for(var i = 0; i < capacityCharges.length; ++i)
                        {
                            if(i == capacityCharges.length - 1)
                            {
                                valueStorage += '"' + capacityMeterSizes[i] + '" : ' + capacityCharges[i] + ' }'
                            }
                            else
                            {
                                valueStorage += '"' + capacityMeterSizes[i] + '" : ' + capacityCharges[i] + ', '
                            }
                        }
                        OWRSformat.capacity_charge.values = JSON.parse(valueStorage);
                    }
                    
                    serviceJSON = [];
                    commodityJSON = [];
                    
                    for(var structure in SelectedRateStructures)
                    {
                        for(var j = 0; j < 3; ++j)
                        {
                            var tempStructure; 
                        
                            if(isServiceCharge[structure][j])
                            {
                                if(!isServiceDepends[structure][j])
                                {	console.log("serviceCharges: "+serviceCharges);
									console.log("currentIndex: "+currentIndex);
									console.log("j: "+j);
                                    serviceJSON[j] = Number(serviceCharges[structure][j][0]);
                                }
                                else
                                {
                                    serviceJSON[j] = {
                                        "depends_on" : [],
                                        "values" : {}
                                    };
                            
                                    for(var i = 0; i < serviceParameters[structure][j].length; ++i)
                                    {
                                        var temp = parameterParser(serviceParameters[structure][j][i]);
                                        serviceJSON[j].depends_on.push(temp);
                                    }
                            
                                    var valueStorage = '{';
                                    for(var value in serviceCharges[structure][j])
                                    {
                                        var replacementStr = serviceChargeCategories[structure][j][value].replace(" Rate:", ""); 
                                        replacementStr = replacementStr.replace("Pressure ", ""); replacementStr = replacementStr.replace("Elevation ", "");
                                        replacementStr = replacementStr.replace("Lot Size ", ""); replacementStr = replacementStr.replace('"', '');
                                        replacementStr = replacementStr.replace("Inside City", "inside_city"); replacementStr = replacementStr.replace("Outside City", "outside_city");
                                        replacementStr = replacementStr.replace("Omni F2", "Omni_F2");
                                    
                                        for(var i = 0; i < survey.month.length; ++i)
                                        {
                                            replacementStr = replacementStr.replace(survey.month[i], i + 1);
                                        }
                                    
                                        if(value == serviceCharges[structure][j].length - 1)
                                        {
                                                valueStorage += '"' + replacementStr.split(" ").join("|") + '" : ' + serviceCharges[structure][j][value] + ' }'
                                        }
                                        else
                                        {
                                            valueStorage += '"' + replacementStr.split(" ").join("|") + '" : ' + serviceCharges[structure][j][value] + ', '
                                        }
                                    }
                                    serviceJSON[j].values = JSON.parse(valueStorage);
                                }
                            }
                            else
                            { serviceJSON[j] = 0; }
                    
                            if(isCommodityCharge[structure][j])
                            {
                                commodityJSON[j] = "";
                                switch(commodityStructure[structure][j])
                                {
                                    case 'Uniform':
                                
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j]  = {
                                                    "commodity_charge" : "flat_rate_commodity*usage_ccf",
                                                    "flat_rate_commodity" : {}
                                                }; break;
                                        case 1: commodityJSON[j]  = {
                                                    "variable_drought_surcharge" : "flat_rate_drought*usage_ccf",
                                                    "flat_rate_drought" : {}
                                                }; break;
                                        case 2: commodityJSON[j]  = {
                                                    "variable_wastewater_charge" : "flat_rate_waste*usage_ccf",
                                                    "flat_rate_waste" : {}
                                                }; break;
                                    }
                                    /*
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j].billing_unit_commodity = billingUnits[structure][j]; break;
                                        case 1: commodityJSON[j].billing_unit_drought = billingUnits[structure][j]; break;
                                        case 2: commodityJSON[j].billing_unit_waste = billingUnits[structure][j]; break;
                                    }
                                    */
                                    if(isUniformDependsOn[structure][j] == 'No')
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].flat_rate_commodity = Number(commodityCharges[structure][j][0]); break;
                                            case 1: commodityJSON[j].flat_rate_drought = Number(commodityCharges[structure][j][0]); break;
                                            case 2: commodityJSON[j].flat_rate_waste = Number(commodityCharges[structure][j][0]); break;
                                        }
                                        
                                    }
                                    else
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].flat_rate_commodity.depends_on = [];break;
                                            case 1: commodityJSON[j].flat_rate_drought.depends_on = []; break;
                                            case 2: commodityJSON[j].flat_rate_waste.depends_on = []; break;
                                        }
                                        
                                        for(var i = 0; i < uniformParameters[structure][j].length; ++i)
                                        {
                                            var temp = parameterParser(uniformParameters[structure][j][i]);
                                            
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].flat_rate_commodity.depends_on.push(temp); break;
                                                case 1: commodityJSON[j].flat_rate_drought.depends_on.push(temp); break;
                                                case 2: commodityJSON[j].flat_rate_waste.depends_on.push(temp); break;
                                            }
                                            
                                        }
                                        
                                        var tempComm = "{ "
                                        for(value in commodityChargeCategories[structure][j])
                                        {
                                            
                                            var replacementStr = commodityChargeCategories[structure][j][value].replace(" Rate:", ""); 
                                            replacementStr = replacementStr.replace("Pressure ", ""); 
                                            replacementStr = replacementStr.replace("Lot Size ", ""); 
											replacementStr = replacementStr.replace('"', '');
                                            replacementStr = replacementStr.replace("Inside City", "inside_city"); 
											replacementStr = replacementStr.replace("Outside City", "outside_city");
                                            replacementStr = replacementStr.replace("Omni F2", "Omni_F2");
                    
                                            for(var i = 0; i < survey.month.length; ++i)
                                            {
                                                replacementStr = replacementStr.replace(survey.month[i], i + 1);
                                            }
                                            
                                            if(value == commodityChargeCategories[structure][j].length - 1)
                                            {
                                                tempComm += '"' + replacementStr.split(" ").join("|") + '": ' + commodityCharges[structure][j][value]+ ' }';
                                            }
                                            else
                                            {
                                                tempComm += '"' + replacementStr.split(" ").join("|") + '": ' + commodityCharges[structure][j][value]+ ', ';
                                            }
                                        }
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].flat_rate_commodity.values = JSON.parse(tempComm); break;
                                            case 1: commodityJSON[j].flat_rate_drought.values = JSON.parse(tempComm); break;
                                            case 2: commodityJSON[j].flat_rate_waste.values = JSON.parse(tempComm); break;
                                        }
                                        
                                    } break;
                                case 'Tiered':
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j]  = {
                                                    "commodity_charge" : "Tiered"
                                                }; break;
                                        case 1: commodityJSON[j]  = {
                                                    "variable_drought_surcharge" : "Tiered"
                                                }; break;
                                        case 2: commodityJSON[j]  = {
                                                    "variable_wastewater_charge" : "Tiered"
                                                }; break;
                                    }
                                    /*
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j].tiered_billing_unit_commodity = billingUnits[structure][j]; break;
                                        case 1: commodityJSON[j].tiered_billing_unit_drought = billingUnits[structure][j]; break;
                                        case 2: commodityJSON[j].tiered_billing_unit_waste = billingUnits[structure][j]; break;
                                    }
                                    */
                                    if(isTierStartsDepends[structure][j])
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_starts_commodity = { "depends_on": [],
                                                                                               "values": {}     };
                                                                                               break;
                                            case 1: commodityJSON[j].tier_starts_drought = { "depends_on": [],
                                                                                             "values": {}     };
                                                                                             break;
                                            case 2: commodityJSON[j].tier_starts_waste = { "depends_on": [],
                                                                                           "values": {}     };
                                                                                           break;
                                        }
                                        for(var i = 0; i < tierStartsParameters[structure][j].length; ++i)
                                        {
                                            var temp = parameterParser(tierStartsParameters[structure][j][i])
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_starts_commodity.depends_on.push(temp); break;
                                                case 1: commodityJSON[j].tier_starts_drought.depends_on.push(temp); break;
                                                case 2: commodityJSON[j].tier_starts_waste.depends_on.push(temp); break;
                                            }
                                            
                                        }
                                        
                                        var tempComm = "{ ", number = 0; 
                                        for(value in tierStartsCategories[structure][j])
                                        {
                                            var replacementStr = tierStartsCategories[structure][j][value].replace(" Level:", "");
                                            replacementStr = replacementStr.replace("Pressure ", ""); 
                                            replacementStr = replacementStr.replace("Lot Size ", ""); 
											replacementStr = replacementStr.replace('"', '');
                                            replacementStr = replacementStr.replace("Inside City", "inside_city"); 
											replacementStr = replacementStr.replace("Outside City", "outside_city");
                                            replacementStr = replacementStr.replace("Omni F2", "Omni_F2");
                    
                                            for(var i = 0; i < survey.month.length; ++i)
                                            {
                                                replacementStr = replacementStr.replace(survey.month[i], i + 1);
                                            }
                                            tempComm += ' "' + replacementStr.split(" ").join("|") + '": [ ';
                                            
                                            for(var k = 0; k < tierLevels[structure][j]; ++k)
                                            {
                                                if(k == tierLevels[structure] - 1)
                                                {
                                                    tempComm += '"' + tierStartsValues[structure][j][number] + '" ]';
                                                }
                                                else
                                                {
                                                    tempComm += '"' + tierStartsValues[structure][j][number] + '", ';
                                                }
                                                number++;
                                            }
                                            
                                            if(value == tierStartsCategories[structure][j].length - 1)
                                                tempComm += ' }';
                                            else
                                                tempComm += ', '
                                        }
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_starts_commodity.values = JSON.parse(tempComm); break;
                                            case 1: commodityJSON[j].tier_starts_drought.values = JSON.parse(tempComm); break;
                                            case 2: commodityJSON[j].tier_starts_waste.values = JSON.parse(tempComm); break;
                                        }
                                        
                                    }
                                    else
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_starts_commodity = []; break;
                                            case 1: commodityJSON[j].tier_starts_drought = []; break;
                                            case 2: commodityJSON[j].tier_starts_waste = []; break;
                                        }
                                        
                                        for(var i = 0; i < tierLevels[structure][j]; ++i)
                                        {
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_starts_commodity.push(tierStartsValues[structure][j][i]); break;
                                                case 1: commodityJSON[j].tier_starts_drought.push(tierStartsValues[structure][j][i]); break;
                                                case 2: commodityJSON[j].tier_starts_waste.push(tierStartsValues[structure][j][i]); break;
                                            }
                                            
                                        }
                                    }
                                    if(isTierPricesDepends[structure][j])
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_prices_commodity = { "depends_on": [],
                                                                                     "values": {}     }; 
                                                                                     break;
                                            case 1: commodityJSON[j].tier_prices_drought = { "depends_on": [],
                                                                                     "values": {}     };
                                                                                     break;
                                            case 2: commodityJSON[j].tier_prices_waste = { "depends_on": [],
                                                                                     "values": {}     };
                                                                                     break;
                                        }
                                        
                                        for(var i = 0; i < tierPricesParameters[structure][j].length; ++i)
                                        {
                                            var temp = parameterParser(tierPricesParameters[structure][j][i])
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_prices_commodity.depends_on.push(temp); break;
                                                case 1: commodityJSON[j].tier_prices_drought.depends_on.push(temp); break;
                                                case 2: commodityJSON[j].tier_prices_waste.depends_on.push(temp); break;
                                            }
                                            
                                        }
                                        
                                        var tempComm = "{ ", number = 0; 
                                        for(value in commodityChargeCategories[structure][j])
                                        {
                                            var replacementStr = commodityChargeCategories[structure][j][value].replace(" Rate:", "");
                                            replacementStr = replacementStr.replace("Pressure ", ""); 
                                            replacementStr = replacementStr.replace("Lot Size ", ""); 
											replacementStr = replacementStr.replace('"', '');
                                            replacementStr = replacementStr.replace("Inside City", "inside_city"); 
											replacementStr = replacementStr.replace("Outside City", "outside_city");
                                            replacementStr = replacementStr.replace("Omni F2", "Omni_F2");
                    
                                            for(var i = 0; i < survey.month.length; ++i)
                                            {
                                                replacementStr = replacementStr.replace(survey.month[i], i + 1);
                                            }
                                            tempComm += ' "' + replacementStr.split(" ").join("|") + '": [ ';
                                            
                                            for(var k = 0; k < tierLevels[structure][j]; ++k)
                                            {
                                                if(k == tierLevels[structure][j] - 1)
                                                {
                                                    tempComm += commodityCharges[structure][j][number] + ' ]';
                                                }
                                                else
                                                {
                                                    tempComm += commodityCharges[structure][j][number] + ', ';
                                                }
                                                number++;
                                            }
                                            
                                            if(value == commodityChargeCategories[structure][j].length - 1)
                                                tempComm += ' }';
                                            else
                                                tempComm += ', '
                                        }
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_prices_commodity.values = JSON.parse(tempComm); break;
                                            case 1: commodityJSON[j].tier_prices_drought.values = JSON.parse(tempComm); break;
                                            case 2: commodityJSON[j].tier_prices_waste.values = JSON.parse(tempComm); break;
                                        }
                                        
                                    }
                                    else
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_prices_commodity = []; break;
                                            case 1: commodityJSON[j].tier_prices_drought = []; break;
                                            case 2: commodityJSON[j].tier_prices_waste = []; break;
                                        }
                                        
                                        for(var i = 0; i < tierLevels[structure][j]; ++i)
                                        {
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_prices_commodity.push(Number(commodityCharges[structure][j][i])); break;
                                                case 1: commodityJSON[j].tier_prices_drought.push(Number(commodityCharges[structure][j][i])); break;
                                                case 2: commodityJSON[j].tier_prices_waste.push(Number(commodityCharges[structure][j][i])); break;
                                            }
                                        }
                                    } break;
                                case 'Budget':
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j]  = {
                                                    "commodity_charge" : "Budget"
                                                }; break;
                                        case 1: commodityJSON[j]  = {
                                                    "variable_drought_surcharge" : "Budget"
                                                }; break;
                                        case 2: commodityJSON[j]  = {
                                                    "variable_wastewater_charge" : "Budget"
                                                }; break;
                                    }
                                    /*
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j].budget_billing_unit_commodity = billingUnits[structure][j]; break;
                                        case 1: commodityJSON[j].budget_billing_unit_drought = billingUnits[structure][j]; break;
                                        case 2: commodityJSON[j].budget_billing_unit_waste = billingUnits[structure][j]; break;
                                    }
                                    */
                                    switch(j)
                                    {
                                        case 0:  
                                            commodityJSON[j].gpcd_commodity = gpcd[structure][j];
                                            commodityJSON[j].indoor_commodity = indoor[structure][j];
                                            commodityJSON[j].outdoor_commodity = outdoor[structure][j];
                                            commodityJSON[j].budget_commodity = budget[structure][j];
                                            commodityJSON[j].landscape_factor_commodity = landscape_factor[structure][j];
                                            break;
                                        case 1: 
                                            commodityJSON[j].gpcd_drought = gpcd[structure][j];
                                            commodityJSON[j].indoor_drought = indoor[structure][j];
                                            commodityJSON[j].outdoor_drought = outdoor[structure][j];
                                            commodityJSON[j].budget_drought = budget[structure][j];
                                            commodityJSON[j].landscape_factor_drought = landscape_factor[structure][j];
                                            break;
                                        case 2: 
                                            commodityJSON[j].gpcd_waste = gpcd[structure][j];
                                            commodityJSON[j].indoor_waste = indoor[structure][j];
                                            commodityJSON[j].outdoor_waste = outdoor[structure][j];
                                            commodityJSON[j].budget_waste = budget[structure][j];
                                            commodityJSON[j].landscape_factor_waste = landscape_factor[structure][j];
                                            break;
                                    }
                                    
                                    
                                    if(isTierStartsDepends[structure][j])
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_starts_commodity = { "depends_on": [],
                                                                                               "values": {}     };
                                                                                               break;
                                            case 1: commodityJSON[j].tier_starts_drought = { "depends_on": [],
                                                                                             "values": {}     };
                                                                                             break;
                                            case 2: commodityJSON[j].tier_starts_waste = { "depends_on": [],
                                                                                           "values": {}     };
                                                                                           break;
                                        }
                                        for(var i = 0; i < tierStartsParameters[structure][j].length; ++i)
                                        {
                                            var temp = parameterParser(tierStartsParameters[structure][j][i])
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_starts_commodity.depends_on.push(temp); break;
                                                case 1: commodityJSON[j].tier_starts_drought.depends_on.push(temp); break;
                                                case 2: commodityJSON[j].tier_starts_waste.depends_on.push(temp); break;
                                            }
                                            
                                        }
                                        
                                        var tempComm = "{ ", number = 0; 
                                        for(value in tierStartsCategories[structure][j])
                                        {
                                            var  replacementStr = tierStartsCategories[structure][j][value].replace(" Level:", "");
                                            replacementStr = replacementStr.replace("Pressure ", ""); 
                                            replacementStr = replacementStr.replace("Lot Size ", ""); 
											replacementStr = replacementStr.replace('"', '');
                                            replacementStr = replacementStr.replace("Inside City", "inside_city"); 
											replacementStr = replacementStr.replace("Outside City", "outside_city");
                                            replacementStr = replacementStr.replace("Omni F2", "Omni_F2");
                    
                                            for(var i = 0; i < survey.month.length; ++i)
                                            {
                                                replacementStr = replacementStr.replace(survey.month[i], i + 1);
                                            }
                                            tempComm += ' "' + replacementStr.split(" ").join("|") + '": [ ';
                                            
                                            for(var k = 0; k < tierLevels[structure][j]; ++k)
                                            {
                                                if(k == tierLevels[structure] - 1)
                                                {
                                                    tempComm += '"' + tierStartsValues[structure][j][number] + '" ]';
                                                }
                                                else
                                                {
                                                    tempComm += '"' + tierStartsValues[structure][j][number] + '", ';
                                                }
                                                number++;
                                            }
                                            
                                            if(value == tierStartsCategories[structure][j].length - 1)
                                                tempComm += ' }';
                                            else
                                                tempComm += ', '
                                        }
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_starts_commodity.values = JSON.parse(tempComm); break;
                                            case 1: commodityJSON[j].tier_starts_drought.values = JSON.parse(tempComm); break;
                                            case 2: commodityJSON[j].tier_starts_waste.values = JSON.parse(tempComm); break;
                                        }
                                        
                                    }
                                    else
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_starts_commodity = []; break;
                                            case 1: commodityJSON[j].tier_starts_drought = []; break;
                                            case 2: commodityJSON[j].tier_starts_waste = []; break;
                                        }
                                        
                                        for(var i = 0; i < tierLevels[structure][j]; ++i)
                                        {
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_starts_commodity.push(tierStartsValues[structure][j][i]); break;
                                                case 1: commodityJSON[j].tier_starts_drought.push(tierStartsValues[structure][j][i]); break;
                                                case 2: commodityJSON[j].tier_starts_waste.push(tierStartsValues[structure][j][i]); break;
                                            }
                                            
                                        }
                                    }
                                    if(isTierPricesDepends[structure][j])
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_prices_commodity = { "depends_on": [],
                                                                                     "values": {}     }; 
                                                                                     break;
                                            case 1: commodityJSON[j].tier_prices_drought = { "depends_on": [],
                                                                                     "values": {}     };
                                                                                     break;
                                            case 2: commodityJSON[j].tier_prices_waste = { "depends_on": [],
                                                                                     "values": {}     };
                                                                                     break;
                                        }
                                        
                                        for(var i = 0; i < tierPricesParameters[structure][j].length; ++i)
                                        {
                                            var temp = parameterParser(tierPricesParameters[structure][j][i])
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_prices_commodity.depends_on.push(temp); break;
                                                case 1: commodityJSON[j].tier_prices_drought.depends_on.push(temp); break;
                                                case 2: commodityJSON[j].tier_prices_waste.depends_on.push(temp); break;
                                            }
                                            
                                        }
                                        
                                        var tempComm = "{ ", number = 0; 
                                        for(value in commodityChargeCategories[structure][j])
                                        {
                                            var replacementStr = commodityChargeCategories[structure][j][value].replace(" Rate:", "");
                                            replacementStr = replacementStr.replace("Pressure ", ""); 
                                            replacementStr = replacementStr.replace("Lot Size ", ""); 
											replacementStr = replacementStr.replace('"', '');
                                            replacementStr = replacementStr.replace("Inside City", "inside_city"); 
											replacementStr = replacementStr.replace("Outside City", "outside_city");
                                            replacementStr = replacementStr.replace("Omni F2", "Omni_F2");
                    
                                            for(var i = 0; i < survey.month.length; ++i)
                                            {
                                                replacementStr = replacementStr.replace(survey.month[i], i + 1);
                                            }
                                            tempComm += ' "' + replacementStr.split(" ").join("|") + '": [ ';
                                            
                                            for(var k = 0; k < tierLevels[structure][j]; ++k)
                                            {
                                                if(k == tierLevels[structure][j] - 1)
                                                {
                                                    tempComm += commodityCharges[structure][j][number] + ' ]';
                                                }
                                                else
                                                {
                                                    tempComm += commodityCharges[structure][j][number] + ', ';
                                                }
                                                number++;
                                            }
                                            
                                            if(value == commodityChargeCategories[structure][j].length - 1)
                                                tempComm += ' }';
                                            else
                                                tempComm += ', '
                                        }
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_prices_commodity.values = JSON.parse(tempComm); break;
                                            case 1: commodityJSON[j].tier_prices_drought.values = JSON.parse(tempComm); break;
                                            case 2: commodityJSON[j].tier_prices_waste.values = JSON.parse(tempComm); break;
                                        }
                                        
                                    }
                                    else
                                    {
                                        switch(j)
                                        {
                                            case 0: commodityJSON[j].tier_prices_commodity = []; break;
                                            case 1: commodityJSON[j].tier_prices_drought = []; break;
                                            case 2: commodityJSON[j].tier_prices_waste = []; break;
                                        }
                                        
                                        for(var i = 0; i < tierLevels[structure][j]; ++i)
                                        {
                                            switch(j)
                                            {
                                                case 0: commodityJSON[j].tier_prices_commodity.push(Number(commodityCharges[structure][j][i])); break;
                                                case 1: commodityJSON[j].tier_prices_drought.push(Number(commodityCharges[structure][j][i])); break;
                                                case 2: commodityJSON[j].tier_prices_waste.push(Number(commodityCharges[structure][j][i])); break;
                                            }
                                        }
                                    } break;
                            }
                        }
                        else
                        { 
                                    switch(j)
                                    {
                                        case 0: commodityJSON[j]  = {
                                                    "commodity_charge" : 0
                                                }; break;
                                        case 1: commodityJSON[j]  = {
                                                    "variable_drought_surcharge" : 0
                                                }; break;
                                        case 2: commodityJSON[j]  = {
                                                    "variable_wastewater_charge" : 0
                                                }; break;
                                    } 
                        };
                        }
                        switch(SelectedRateStructures[structure])
                        {
                            case "Single-Family Residential": tempStructure = { "RESIDENTIAL_SINGLE" : { "service_charge" : {} } };
                                                        tempStructure.RESIDENTIAL_SINGLE.service_charge = serviceJSON[0] ;
                                                        tempStructure.RESIDENTIAL_SINGLE = jQuery.extend({}, tempStructure.RESIDENTIAL_SINGLE, commodityJSON[0]); 
                                                        tempStructure.RESIDENTIAL_SINGLE.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.RESIDENTIAL_SINGLE = jQuery.extend({}, tempStructure.RESIDENTIAL_SINGLE, commodityJSON[1]);
                                                        tempStructure.RESIDENTIAL_SINGLE.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.RESIDENTIAL_SINGLE = jQuery.extend({}, tempStructure.RESIDENTIAL_SINGLE, commodityJSON[2]); 
                                                        tempStructure.RESIDENTIAL_SINGLE.bill = "service_charge+commodity_charge"; break;
                            case "Multi-Family Residential": tempStructure = { "RESIDENTIAL_MULTI" : { "service_charge" : {} } }; 
                                                        tempStructure.RESIDENTIAL_MULTI.service_charge = serviceJSON[0]; 
                                                        tempStructure.RESIDENTIAL_MULTI = jQuery.extend({}, tempStructure.RESIDENTIAL_MULTI, commodityJSON[0]); 
                                                        tempStructure.RESIDENTIAL_MULTI.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.RESIDENTIAL_MULTI = jQuery.extend({}, tempStructure.RESIDENTIAL_MULTI, commodityJSON[1]);
                                                        tempStructure.RESIDENTIAL_MULTI.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.RESIDENTIAL_MULTI = jQuery.extend({}, tempStructure.RESIDENTIAL_MULTI, commodityJSON[2]); 
                                                        tempStructure.RESIDENTIAL_MULTI.bill = "service_charge+commodity_charge"; break;
                            case "Irrigation": tempStructure = { "IRRIGATION" : { "service_charge" : {} } };
                                                        tempStructure.IRRIGATION.service_charge = serviceJSON[0]; 
                                                        tempStructure.IRRIGATION = jQuery.extend({}, tempStructure.IRRIGATION, commodityJSON[0]); 
                                                        tempStructure.IRRIGATION.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.IRRIGATION = jQuery.extend({}, tempStructure.IRRIGATION, commodityJSON[1]);
                                                        tempStructure.IRRIGATION.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.IRRIGATION = jQuery.extend({}, tempStructure.IRRIGATION, commodityJSON[2]); 
                                                        tempStructure.IRRIGATION.bill = "service_charge+commodity_charge"; break;
                            case "Commercial": tempStructure = { "COMMERCIAL" : { "service_charge" : {} } }; 
                                                        tempStructure.COMMERCIAL.service_charge = serviceJSON[0]; 
                                                        tempStructure.COMMERCIAL = jQuery.extend({}, tempStructure.COMMERCIAL, commodityJSON[0]); 
                                                        tempStructure.COMMERCIAL.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.COMMERCIAL = jQuery.extend({}, tempStructure.COMMERCIAL, commodityJSON[1]);
                                                        tempStructure.COMMERCIAL.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.COMMERCIAL = jQuery.extend({}, tempStructure.COMMERCIAL, commodityJSON[2]); 
                                                        tempStructure.COMMERCIAL.bill = "service_charge+commodity_charge"; break;
                            case "Industrial": tempStructure = { "INDUSTRIAL" : { "service_charge" : {} } };
                                                        tempStructure.INDUSTRIAL.service_charge = serviceJSON[0]; 
                                                        tempStructure.INDUSTRIAL = jQuery.extend({}, tempStructure.INDUSTRIAL, commodityJSON[0]); 
                                                        tempStructure.INDUSTRIAL.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.INDUSTRIAL = jQuery.extend({}, tempStructure.INDUSTRIAL, commodityJSON[1]);
                                                        tempStructure.INDUSTRIAL.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.INDUSTRIAL = jQuery.extend({}, tempStructure.INDUSTRIAL, commodityJSON[2]); 
                                                        tempStructure.INDUSTRIAL.bill = "service_charge+commodity_charge"; break;
                            case "Institutional": tempStructure = { "INSTITUTIONAL" : { "service_charge" : {} } };
                                                        tempStructure.INSTITUTIONAL.service_charge = serviceJSON[0]; 
                                                        tempStructure.INSTITUTIONAL = jQuery.extend({}, tempStructure.INSTITUTIONAL, commodityJSON[0]); 
                                                        tempStructure.INSTITUTIONAL.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.INSTITUTIONAL = jQuery.extend({}, tempStructure.INSTITUTIONAL, commodityJSON[1]);
                                                        tempStructure.INSTITUTIONAL.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.INSTITUTIONAL = jQuery.extend({}, tempStructure.INSTITUTIONAL, commodityJSON[2]); 
                                                        tempStructure.INSTITUTIONAL.bill = "service_charge+commodity_charge"; break;
                            case "Fire Service": tempStructure = { "FIRE_SERVICE" : { "service_charge" : {} } }; 
                                                        tempStructure.FIRE_SERVICE.service_charge = serviceJSON[0]; 
                                                        tempStructure.FIRE_SERVICE = jQuery.extend({}, tempStructure.FIRE_SERVICE, commodityJSON[0]); 
                                                        tempStructure.FIRE_SERVICE.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.FIRE_SERVICE = jQuery.extend({}, tempStructure.FIRE_SERVICE, commodityJSON[1]);
                                                        tempStructure.FIRE_SERVICE.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.FIRE_SERVICE = jQuery.extend({}, tempStructure.FIRE_SERVICE, commodityJSON[2]); 
                                                        tempStructure.FIRE_SERVICE.bill = "service_charge+commodity_charge"; break;
                            case "Raw Water": tempStructure = { "RAW" : { "service_charge" : {} } };
                                                        tempStructure.RAW.service_charge = serviceJSON[0]; 
                                                        tempStructure.RAW = jQuery.extend({}, tempStructure.RAW, commodityJSON[0]); 
                                                        tempStructure.RAW.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.RAW = jQuery.extend({}, tempStructure.RAW, commodityJSON[1]);
                                                        tempStructure.RAW.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.RAW = jQuery.extend({}, tempStructure.RAW, commodityJSON[2]); 
                                                        tempStructure.RAW.bill = "service_charge+commodity_charge"; break;
                            case "Potable": tempStructure = { "POTABLE" : { "service_charge" : {} } };
                                                        tempStructure.POTABLE.service_charge = serviceJSON[0]; 
                                                        tempStructure.POTABLE = jQuery.extend({}, tempStructure.POTABLE, commodityJSON[0]); 
                                                        tempStructure.POTABLE.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.POTABLE = jQuery.extend({}, tempStructure.POTABLE, commodityJSON[1]);
                                                        tempStructure.POTABLE.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.POTABLE = jQuery.extend({}, tempStructure.POTABLE, commodityJSON[2]); 
                                                        tempStructure.POTABLE.bill = "service_charge+commodity_charge"; break;
                            case "Recycled": tempStructure = { "RECYCLED" : { "service_charge" : {} } };
                                                        tempStructure.RECYCLED.service_charge = serviceJSON[0]; 
                                                        tempStructure.RECYCLED = jQuery.extend({}, tempStructure.RECYCLED, commodityJSON[0]); 
                                                        tempStructure.RECYCLED.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.RECYCLED = jQuery.extend({}, tempStructure.RECYCLED, commodityJSON[1]);
                                                        tempStructure.RECYCLED.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.RECYCLED = jQuery.extend({}, tempStructure.RECYCLED, commodityJSON[2]); 
                                                        tempStructure.RECYCLED.bill = "service_charge+commodity_charge"; break;                            
                            case "Non-Residential": tempStructure = { "NON_RESIDENTIAL" : { "service_charge" : {} } }; 
                                                        tempStructure.NON_RESIDENTIAL.service_charge = serviceJSON[0]; 
                                                        tempStructure.NON_RESIDENTIAL = jQuery.extend({}, tempStructure.NON_RESIDENTIAL, commodityJSON[0]); 
                                                        tempStructure.NON_RESIDENTIAL.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.NON_RESIDENTIAL = jQuery.extend({}, tempStructure.NON_RESIDENTIAL, commodityJSON[1]);
                                                        tempStructure.NON_RESIDENTIAL.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.NON_RESIDENTIAL = jQuery.extend({}, tempStructure.NON_RESIDENTIAL, commodityJSON[2]); 
                                                        tempStructure.NON_RESIDENTIAL.bill = "service_charge+commodity_charge"; break;
							case "Agriculture": tempStructure = { "AGRICULTURAL" : { "service_charge" : {} } }; 
                                                        tempStructure.AGRICULTURAL.service_charge = serviceJSON[0]; 
                                                        tempStructure.AGRICULTURAL = jQuery.extend({}, tempStructure.AGRICULTURAL, commodityJSON[0]); 
                                                        tempStructure.AGRICULTURAL.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.AGRICULTURAL = jQuery.extend({}, tempStructure.AGRICULTURAL, commodityJSON[1]);
                                                        tempStructure.AGRICULTURAL.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.AGRICULTURAL = jQuery.extend({}, tempStructure.AGRICULTURAL, commodityJSON[2]); 
                                                        tempStructure.AGRICULTURAL.bill = "service_charge+commodity_charge"; break;
                            case "Unmetered": tempStructure = { "UNMETERED" : { "service_charge" : {} } };
                                                        tempStructure.UNMETERED.service_charge = serviceJSON[0]; 
                                                        tempStructure.UNMETERED = jQuery.extend({}, tempStructure.UNMETERED, commodityJSON[0]); 
                                                        tempStructure.UNMETERED.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.UNMETERED = jQuery.extend({}, tempStructure.UNMETERED, commodityJSON[1]);
                                                        tempStructure.UNMETERED.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.UNMETERED = jQuery.extend({}, tempStructure.UNMETERED, commodityJSON[2]); 
                                                        tempStructure.UNMETERED.bill = "service_charge+commodity_charge"; break;
                            case "Governmental": tempStructure = { "GOVERNMENTAL" : { "service_charge" : {} } }; 
                                                        tempStructure.GOVERNMENTAL.service_charge = serviceJSON[0]; 
                                                        tempStructure.GOVERNMENTAL = jQuery.extend({}, tempStructure.GOVERNMENTAL, commodityJSON[0]); 
                                                        tempStructure.GOVERNMENTAL.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.GOVERNMENTAL = jQuery.extend({}, tempStructure.GOVERNMENTAL, commodityJSON[1]);
                                                        tempStructure.GOVERNMENTAL.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.GOVERNMENTAL = jQuery.extend({}, tempStructure.GOVERNMENTAL, commodityJSON[2]); 
                                                        tempStructure.GOVERNMENTAL.bill = "service_charge+commodity_charge"; break;
                            case "Interruptible": tempStructure = { "INTERRUPTIBLE" : { "service_charge" : {} } }; 
                                                        tempStructure.INTERRUPTIBLE.service_charge = serviceJSON[0]; 
                                                        tempStructure.INTERRUPTIBLE = jQuery.extend({}, tempStructure.INTERRUPTIBLE, commodityJSON[0]); 
                                                        tempStructure.INTERRUPTIBLE.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.INTERRUPTIBLE = jQuery.extend({}, tempStructure.INTERRUPTIBLE, commodityJSON[1]);
                                                        tempStructure.INTERRUPTIBLE.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.INTERRUPTIBLE = jQuery.extend({}, tempStructure.INTERRUPTIBLE, commodityJSON[2]); 
                                                        tempStructure.INTERRUPTIBLE.bill = "service_charge+commodity_charge"; break;
                            case "Docks Shipping": tempStructure = { "DOCKS_SHIPPING" : { "service_charge" : {} } }; 
                                                        tempStructure.DOCKS_SHIPPING.service_charge = serviceJSON[0]; 
                                                        tempStructure.DOCKS_SHIPPING = jQuery.extend({}, tempStructure.DOCKS_SHIPPING, commodityJSON[0]); 
                                                        tempStructure.DOCKS_SHIPPING.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.DOCKS_SHIPPING = jQuery.extend({}, tempStructure.DOCKS_SHIPPING, commodityJSON[1]);
                                                        tempStructure.DOCKS_SHIPPING.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.DOCKS_SHIPPING = jQuery.extend({}, tempStructure.DOCKS_SHIPPING, commodityJSON[2]); 
                                                        tempStructure.DOCKS_SHIPPING.bill = "service_charge+commodity_charge"; break;
                            case "Building Contractor": tempStructure = { "BUILDING_CONTRACTOR" : { "service_charge" : {} } }; 
                                                        tempStructure.BUILDING_CONTRACTOR.service_charge = serviceJSON[0]; 
                                                        tempStructure.BUILDING_CONTRACTOR = jQuery.extend({}, tempStructure.BUILDING_CONTRACTOR, commodityJSON[0]); 
                                                        tempStructure.BUILDING_CONTRACTOR.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.BUILDING_CONTRACTOR = jQuery.extend({}, tempStructure.BUILDING_CONTRACTOR, commodityJSON[1]);
                                                        tempStructure.BUILDING_CONTRACTOR.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.BUILDING_CONTRACTOR = jQuery.extend({}, tempStructure.BUILDING_CONTRACTOR, commodityJSON[2]); 
                                                        tempStructure.BUILDING_CONTRACTOR.bill = "service_charge+commodity_charge"; break;
                            case "Residential Construction": tempStructure = { "RESIDENTIAL_CONSTRUCTION" : { "service_charge" : {} } }; 
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION.service_charge = serviceJSON[0]; 
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION = jQuery.extend({}, tempStructure.RESIDENTIAL_CONSTRUCTION, commodityJSON[0]);
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION = jQuery.extend({}, tempStructure.RESIDENTIAL_CONSTRUCTION, commodityJSON[1]);
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION = jQuery.extend({}, tempStructure.RESIDENTIAL_CONSTRUCTION, commodityJSON[2]); 
                                                        tempStructure.RESIDENTIAL_CONSTRUCTION.bill = "service_charge+commodity_charge"; break;
                            case "Other": tempStructure = { "OTHER" : { "service_charge" : {} } }; 
                                                        tempStructure.OTHER.service_charge = serviceJSON[0]; 
                                                        tempStructure.OTHER = jQuery.extend({}, tempStructure.OTHER, commodityJSON[0]); 
                                                        tempStructure.OTHER.fixed_drought_surcharge = serviceJSON[1] ;
                                                        tempStructure.OTHER = jQuery.extend({}, tempStructure.OTHER, commodityJSON[1]);
                                                        tempStructure.OTHER.fixed_wastewater_charge = serviceJSON[2] ;
                                                        tempStructure.OTHER = jQuery.extend({}, tempStructure.OTHER, commodityJSON[2]); 
                                                        tempStructure.OTHER.bill = "service_charge+commodity_charge+fixed_wastewater_charge+variable_wastewater_charge"; break;
                        }
                        OWRSformat.rate_structure = jQuery.extend({}, OWRSformat.rate_structure, tempStructure);
                    }
                    
                    var YAML = jsyaml.safeDump(OWRSformat);
                    YAML = YAML.split('<QUOTE>').join('"');
                    YAML = YAML.split("'").join("");
                    
                    var cleared = document.getElementById("panel");
                    
                    
                    clear(cleared);
                    
                    var YAMLfile = document.createElement("pre");
                    YAMLfile.innerHTML = YAML;
                    cleared.appendChild(YAMLfile);
					
					surveyIsCompleted = true;
                    
                    /*
                    var submitForm = document.createElement("form");
                    submitForm.id = "survey";
                    submitForm.method = "POST";
                    submitForm.action = "/"
                    cleared.appendChild(submitForm);
                    
                    var TheEnd = document.createElement("input");
                    TheEnd.setAttribute("type", "hidden");
                    TheEnd.name = "YAML";
                    TheEnd.value = YAML;
                    submitForm.appendChild(TheEnd);
                    
                    var TheEnd = document.createElement("input");
                    TheEnd.setAttribute("type", "hidden");
                    TheEnd.name = "Utility";
                    TheEnd.value = UtilityName;
                    submitForm.appendChild(TheEnd);
                    
                    var TheEnd = document.createElement("input");
                    TheEnd.setAttribute("type", "hidden");
                    TheEnd.name = "Date";
                    TheEnd.value = EffectiveDate;
                    submitForm.appendChild(TheEnd);
                    
                    submitForm.submit();
                    */
                    
                }
                
                function QuestionTxt(question, number, Parent)
                {
                    Question = document.createElement("h5");
                    Question.innerHTML = question;
                    Question.setAttribute("id", "question" + number);
                    Parent.appendChild(Question);
                }
				
				function createSection(sectionText, name, headerSize, Parent)
				{
					section = document.createElement(headerSize);
                    section.innerHTML = sectionText;
                    section.setAttribute("id", name);
                    Parent.appendChild(section);
				}
				
				function dependsOnValueText(param)
				{
					console.log(param)
					switch(param)
					{
						case "Pressure Zone": return "<b>Select the values for Pressure Zone</b>. Here each pressure zone "+
								"is assumed to have a numeric identifier. If your pressure zones are named "+
								"in a different way, please assign a number to each and then proceed.";
						case "Lot Size Group": return "<b>Select the values for Lot Size Group</b>. Here each group "+
								"is assumed to have a numeric identifier. If your lot size groups are named "+
								"in a different way, please assign a number to each and then proceed.";
						case "City Limits": return "<b>Select the values for City Limits</b>. Different prices "+
								"can then be set depending on whether a customer is inside the city limits or outside.";
						default: return "<b>Select the values for " + param + "</b>";
					} 
				}
                
                function clear(parent)
                {
                    while(parent.firstChild)
                    {  parent.removeChild(parent.firstChild); }
                }
				
				window.onbeforeunload = function(){
					if(!surveyIsCompleted)
						return 'Are you sure you want to leave? Your responses will not be saved until the end.';
				};		
                
                MainPage();