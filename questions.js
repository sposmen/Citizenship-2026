const QUESTIONS = [
  // Chapter 1 - Rights and Responsibilities
  {
    q: "Who are regulated by laws in Canada?",
    a: ["Individuals", "Governments", "Both individuals and governments", "None of them"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Canada has an 800-year-old tradition of ordered liberty which dates back to the signing of:",
    a: ["Magna Carta", "Charter of Independence", "Bill of Rights", "There was no signing"],
    correct: 0,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Which of the following is NOT a source of law in Canada?",
    a: ["French Civil Code", "Laws passed by Parliament", "US federal law", "English common law"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "The Constitution of Canada was amended in which year?",
    a: ["1982", "1997", "1947", "1980"],
    correct: 0,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "How old is the tradition of ordered liberty that Canada contains?",
    a: ["1,000 years", "800 years", "700 years", "900 years"],
    correct: 1,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Habeas corpus — the right to challenge unlawful detention by the state — comes from which law?",
    a: ["German common law", "English common law", "French common law", "Italian common law"],
    correct: 1,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Under the oath of citizenship in Canada, Canadian citizens swear allegiance to:",
    a: ["The Prime Minister", "The Governor General", "The Sovereign", "The Premier"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "People willing to obtain Canadian citizenship must have adequate knowledge of French or English if they are between which ages?",
    a: ["12 to 75", "14 to 85", "18 to 54", "16 to 62"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Who is Canada's representative in each province?",
    a: ["The people", "The Sovereign", "The Governor General", "The armed forces"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "The Constitution of Canada was amended in 1982 to entrench which Canadian Charter?",
    a: ["Canadian Charter of Rights and Freedoms", "Canadian Charter of Crime and Punishment", "Canadian Charter of Citizens Responsibility", "Canadian Charter of National Allegiance"],
    correct: 0,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Mobility rights state that Canadians can:",
    a: ["Live and work anywhere they choose in Canada only", "Enter and leave the country freely only", "Neither of these", "Both live and work anywhere AND enter and leave the country freely"],
    correct: 3,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "The right to vote comes with a responsibility to vote in:",
    a: ["Federal elections only", "Provincial elections only", "Local elections only", "Federal, provincial/territorial and local elections"],
    correct: 3,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "According to the Canadian government, who is above the law?",
    a: ["The Queen", "The Prime Minister", "Nobody", "The Governor General"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Which of the following are responsibilities of Canadian citizens?",
    a: ["Recycling plastic, serving in armed forces, being loyal to the British Empire", "Must be fluent in English, voting in elections, part of any union", "Buying Canadian products, minding your own business, using less electricity", "Obeying the law, taking responsibility for oneself and one's family, serving on a jury"],
    correct: 3,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Taking care of the environment is the responsibility of:",
    a: ["Government", "The Monarch", "Every citizen", "None of the above"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "In Canada, serving on a jury is:",
    a: ["Compulsory", "Applauded but optional", "Not allowed", "Dangerous"],
    correct: 0,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Which of the following is prohibited in Canada?",
    a: ["Making multiple properties", "Having more than two children", "Female genital mutilation", "Service in armed forces"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "In Canada, when is forced marriage of women permitted?",
    a: ["When she turns 18", "When she becomes dependent", "Under all circumstances", "Under no circumstances"],
    correct: 3,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "In Canada, what is the status of men and women under the law?",
    a: ["They are not equal", "They are equal", "They are equal under some conditions", "They are not equal under some conditions"],
    correct: 1,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Spousal abuse, forced marriage, honour killings, and female genital mutilation are counted as:",
    a: ["A person's personal problems", "A crime in all circumstances", "A crime under some circumstances", "Issues the court doesn't deal with"],
    correct: 1,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "People who are unable to perform full military service in Canada:",
    a: ["Can perform part-time service", "Cannot apply", "May be abandoned by the government", "May lose their jobs"],
    correct: 0,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "The safety of Canada's north is ensured by:",
    a: ["RCMP", "The Navy", "The Canadian Rangers", "The Police Department"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "Serving in the regular Canadian Forces — Navy, Army, and Air Force — is:",
    a: ["Compulsory", "Non-existent", "A noble way to contribute to Canada", "Looked down upon"],
    correct: 2,
    chapter: "Rights & Responsibilities"
  },
  {
    q: "What are the military forces in Canada called?",
    a: ["Canadian Rangers", "Canadian Forces", "Canadian Army", "None of these"],
    correct: 1,
    chapter: "Rights & Responsibilities"
  },

  // Chapter 2 - Who We Are
  {
    q: "The founding peoples of Canada are:",
    a: ["Aboriginal only", "French only", "British only", "Aboriginal, French, and British"],
    correct: 3,
    chapter: "Who We Are"
  },
  {
    q: "Canada's institutions uphold a commitment expressed in the British North America Act 1867 about:",
    a: ["Peace, order, and good government", "Armed forces power", "Good agriculture", "Wide population"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "Which of the following is often referred to as the 'Great Dominion'?",
    a: ["Canada", "Australia", "South Korea", "Germany"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "Canada is the only constitutional monarchy in:",
    a: ["The world", "Europe", "North America", "Asia"],
    correct: 2,
    chapter: "Who We Are"
  },
  {
    q: "Territorial rights were first guaranteed through the Royal Proclamation of 1763 by:",
    a: ["King George II", "St. Patrick", "King George III", "The Acadians"],
    correct: 2,
    chapter: "Who We Are"
  },
  {
    q: "Most of the Métis people live in:",
    a: ["Prairie Provinces", "Northern Territories", "Ontario", "Quebec"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "Canadian Aboriginal peoples who are neither Inuit nor Métis are known as:",
    a: ["First Nations", "Second Nations", "Quebecers", "Ontarians"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "What does the word 'Inuit' mean in the Inuktitut language?",
    a: ["The people", "The farmers", "The conquerors", "The invaders"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "Until which decade did the federal government force Aboriginal students to assimilate into mainstream Canadian culture?",
    a: ["1970s", "1980s", "1990s", "2000s"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "The ancestors of Aboriginal peoples are believed to have migrated from:",
    a: ["Africa", "Asia", "Korea", "India"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "The Inuit live in small, scattered communities across the:",
    a: ["Arctic", "Prairies", "North", "South"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "In which year did Ottawa formally apologize for its treatment of Aboriginal students?",
    a: ["1978", "2008", "1988", "1958"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "How many distinct groups make up the Aboriginal peoples?",
    a: ["2", "3", "4", "5"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "The Métis are a distinct people of mixed Aboriginal and European ancestry who came from:",
    a: ["Both French and English-speaking backgrounds", "East Asia", "Greenland", "Newfoundland"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "What is considered Canada's greatest strength?",
    a: ["Freedom", "English and French languages", "Diversity", "Scientific inventions"],
    correct: 2,
    chapter: "Who We Are"
  },
  {
    q: "Today, approximately how many anglophones are there in Canada?",
    a: ["18 million", "20 million", "23 million", "24 million"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "What percentage of Aboriginal peoples are Inuit?",
    a: ["4%", "8%", "45%", "50%"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "The majority of francophones live in the province of:",
    a: ["New Brunswick", "Quebec", "Yukon", "Ontario"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "The only officially bilingual province in Canada is:",
    a: ["Quebec", "New Brunswick", "Prairie Province", "Montreal"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "During the war between Britain and France (1755–1763), the period when more than 2/3 of Acadians were deported is known as:",
    a: ["The Great Upheaval", "The Great Pullback", "The Great Deportation", "The Great Movement"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "When did the House of Commons recognize that the Québécois form a nation within a united Canada?",
    a: ["2000", "2002", "2004", "2006"],
    correct: 3,
    chapter: "Who We Are"
  },
  {
    q: "Today, approximately how many francophones speak French as their first language?",
    a: ["5 million", "7 million", "8 million", "10 million"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "Canada is often referred to as:",
    a: ["A land of immigrants", "The House of Culture", "The Cloud of Diversity", "None of these"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "Which non-official language is the second most spoken at home after English in two of Canada's biggest cities?",
    a: ["Chinese", "Japanese", "Hindi", "German"],
    correct: 0,
    chapter: "Who We Are"
  },
  {
    q: "Since the 1970s, immigrants to Canada are most likely to come from:",
    a: ["Africa", "Asia", "Korea", "Antarctica"],
    correct: 1,
    chapter: "Who We Are"
  },
  {
    q: "The great majority of Canadians identify themselves as:",
    a: ["Atheist", "Muslim", "Hindu", "Christian"],
    correct: 3,
    chapter: "Who We Are"
  },

  // Chapter 3 - Canada's History
  {
    q: "In 1759, who was the British commander who died leading his troops in the Battle of the Plains of Abraham?",
    a: ["Brigadier James Wolfe", "Marquis de Montcalm", "King Charles II", "Fort Garry"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "At the very beginning of Canadian history, a large number of Aboriginals died because of:",
    a: ["European diseases to which they lacked immunity", "Harsh climate", "War between Vikings and French", "None of these"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "When Europeans explored Canada, they found all regions occupied by native people they called:",
    a: ["Chinese", "Vikings", "Indians", "Greenlanders"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "Who were the first Europeans to visit Canada?",
    a: ["Vikings", "Indians", "French", "Germans"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "European exploration of Canada began in earnest in 1497 with the expedition of:",
    a: ["King Francis I of France", "John Cabot", "Count Frontenac", "Sir Guy Carleton"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "The first explorers called the native peoples 'Indians' because they thought they had reached the:",
    a: ["West Indies", "North Indies", "East Indies", "South Indies"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "Jacques Cartier heard captured guides speak the Iroquoian word 'Canada,' which means:",
    a: ["Home", "Land", "Village", "Canada"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "Since when did the name Canada begin to appear on maps of the world?",
    a: ["1650s", "1550s", "1750s", "1850s"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "The French Empire in North America reached from Hudson Bay south to the:",
    a: ["Gulf of Mexico", "USA", "Korea", "Boston"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "What was the major trade between the French and Aboriginal peoples in the 17th and 18th centuries?",
    a: ["Oil", "Fur", "Wheat", "Coal"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "The first European settlement north of Florida was established by French explorers in:",
    a: ["1607", "1604", "1650", "1670"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "The first European settlement north of Florida was established by:",
    a: ["Pierre de Monts only", "Jacques Cartier", "Samuel de Champlain only", "Pierre de Monts and Samuel de Champlain"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "In 1670, who granted the Hudson's Bay Company exclusive trading rights?",
    a: ["King Charles I", "King Charles II", "Queen Elizabeth II", "Queen Victoria"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "In which battle did the British defeat the French at Quebec City, ending France's Empire in America?",
    a: ["Battle of the Plains of Abraham", "Battle of James Bay", "Boer War", "First World War"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Following the Battle of the Plains of Abraham, the British renamed the colony as:",
    a: ["Ontario", "Prairie Province", "Province of Quebec", "New Brunswick"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "The Quebec Act of 1774 restored the system of law based on:",
    a: ["French civil law only", "British criminal law only", "Both French civil law AND British criminal law", "Equality law"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "What benefits did the Quebec Act of 1774 give to Catholic people?",
    a: ["Religious freedom only", "The ability to hold public offices only", "Neither of these", "Both religious freedom AND the ability to hold public offices"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "More than 40,000 people loyal to the Crown who fled the American Revolution and settled in Nova Scotia and Quebec were called:",
    a: ["Traitors", "Loyalists", "Independents", "Enemies"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "In 1776, the 13 British colonies to the south of Quebec declared independence and formed:",
    a: ["The United States", "South America", "England", "An Independent Territory"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "The Constitutional Act of 1791 divided the province of Quebec into:",
    a: ["Upper Canada and Lower Canada", "East Canada and West Canada", "French Canada and British Canada", "Northern Canada and Southern Canada"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "In which part of Canada was the first representative assembly elected in 1758?",
    a: ["Prince Edward Island", "New Brunswick", "Nova Scotia", "Newfoundland"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "The name Canada became official in which year?",
    a: ["1791", "1781", "1771", "1761"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Who was the founder of the city of York (now Toronto)?",
    a: ["Governor John Graves Simcoe", "Maryanne Shadd Cary", "Laura Secord", "HMS Shannon"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Which was the first province to move toward abolition of slavery in 1793?",
    a: ["Lower Canada (now Quebec)", "Upper Canada (now Ontario)", "Newfoundland", "United States"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "When was slavery totally abolished throughout the British Empire?",
    a: ["1700", "1793", "1807", "1833"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "Thousands of slaves escaped from the United States and settled in Canada via:",
    a: ["A pipeline", "The Underground Railroad", "Sewage tunnels", "Tunnels"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "In which year did the Montreal Stock Exchange open?",
    a: ["1834", "1832", "1877", "1807"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "What was the purpose of the War of 1812?",
    a: ["To conquer the USA", "For Canada to remain independent of the USA", "Political issues", "Natural resources"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "Where did the Americans burn the government house and Parliament buildings in 1813?",
    a: ["New Brunswick", "Ontario", "Quebec", "York (now Toronto)"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "Which nation helped Canada in the War of 1812 against America?",
    a: ["Britain", "Germany", "Japan", "India"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Lord Durham recommended that Upper and Lower Canada be merged and given:",
    a: ["Responsible government", "Separate governments", "Natural resources", "Rebellion forces"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Armed rebellions occurred in the area outside Montreal and in Toronto during:",
    a: ["1807–1808", "1817–1818", "1837–1838", "1877–1878"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "Who became the first head of a responsible government in Canada?",
    a: ["Sir Louis-Hippolyte LaFontaine", "Sir George Cartier", "Sir Pascal Taché", "Lieutenant James FitzGibbon"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "The first British North American colony to attain full responsible government in 1847–1848 was:",
    a: ["Newfoundland", "Nova Scotia", "Greenland", "Vancouver"],
    correct: 1,
    chapter: "Canada's History"
  },

  // Confederation
  {
    q: "Ontario, Quebec, New Brunswick, and Nova Scotia formed a new country called:",
    a: ["Dominion of Canada", "Florida", "Germany", "None of these"],
    correct: 0,
    chapter: "Confederation"
  },
  {
    q: "Every year, which day is officially celebrated as Canada Day?",
    a: ["June 1st", "July 1st", "August 1st", "September 1st"],
    correct: 1,
    chapter: "Confederation"
  },
  {
    q: "When did Nunavut become part of the Dominion of Canada?",
    a: ["1995", "1996", "1998", "1999"],
    correct: 3,
    chapter: "Confederation"
  },
  {
    q: "Representatives who worked from 1864 to 1867 to establish Canada are known as:",
    a: ["Fathers of Canada", "Fathers of Confederation", "Fathers of the Dominion", "None of these"],
    correct: 1,
    chapter: "Confederation"
  },
  {
    q: "The British Parliament passed the British North America Act in which year?",
    a: ["1867", "1877", "1857", "1847"],
    correct: 0,
    chapter: "Confederation"
  },
  {
    q: "Fathers of Confederation created which levels of government?",
    a: ["Federal only", "Provincial only", "Both federal and provincial", "None"],
    correct: 2,
    chapter: "Confederation"
  },
  {
    q: "Who was Canada's first Prime Minister?",
    a: ["Sir Étienne Cartier", "Sir John Alexander Macdonald", "Sir Sam Steele", "Fort Garry"],
    correct: 1,
    chapter: "Confederation"
  },
  {
    q: "Parliament has recognized January 11th as:",
    a: ["Dominion Day", "Independence Day", "Sir John Alexander Macdonald Day", "Canada Day"],
    correct: 2,
    chapter: "Confederation"
  },
  {
    q: "Whose portrait is on the $10 bill?",
    a: ["Sir John Alexander Macdonald", "Sir Étienne Cartier", "Sir Sam Steele", "The Beaver"],
    correct: 0,
    chapter: "Confederation"
  },
  {
    q: "Sir Wilfrid Laurier's portrait is on which bill?",
    a: ["$5 bill", "$10 bill", "$20 bill", "$50 bill"],
    correct: 0,
    chapter: "Confederation"
  },

  // Challenging the West
  {
    q: "When did Canada take over the vast Northwest region from the Hudson's Bay Company?",
    a: ["1879", "1869", "1859", "1849"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "When did Prime Minister Macdonald establish the Northwest Mounted Police (NWMP)?",
    a: ["1873", "1893", "1883", "1882"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Louis Riel is seen by many as a hero, known as:",
    a: ["A defender of Métis rights only", "Father of Manitoba only", "Both a defender of Métis rights and father of Manitoba", "Father of Confederation"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "Today, the Royal Canadian Mounted Police (RCMP) is Canada's:",
    a: ["Municipal Force", "National Police Force", "International Police Force", "Armed Force"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "In 1871, British Columbia joined Canada after Ottawa promised to build:",
    a: ["A navy", "A railway to the West Coast", "A highway", "A canal"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "The government of Canada apologized in which year for its discriminatory policy (including head tax) against Chinese immigrants?",
    a: ["2008", "2006", "2004", "2002"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "Sir Wilfrid Laurier became the first French Canadian Prime Minister since Confederation and encouraged immigration to the West. How many immigrants total (British and American) were welcomed during the economic boom?",
    a: ["1 million", "2 million", "3 million", "4 million"],
    correct: 1,
    chapter: "Canada's History"
  },

  // World Wars
  {
    q: "The Canadian Corps captured Vimy Ridge in which month and year?",
    a: ["December 1917", "April 1917", "January 1920", "April 1920"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "Over 7,000 Canadians volunteered to fight in the South African War (1899–1902), also known as the:",
    a: ["First World War", "Vimy War", "Boer War", "Battle of the Plains of Abraham"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "How many soldiers did Canada lose in the First World War?",
    a: ["30,000", "40,000", "50,000", "60,000"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "How many Canadians served in the First World War out of an 8 million population?",
    a: ["400,000", "500,000", "600,000", "700,000"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "Who was the first woman to practice medicine in Canada and founder of the women's suffrage movement?",
    a: ["Sir Robert Borden", "Agnes Macphail", "Dr. Emily Stowe", "Thérèse Casgrain"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "In which year were most female Canadian citizens aged 21 and over granted the right to vote in federal elections?",
    a: ["1971", "1918", "1920", "1947"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "In 1921, the first woman MP in Canada was:",
    a: ["Agnes Macphail", "Dr. Emily Stowe", "Queen Elizabeth II", "None of these"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "When were women finally granted the right to vote in provincial elections in Quebec?",
    a: ["1950", "1940", "1840", "1850"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "Which Canadian province was the first to give women the right to vote in elections (in 1916)?",
    a: ["Manitoba", "New Brunswick", "British Columbia", "Quebec"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "Canada along with other former British Empire countries is part of which organization?",
    a: ["The Commonwealth of Nations", "The Colonial Society", "The British Protectorate", "The UN"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "The poem 'In Flanders Fields,' often recited on Remembrance Day, was composed by:",
    a: ["Fort Garry", "Sir John Alexander Macdonald", "Colonel John McCrae", "Phil Edwards"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "What is the significance of the poppy on Remembrance Day?",
    a: ["To remember the Queen", "To celebrate Confederation", "To remember political leaders who have died", "To remember the sacrifices of Canadians who have served or died in wars"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "On which date do Canadians observe Remembrance Day?",
    a: ["October 12th", "December 13th", "November 11th", "August 14th"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "When was the Bank of Canada established?",
    a: ["1935", "1936", "1933", "1934"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "The D-Day invasion was the epic invasion of Normandy in Northern France on:",
    a: ["June 6th, 1944", "July 4th, 1944", "June 6th, 1942", "May 8th, 1945"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "In the D-Day invasion, Canadian troops stormed and captured:",
    a: ["Boston", "Juno Beach", "Newfoundland", "Hudson's Bay"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "Approximately what fraction of Allied troops on D-Day were Canadian?",
    a: ["1 in 10 (10%)", "1 in 5 (20%)", "1 in 3 (33%)", "1 in 4 (25%)"],
    correct: 0,
    chapter: "Canada's History"
  },
  {
    q: "How many Canadian soldiers lost their lives serving in the Second World War?",
    a: ["54,000", "34,000", "44,000", "64,000"],
    correct: 2,
    chapter: "Canada's History"
  },
  {
    q: "At the end of the Second World War, Canada had the third largest navy and:",
    a: ["The largest air force", "The second largest air force", "The third largest air force", "The fourth largest air force"],
    correct: 3,
    chapter: "Canada's History"
  },
  {
    q: "The Royal Canadian Navy saw its finest hour protecting convoys against German submarines in the:",
    a: ["Battle of the Pacific", "Battle of the Atlantic", "Battle of the South", "Battle of the North"],
    correct: 1,
    chapter: "Canada's History"
  },
  {
    q: "When did the Second World War begin?",
    a: ["1940", "1941", "1939", "1938"],
    correct: 2,
    chapter: "Canada's History"
  },

  // Chapter 4 - Modern Canada
  {
    q: "The Canada and Quebec Pension Plan was introduced in which year?",
    a: ["1915", "1935", "1965", "1995"],
    correct: 2,
    chapter: "Modern Canada"
  },
  {
    q: "What began Canada's modern energy industry?",
    a: ["Discovery of oil in Alberta in 1947", "End of the Second World War", "Freedom of Canada", "United States aid"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "The federal government unemployment insurance was introduced in Canada in:",
    a: ["1940", "1960", "1980", "1990"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "How many soldiers died in the Korean War?",
    a: ["300", "400", "500", "600"],
    correct: 2,
    chapter: "Modern Canada"
  },
  {
    q: "Canada joined with other democratic countries of the West to form:",
    a: ["North Atlantic Treaty Organization (NATO)", "North Pacific Treaty Organization", "South Atlantic Treaty Organization", "South Pacific Treaty Organization"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "Canadian troops fought as part of United Nations forces defending South Korea during:",
    a: ["1950 to 1953", "1940 to 1943", "1960 to 1963", "1930 to 1933"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "The last referendum on Quebec sovereignty was defeated in:",
    a: ["1980", "1985", "1990", "1995"],
    correct: 3,
    chapter: "Modern Canada"
  },
  {
    q: "What was the outcome of the Official Languages Act of 1969?",
    a: ["Non-official languages gained rights", "Guaranteed French and English services in the federal government", "Total ban on non-official languages", "Japanese and Hindi gained equal value"],
    correct: 1,
    chapter: "Modern Canada"
  },
  {
    q: "Quebec experienced an era of rapid change in the 1960s known as the:",
    a: ["Slow Revolution", "Quiet Revolution", "Tremendous Revolution", "Rapid Revolution"],
    correct: 1,
    chapter: "Modern Canada"
  },
  {
    q: "In which year did Japanese Canadians gain the right to vote?",
    a: ["1950", "1945", "1948", "1940"],
    correct: 2,
    chapter: "Modern Canada"
  },
  {
    q: "Aboriginal people were granted the vote in:",
    a: ["1970", "1960", "1950", "1940"],
    correct: 1,
    chapter: "Modern Canada"
  },
  {
    q: "Canada welcomed approximately 37,000 refugees who escaped Soviet tyranny in 1956 from:",
    a: ["Hungary", "Ukraine", "Germany", "Greenland"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "In 1976, Canada welcomed over 50,000 refugees from:",
    a: ["Ethiopia", "Greenland", "Africa", "Vietnam"],
    correct: 3,
    chapter: "Modern Canada"
  },
  {
    q: "Who invented basketball?",
    a: ["James Naismith", "Mark Tewksbury", "Paul Henderson", "Donovan Bailey"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "Which is Canada's best known contribution to visual arts?",
    a: ["The Group of 11", "The Group of Seven", "The Group of Eight", "The Group of Nine"],
    correct: 1,
    chapter: "Modern Canada"
  },
  {
    q: "Who invented the Canadarm (robotic arm used in outer space)?",
    a: ["Alexander Graham Bell", "Matthew Evans", "Mike Lazaridis", "SPAR Aerospace"],
    correct: 3,
    chapter: "Modern Canada"
  },
  {
    q: "Who invented the worldwide system of standard time zones?",
    a: ["Alexander Graham Bell", "Matthew Evans", "Mike Lazaridis", "Sir Sandford Fleming"],
    correct: 3,
    chapter: "Modern Canada"
  },
  {
    q: "Who discovered insulin to treat diabetes?",
    a: ["Sir Frederick Banting", "Dr. John A. Hopps", "Alexander Graham Bell", "Sir Sandford Fleming"],
    correct: 0,
    chapter: "Modern Canada"
  },
  {
    q: "Who invented the first cardiac pacemaker?",
    a: ["Dr. Wilfred Penfield", "Dr. John A. Hopps", "Alexander Graham Bell", "Sir Sandford Fleming"],
    correct: 1,
    chapter: "Modern Canada"
  },
  {
    q: "Which of the following is NOT a Canadian invention?",
    a: ["Insulin", "Canadarm", "Electric light bulb", "Blackberry"],
    correct: 2,
    chapter: "Modern Canada"
  },
  {
    q: "Wayne Gretzky played for which team between 1979 and 1988?",
    a: ["Montreal Canadiens", "Edmonton Oilers", "Ottawa Senators", "Toronto Maple Leafs"],
    correct: 1,
    chapter: "Modern Canada"
  },
  {
    q: "In 1980, Terry Fox began a cross-country run called the 'Marathon of Hope' to raise money for:",
    a: ["Hunger relief", "Cancer research", "Veterans' support", "Children's hospitals"],
    correct: 1,
    chapter: "Modern Canada"
  },

  // Chapter 5 - How Canadians Govern Themselves
  {
    q: "The federal government takes responsibility for:",
    a: ["Agriculture", "National and international concerns", "Civil rights", "Immigration"],
    correct: 1,
    chapter: "How Canada is Governed"
  },
  {
    q: "Which level of government is responsible for health care?",
    a: ["Provincial government", "Federal government", "Legislative assemblies", "The Sovereign"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "To be granted the right to vote, a person must be at least:",
    a: ["16 years old", "17 years old", "18 years old", "19 years old"],
    correct: 2,
    chapter: "How Canada is Governed"
  },
  {
    q: "Every province is governed by its own elected:",
    a: ["Arbitrary law", "Federal government", "Legislative assembly", "Sovereign"],
    correct: 2,
    chapter: "How Canada is Governed"
  },
  {
    q: "Which act defines the responsibilities of the federal and provincial governments?",
    a: ["British North America Act / Constitution Act 1867", "Constitutional Act 1997", "Bill of Rights Act", "Federal Powers Act"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "The federal government sits in:",
    a: ["Montreal", "Quebec City", "Toronto", "Ottawa"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "Which of the following are key facts about Canada's system of government?",
    a: ["It is a federal state only", "It has a parliamentary democracy only", "It is a constitutional monarchy only", "All of the above — federal state, parliamentary democracy, and constitutional monarchy"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "Who grants Royal Assent to a bill on behalf of the Sovereign?",
    a: ["Governor General", "Prime Minister", "Parliament members", "Senators"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "Which part of Parliament has members appointed by the Governor General and who serve until age 75?",
    a: ["The House of Commons", "The House of Lords", "The Governor's House", "The Senate"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "How are Members of Parliament selected?",
    a: ["Appointed by the United Nations", "Appointed by the Sovereign", "Appointed by landowners and police chiefs", "Elected by the voters in their local constituencies"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "Which of the following are the three parts of Parliament?",
    a: ["Sovereign only", "Senate only", "House of Commons only", "Sovereign, Senate, and House of Commons"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "How many times must a bill be read in the House of Commons before it becomes law?",
    a: ["Once", "Twice", "Three times", "There is no requirement to read the bill"],
    correct: 2,
    chapter: "How Canada is Governed"
  },
  {
    q: "To become law in Canada, a bill must:",
    a: ["Be passed by the House of Commons only", "Receive Royal Assent only", "Be passed by the Senate only", "Be passed by both chambers AND receive Royal Assent"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "Who represents the Sovereign in the provincial legislature?",
    a: ["Lieutenant Governors", "Prime Minister", "Members of Parliament", "Members of the House of Commons"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "In the federal government, who selects cabinet ministers and is responsible for operations and policy?",
    a: ["Prime Minister", "Governor General", "Sovereign", "Senators"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "A debate in Parliament to make something a law is generally called a:",
    a: ["Proposal", "Inbox", "Theory", "Bill"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "Who is the head of government in Canada?",
    a: ["Prime Minister", "Governor General", "Sovereign", "None of these"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "Who is the head of state in Canada?",
    a: ["Prime Minister", "Governor General", "Sovereign (King or Queen)", "None of these"],
    correct: 2,
    chapter: "How Canada is Governed"
  },
  {
    q: "The Governor General in Canada is appointed by:",
    a: ["The Sovereign on the advice of the Prime Minister", "The cabinet minister on the advice of the Sovereign", "Canadian citizens", "The House of Commons"],
    correct: 0,
    chapter: "How Canada is Governed"
  },
  {
    q: "As head of the Commonwealth, the Sovereign links Canada to how many other nations?",
    a: ["10", "23", "46", "53"],
    correct: 3,
    chapter: "How Canada is Governed"
  },
  {
    q: "The Governor General is appointed for a term of approximately:",
    a: ["One year", "5 years", "10 years", "15 years"],
    correct: 1,
    chapter: "How Canada is Governed"
  },
  {
    q: "Who represents the Sovereign in each of the 10 provinces?",
    a: ["Governor General", "Prime Minister", "Lieutenant Governor", "Members of Parliament"],
    correct: 2,
    chapter: "How Canada is Governed"
  },
  {
    q: "In each province, the role similar to that of the Prime Minister is held by the:",
    a: ["Governor General", "Premier", "Senate member", "None of these"],
    correct: 1,
    chapter: "How Canada is Governed"
  },

  // Chapter 6 - Federal Elections
  {
    q: "How many members of the House of Commons are elected?",
    a: ["100", "200", "207", "338"],
    correct: 3,
    chapter: "Federal Elections"
  },
  {
    q: "In a federal election, Canadians vote for:",
    a: ["Senate members", "The Prime Minister", "Governors", "Members of the House of Commons"],
    correct: 3,
    chapter: "Federal Elections"
  },
  {
    q: "An electoral district is a geographical area represented by a:",
    a: ["Member of Parliament", "Governor", "Prime Minister", "None of these"],
    correct: 0,
    chapter: "Federal Elections"
  },
  {
    q: "Canadians who are eligible to run in a federal election must be at least:",
    a: ["20 years old", "19 years old", "18 years old", "17 years old"],
    correct: 2,
    chapter: "Federal Elections"
  },
  {
    q: "Federal elections must be held on:",
    a: ["The first Monday of October every 3 years", "The 2nd Monday of August every 4 years", "The third Monday of October every 4 years", "The 4th Monday of September every 5 years"],
    correct: 2,
    chapter: "Federal Elections"
  },
  {
    q: "After an election, the Governor General will ask which party to form the government?",
    a: ["The party with fewer seats", "The party with the most seats", "Randomly chosen", "The party the Queen suggested"],
    correct: 1,
    chapter: "Federal Elections"
  },
  {
    q: "There are three major political parties currently represented in the House of Commons. They are:",
    a: ["Conservative, Democrats, and Workers", "Conservative, New Democratic, and Liberal", "Conservative, Officers, and Feminist", "Liberal, Workers, and Reform"],
    correct: 1,
    chapter: "Federal Elections"
  },
  {
    q: "If the party in power holds at least half of the seats in the House of Commons, it is called a:",
    a: ["Minority government", "Majority government", "Neutral government", "None of these"],
    correct: 1,
    chapter: "Federal Elections"
  },
  {
    q: "The Prime Minister and cabinet ministers together are called:",
    a: ["The Senate", "The Cabinet", "The Ruler", "The Table"],
    correct: 1,
    chapter: "Federal Elections"
  },
  {
    q: "What should you mark next to your candidate's name on the ballot?",
    a: ["O", "Y", "X", "An exclamation mark"],
    correct: 2,
    chapter: "Federal Elections"
  },
  {
    q: "What confirms that your name is on the voters' list and states when and where you vote?",
    a: ["An email from government officials", "A phone call", "Voter information card", "Social media"],
    correct: 2,
    chapter: "Federal Elections"
  },
  {
    q: "Which of the following is a responsibility of the federal government?",
    a: ["National defense", "Education", "Social and community health", "Agriculture"],
    correct: 0,
    chapter: "Federal Elections"
  },
  {
    q: "What are laws passed by municipal governments called?",
    a: ["National laws", "International laws", "Bylaws", "Local laws"],
    correct: 2,
    chapter: "Federal Elections"
  },
  {
    q: "The municipal council usually includes counselors and a:",
    a: ["Mayor", "Prime Minister", "Governor General", "Member of Parliament"],
    correct: 0,
    chapter: "Federal Elections"
  },

  // Canadian Symbols
  {
    q: "The Crown has been a symbol of the state in Canada for over:",
    a: ["300 years", "400 years", "450 years", "600 years"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "Canada has been a constitutional monarchy in its own right since Confederation in 1867, during whose reign?",
    a: ["Queen Elizabeth II", "Queen Victoria", "Queen Elizabeth I", "King Charles II"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "The red-white pattern of the Canadian flag is derived from the flag of:",
    a: ["Royal Financial College, Kingston", "Royal Nursing College, Toronto", "Royal Military College, Kingston", "Royal Medical Campaign"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "What are the national colours of Canada (adopted in 1921)?",
    a: ["Blue and red", "White and purple", "Red and white", "Red and black"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "The current Canadian flag was raised for the first time in:",
    a: ["1965", "1955", "1950", "1930"],
    correct: 0,
    chapter: "Canadian Symbols"
  },
  {
    q: "Maple leaves have been a symbol since the 1850s and were first adopted by French Canadians in the:",
    a: ["1400s", "1500s", "1600s", "1700s"],
    correct: 3,
    chapter: "Canadian Symbols"
  },
  {
    q: "The fleur-de-lys is a symbol meaning what in French?",
    a: ["Maple leaf", "Lily flower", "Beaver", "Crown"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "When did Quebec adopt its own flag based on the cross and the fleur-de-lys?",
    a: ["1948", "1950", "1958", "1960"],
    correct: 0,
    chapter: "Canadian Symbols"
  },
  {
    q: "Canada's national motto 'A Mari Usque Ad Mare' means:",
    a: ["From river to river", "From region to region", "From sea to sea", "From country to country"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "Canada adopted its official coat of arms and national motto as an expression of national pride:",
    a: ["After the First World War", "After the Second World War", "After the Third World War", "After the Boer War"],
    correct: 0,
    chapter: "Canadian Symbols"
  },
  {
    q: "The Peace Tower was completed in which year?",
    a: ["1920", "1927", "1930", "1937"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "The Peace Tower was built in memory of:",
    a: ["The Battle of the Plains of Abraham", "The Second World War", "The First World War", "The Boer War"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "The only original part remaining in the Canadian Parliament building is the:",
    a: ["Entrance", "Central lounge", "Library", "Basement"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "Ice hockey was developed in Canada in the:",
    a: ["1700s", "1800s", "1900s", "2000s"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "Hockey is Canada's most popular spectator sport and is the national:",
    a: ["Summer sport", "Year-round sport", "Winter sport", "Olympic sport"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "The second most popular sport in Canada is:",
    a: ["Basketball", "Football (Canadian)", "Cricket", "Lacrosse"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "Lacrosse, an ancient sport first played by Aboriginals, is Canada's official:",
    a: ["Winter sport", "Year-round sport", "Summer sport", "Olympic sport"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "Which sport has the most registered players of any game in Canada?",
    a: ["Cricket", "Golf", "Basketball", "Soccer"],
    correct: 3,
    chapter: "Canadian Symbols"
  },
  {
    q: "The National Hockey League plays for the Championship Stanley Cup, donated by:",
    a: ["Adrienne Clarkson", "Lord Stanley", "Fort Garry", "Sir John A. Macdonald"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "Curling is an ice game introduced by:",
    a: ["French pioneers", "English pioneers", "Scottish pioneers", "German pioneers"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "The beaver can be seen on the:",
    a: ["10-cent coin", "25-cent coin", "5-cent coin", "1-dollar coin"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "'O Canada' was proclaimed as the national anthem in:",
    a: ["1960", "1970", "1980", "1990"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "Where was 'O Canada' first sung?",
    a: ["Ontario", "Newfoundland", "Quebec City", "Vancouver"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "The royal anthem of Canada is:",
    a: ["God Bless the Queen", "God Save the King/Queen", "God Defend the Queen", "God Protect the Queen"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "Parliament passed the Official Languages Act in:",
    a: ["1959", "1969", "1979", "1989"],
    correct: 1,
    chapter: "Canadian Symbols"
  },
  {
    q: "Canada started its own honour system with the Order of Canada in:",
    a: ["1937", "1987", "1967", "1997"],
    correct: 2,
    chapter: "Canadian Symbols"
  },
  {
    q: "The Victoria Cross is the highest honour available to Canadians and is awarded for:",
    a: ["Scientific research", "Conspicuous bravery", "Civil service", "Military service"],
    correct: 1,
    chapter: "Canadian Symbols"
  },

  // National Holidays
  {
    q: "Vimy Day (Vimy Ridge Day) is celebrated on:",
    a: ["April 9th", "May 29th", "June 30th", "March 30th"],
    correct: 0,
    chapter: "Holidays & Economy"
  },
  {
    q: "Boxing Day is celebrated on:",
    a: ["November 11th", "November 20th", "December 25th", "December 26th"],
    correct: 3,
    chapter: "Holidays & Economy"
  },
  {
    q: "Labour Day is celebrated on:",
    a: ["2nd Monday of October", "1st Monday of September", "Third Tuesday of December", "1st Friday of November"],
    correct: 1,
    chapter: "Holidays & Economy"
  },
  {
    q: "Remembrance Day is celebrated on:",
    a: ["November 11th", "November 20th", "December 25th", "December 26th"],
    correct: 0,
    chapter: "Holidays & Economy"
  },

  // Economy
  {
    q: "Today, Canada has one of the world's largest economies and is part of:",
    a: ["Top 3", "Top 5", "Top 8", "Top 10 (G8)"],
    correct: 3,
    chapter: "Holidays & Economy"
  },
  {
    q: "When did Canada enact free trade with the United States?",
    a: ["1968", "1988", "1998", "2018"],
    correct: 1,
    chapter: "Holidays & Economy"
  },
  {
    q: "Mexico became a partner in the broader North American Free Trade Agreement (NAFTA) in:",
    a: ["1988", "1990", "1994", "2000"],
    correct: 2,
    chapter: "Holidays & Economy"
  },
  {
    q: "What proportion of Canadian workers are in service industries?",
    a: ["25%", "50%", "More than 75%", "85%"],
    correct: 2,
    chapter: "Holidays & Economy"
  },
  {
    q: "What proportion of Canada's exports are destined for the USA?",
    a: ["A quarter", "Three-quarters (75%)", "Half", "Less than a quarter"],
    correct: 1,
    chapter: "Holidays & Economy"
  },

  // Regions
  {
    q: "Canada has how many distinct regions?",
    a: ["2", "3", "4", "5"],
    correct: 3,
    chapter: "Regions of Canada"
  },
  {
    q: "Canada is the _____ largest country in the world:",
    a: ["First", "Second", "Third", "Fourth"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Three oceans line Canada's frontiers. Which ocean is to the west?",
    a: ["Pacific", "Atlantic", "Arctic", "None of these"],
    correct: 0,
    chapter: "Regions of Canada"
  },
  {
    q: "Ottawa was chosen as the capital of Canada in 1857 by:",
    a: ["Queen Elizabeth I", "Queen Elizabeth II", "Queen Victoria", "King Charles II"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Canada has how many provinces?",
    a: ["5", "10", "15", "20"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Canada has how many territories?",
    a: ["2", "3", "4", "5"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Canada's population is approximately:",
    a: ["20 million", "24 million", "30 million", "34 million"],
    correct: 3,
    chapter: "Regions of Canada"
  },
  {
    q: "Which is the most populous Atlantic province?",
    a: ["New Brunswick", "Prince Edward Island", "Nova Scotia", "Newfoundland and Labrador"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Prince Edward Island (PEI) is the smallest province, known especially for its:",
    a: ["Oil", "Potatoes", "Marbles", "Coal"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Which Atlantic province is the only officially bilingual province?",
    a: ["Newfoundland and Labrador", "Prince Edward Island", "Nova Scotia", "New Brunswick"],
    correct: 3,
    chapter: "Regions of Canada"
  },
  {
    q: "Newfoundland and Labrador is the most easterly point in North America and has its own:",
    a: ["Language", "Currency", "Time zone", "Government"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "The largest city in Canada by population is:",
    a: ["Winnipeg", "Toronto", "Regina", "Victoria"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Canada's second largest city and the world's second largest French-speaking city after Paris is:",
    a: ["St. John", "Winnipeg", "Victoria", "Montreal"],
    correct: 3,
    chapter: "Regions of Canada"
  },
  {
    q: "Quebec is Canada's largest producer of:",
    a: ["Oil and gas", "Hydro electricity", "Wheat", "Coal"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Which is the largest freshwater lake in the world?",
    a: ["Lake Erie", "Lake Ontario", "Lake Superior", "Lake McKenzie"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "What fraction of the people in Canada live in cities and towns near the Great Lakes and the St. Lawrence River?",
    a: ["One-third", "One-half", "One-quarter", "One-fifth"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Which Canadian province produces most of Canada's oil and gas?",
    a: ["Quebec", "Alberta", "Yukon", "Newfoundland and Labrador"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Saskatchewan has approximately what fraction of Canada's total arable land?",
    a: ["30%", "40%", "50%", "60%"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "The training academy of the Royal Canadian Mounted Police is located in:",
    a: ["Saskatchewan", "Victoria", "Regina", "Montreal"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "The capital city of Alberta is:",
    a: ["St. John", "Charlottetown", "Calgary", "Edmonton"],
    correct: 3,
    chapter: "Regions of Canada"
  },
  {
    q: "British Columbia on the Pacific coast is Canada's westernmost province with a population of about:",
    a: ["5 million", "4 million", "3 million", "2 million"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "The capital city of British Columbia is:",
    a: ["Winnipeg", "Quebec City", "Victoria", "Yellowknife"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "The Port of Vancouver is our gateway to:",
    a: ["The Atlantic Ocean", "The Arctic", "The Asia Pacific", "The Gulf of Mexico"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Mount Logan, the highest mountain in Canada, is located in:",
    a: ["Northwest Territories", "British Columbia", "Yukon", "Alberta"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "The Northwest Territories, Nunavut, and Yukon contain what fraction of Canada's land mass?",
    a: ["One-half", "One-third", "One-quarter", "One-fifth"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "The capital city of the Northwest Territories, known as the 'diamond capital of North America,' is:",
    a: ["Quebec City", "Montreal", "Yellowknife", "Victoria"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "What is the capital of Yukon Territory?",
    a: ["Yellow Moon", "White Knife", "Whitehorse", "Yellow Horse"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Nunavut, meaning 'our land' in Inuktitut, was established in:",
    a: ["1999", "1995", "1991", "1986"],
    correct: 0,
    chapter: "Regions of Canada"
  },
  {
    q: "The north is often referred to as the 'land of the midnight sun.' Which region is this?",
    a: ["Atlantic", "Northern Territories", "Central Canada", "West Coast"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "The symbol of Canada's North is the:",
    a: ["Beaver", "Porcupine", "Caribou", "Camel"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Which was the last province to join Canada (in 1949)?",
    a: ["Newfoundland", "Alberta", "Saskatchewan", "British Columbia"],
    correct: 0,
    chapter: "Regions of Canada"
  },
  {
    q: "What percentage of Aboriginal people are First Nations?",
    a: ["30%", "6%", "50%", "65%"],
    correct: 3,
    chapter: "Regions of Canada"
  },
  {
    q: "Who were the Voyageurs?",
    a: ["Montreal-based traders who traveled by canoe", "Immigrants to Canada in the 18th century", "Explorers searching for the Northwest Passage", "Geographers who charted British Columbia's coastline"],
    correct: 0,
    chapter: "Regions of Canada"
  },
  {
    q: "Why is trade with other countries important to Canada?",
    a: ["It enhances our standard of living", "It makes travel easier", "It enhances our economy and raises our standard of living", "It brings in cheaper goods"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "The two official languages of Canada are:",
    a: ["English and Métis", "Inuktitut and French", "English and French", "English and Inuktitut"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "What did the Canadian Pacific Railway symbolize?",
    a: ["Easy access to the West Coast", "What can be achieved by working together", "Unity", "Ribbons of steel"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "What does the Canadian flag look like?",
    a: ["Red and white with provincial emblems", "Red and white with a beaver", "White with a red border on each end and a red maple leaf in the centre", "Red with a white maple leaf"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Canada's system of government is called:",
    a: ["Dictatorship", "Parliamentary government", "Military rule", "Communism"],
    correct: 1,
    chapter: "Regions of Canada"
  },
  {
    q: "Where do most French-speaking Canadians live?",
    a: ["Ontario", "Nova Scotia", "Quebec", "Prince Edward Island"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "What are the five regions of Canada?",
    a: ["Midwest, North, South, East, Central", "Maritimes, Ontario, Quebec, Prairies, British Columbia", "Atlantic, Central, Prairie, West Coast, and North", "West, Central, East, Prairies, and Territories"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "What are the three levels of government in Canada?",
    a: ["Federal, provincial/territorial, municipal (local)", "Federal, provincial, and city", "Federal, territorial, and provincial", "Federal, state, and local"],
    correct: 0,
    chapter: "Regions of Canada"
  },
  {
    q: "Which region of Canada is known as the 'industrial and manufacturing heartland'?",
    a: ["Atlantic provinces", "Prairie provinces", "Central Canada", "West Coast"],
    correct: 2,
    chapter: "Regions of Canada"
  },
  {
    q: "Which region of Canada is known for both fertile agricultural land and valuable energy resources?",
    a: ["British Columbia", "Prairie Provinces", "Ontario", "Manitoba"],
    correct: 1,
    chapter: "Regions of Canada"
  }
];
