app.adapters.drug = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var drug = null;
            var l = drugs.length;
            for (var i = 0; i < l; i++) {
                if (drugs[i].id === id.toString()) {
                    drug = drugs[i];
                    break;
                }
            }
            deferred.resolve(drug);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = drugs.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            results = results.slice(0, 20);
            deferred.resolve(results);
            return deferred.promise();
        },

        findByFirstalphabet = function (alp) {
            var deferred = $.Deferred();
            var results = drugs.filter(function (element) {
                return alp === element.name.toLowerCase().substr(0, 1);
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        drugs =
            [{"id": "1904", "name": "1199 SEIU", "name_param": "1199SEIU"}, {
                "id": "1902",
                "name": "157th Medical Group",
                "name_param": "157thMedicalGroup"
            }, {"id": "1903", "name": "32 BJ Benefit Funds", "name_param": "32BJBenefitFunds"}, {
                "id": "7",
                "name": "Abacavir",
                "name_param": "Abacavir"
            }, {"id": "15", "name": "Abilify", "name_param": "Abilify"}, {
                "id": "24",
                "name": "Abilify Discmelt",
                "name_param": "AbilifyDiscmelt"
            }, {"id": "40", "name": "Abilify Injection", "name_param": "AbilifyInjection"}, {
                "id": "58",
                "name": "Abilify Maintena",
                "name_param": "AbilifyMaintena"
            }, {"id": "79", "name": "Abraxane", "name_param": "Abraxane"}, {
                "id": "1923",
                "name": "Absolute Total Care",
                "name_param": "AbsoluteTotalCare"
            }, {"id": "99", "name": "Absorica", "name_param": "Absorica"}, {
                "id": "120",
                "name": "Abstral",
                "name_param": "Abstral"
            }, {"id": "142", "name": "Acanya", "name_param": "Acanya"}, {
                "id": "165",
                "name": "Acarbose",
                "name_param": "Acarbose"
            }, {
                "id": "1905",
                "name": "Access Health Colorado Bronze",
                "name_param": "AccessHealthColoradoBronze"
            }, {
                "id": "1907",
                "name": "Access Health Colorado Gold",
                "name_param": "AccessHealthColoradoGold"
            }, {
                "id": "1909",
                "name": "Access Health Colorado Silver",
                "name_param": "AccessHealthColoradoSilver"
            }, {"id": "189", "name": "Accolate", "name_param": "Accolate"}, {
                "id": "214",
                "name": "ACCU-CHEK Active Test Strips",
                "name_param": "ACCU-CHEKActiveTestStrips"
            }, {"id": "240", "name": "ACCU-CHEK Aviva", "name_param": "ACCU-CHEKAviva"}, {
                "id": "267",
                "name": "ACCU-CHEK Aviva Plus Test Strips",
                "name_param": "ACCU-CHEKAvivaPlusTestStrips"
            }, {
                "id": "291",
                "name": "ACCU-CHEK Comfort Curve Test Strips",
                "name_param": "ACCU-CHEKComfortCurveTestStrips"
            }, {"id": "315", "name": "ACCU-CHEK Compact Plus", "name_param": "ACCU-CHEKCompactPlus"}, {
                "id": "339",
                "name": "ACCU-CHEK Compact Plus Test Strips",
                "name_param": "ACCU-CHEKCompactPlusTestStrips"
            }, {"id": "361", "name": "ACCU-CHEK Nano", "name_param": "ACCU-CHEKNano"}, {
                "id": "383",
                "name": "ACCU-CHEK Nano SmartView Test Strips",
                "name_param": "ACCU-CHEKNanoSmartViewTestStrips"
            }, {"id": "405", "name": "Accuneb", "name_param": "Accuneb"}, {
                "id": "428",
                "name": "Accupril",
                "name_param": "Accupril"
            }, {"id": "450", "name": "Accuretic", "name_param": "Accuretic"}, {
                "id": "473",
                "name": "Aceon",
                "name_param": "Aceon"
            }, {"id": "495", "name": "Acetaminophen\/Codeine", "name_param": "Acetaminophen\/Codeine"}, {
                "id": "518",
                "name": "Aciphex",
                "name_param": "Aciphex"
            }, {"id": "539", "name": "Aclovate Cream", "name_param": "AclovateCream"}, {
                "id": "560",
                "name": "Actemra",
                "name_param": "Actemra"
            }, {"id": "581", "name": "Actemra SC", "name_param": "ActemraSC"}, {
                "id": "602",
                "name": "Acticin",
                "name_param": "Acticin"
            }, {"id": "623", "name": "Acticlate", "name_param": "Acticlate"}, {
                "id": "644",
                "name": "Actigall",
                "name_param": "Actigall"
            }, {"id": "665", "name": "Actiq", "name_param": "Actiq"}, {
                "id": "686",
                "name": "Activella",
                "name_param": "Activella"
            }, {"id": "707", "name": "Actonel", "name_param": "Actonel"}, {
                "id": "727",
                "name": "Actoplus Met",
                "name_param": "ActoplusMet"
            }, {"id": "747", "name": "ACTOplus met XR", "name_param": "ACTOplusmetXR"}, {
                "id": "767",
                "name": "Actos",
                "name_param": "Actos"
            }, {"id": "787", "name": "Acular", "name_param": "Acular"}, {
                "id": "806",
                "name": "Acular LS",
                "name_param": "AcularLS"
            }, {"id": "825", "name": "Acuvail", "name_param": "Acuvail"}, {
                "id": "844",
                "name": "Aczone",
                "name_param": "Aczone"
            }, {"id": "863", "name": "Adacel", "name_param": "Adacel"}, {
                "id": "882",
                "name": "Adalat CC",
                "name_param": "AdalatCC"
            }, {"id": "900", "name": "Adapalene Cream 0.1%", "name_param": "AdapaleneCream0.1%"}, {
                "id": "918",
                "name": "Adapalene Gel 0.1%",
                "name_param": "AdapaleneGel0.1%"
            }, {"id": "936", "name": "Adasuve", "name_param": "Adasuve"}, {
                "id": "953",
                "name": "Adcetris",
                "name_param": "Adcetris"
            }, {"id": "970", "name": "Adcirca", "name_param": "Adcirca"}, {
                "id": "987",
                "name": "Adderall",
                "name_param": "Adderall"
            }, {"id": "1005", "name": "Adderall XR", "name_param": "AdderallXR"}, {
                "id": "1023",
                "name": "Adefovir",
                "name_param": "Adefovir"
            }, {"id": "1040", "name": "Adempas", "name_param": "Adempas"}, {
                "id": "1057",
                "name": "Adipex-P",
                "name_param": "Adipex-P"
            }, {"id": "1073", "name": "Adoxa", "name_param": "Adoxa"}, {
                "id": "1089",
                "name": "Adriamycin",
                "name_param": "Adriamycin"
            }, {"id": "1105", "name": "Advair Diskus 100\/50", "name_param": "AdvairDiskus100\/50"}, {
                "id": "1121",
                "name": "Advair Diskus 250\/50 & 500\/50",
                "name_param": "AdvairDiskus250\/50&500\/50"
            }, {"id": "1137", "name": "Advair HFA", "name_param": "AdvairHFA"}, {
                "id": "1153",
                "name": "Advate",
                "name_param": "Advate"
            }, {"id": "1901", "name": "Adventist Health System", "name_param": "AdventistHealthSystem"}, {
                "id": "1169",
                "name": "Advicor",
                "name_param": "Advicor"
            }, {"id": "1185", "name": "Aerospan HFA", "name_param": "AerospanHFA"}, {
                "id": "1948",
                "name": "Affinity (CHP)",
                "name_param": "Affinity(CHP)"
            }, {
                "id": "1957",
                "name": "Affinity Essential American Indian",
                "name_param": "AffinityEssentialAmericanIndian"
            }, {
                "id": "1968",
                "name": "Affinity Essential Bronze",
                "name_param": "AffinityEssentialBronze"
            }, {"id": "1201", "name": "Afinitor", "name_param": "Afinitor"}, {
                "id": "1217",
                "name": "Afinitor Disperz",
                "name_param": "AfinitorDisperz"
            }, {"id": "1235", "name": "Afluria", "name_param": "Afluria"}, {
                "id": "1906",
                "name": "AFSCME Council 31",
                "name_param": "AFSCMECouncil31"
            }, {"id": "1908", "name": "AFTRA", "name_param": "AFTRA"}, {
                "id": "1252",
                "name": "Aggrenox",
                "name_param": "Aggrenox"
            }, {
                "id": "1970",
                "name": "AIDS Drug Assistance Program (CA)",
                "name_param": "AIDSDrugAssistanceProgram(CA)"
            }, {
                "id": "1969",
                "name": "AIDS Drug Assistance Program (CT)",
                "name_param": "AIDSDrugAssistanceProgram(CT)"
            }, {
                "id": "1945",
                "name": "AIDS Drug Assistance Program (FL)",
                "name_param": "AIDSDrugAssistanceProgram(FL)"
            }, {
                "id": "1947",
                "name": "AIDS Drug Assistance Program (NC)",
                "name_param": "AIDSDrugAssistanceProgram(NC)"
            }, {
                "id": "1940",
                "name": "AIDS Drug Assistance Program (ND)",
                "name_param": "AIDSDrugAssistanceProgram(ND)"
            }, {
                "id": "1939",
                "name": "AIDS Drug Assistance Program (NE)",
                "name_param": "AIDSDrugAssistanceProgram(NE)"
            }, {
                "id": "1919",
                "name": "AIDS Drug Assistance Program (NH)",
                "name_param": "AIDSDrugAssistanceProgram(NH)"
            }, {
                "id": "1920",
                "name": "AIDS Drug Assistance Program (NJ)",
                "name_param": "AIDSDrugAssistanceProgram(NJ)"
            }, {
                "id": "1912",
                "name": "AIDS Drug Assistance Program (NM)",
                "name_param": "AIDSDrugAssistanceProgram(NM)"
            }, {
                "id": "1938",
                "name": "AIDS Drug Assistance Program (NV)",
                "name_param": "AIDSDrugAssistanceProgram(NV)"
            }, {
                "id": "1932",
                "name": "AIDS Drug Assistance Program (RI)",
                "name_param": "AIDSDrugAssistanceProgram(RI)"
            }, {
                "id": "1911",
                "name": "AIDS Drug Assistance Program (WA)",
                "name_param": "AIDSDrugAssistanceProgram(WA)"
            }, {
                "id": "1922",
                "name": "AIDS Drug Assistance Program (WI)",
                "name_param": "AIDSDrugAssistanceProgram(WI)"
            }, {
                "id": "1913",
                "name": "AIDS Drug Assistance Program (WV)",
                "name_param": "AIDSDrugAssistanceProgram(WV)"
            }, {
                "id": "1910",
                "name": "AIDS Drug Assistance Program (WY)",
                "name_param": "AIDSDrugAssistanceProgram(WY)"
            }, {"id": "1269", "name": "Akynzeo", "name_param": "Akynzeo"}, {
                "id": "1917",
                "name": "Albuquerque Public Schools",
                "name_param": "AlbuquerquePublicSchools"
            }, {"id": "1285", "name": "Albuterol ER", "name_param": "AlbuterolER"}, {
                "id": "1317",
                "name": "Albuterol Solution",
                "name_param": "AlbuterolSolution"
            }, {
                "id": "1332",
                "name": "Albuterol Solution Concentrate 0.5%",
                "name_param": "AlbuterolSolutionConcentrate0.5%"
            }, {"id": "1301", "name": "albuterol\/ipratropium", "name_param": "albuterol\/ipratropium"}, {
                "id": "1348",
                "name": "Alclometasone",
                "name_param": "Alclometasone"
            }, {"id": "1362", "name": "Aldara", "name_param": "Aldara"}, {
                "id": "1376",
                "name": "Alendronate",
                "name_param": "Alendronate"
            }, {"id": "1390", "name": "Alimta", "name_param": "Alimta"}, {
                "id": "1391",
                "name": "Alinia",
                "name_param": "Alinia"
            }, {"id": "1405", "name": "Alkeran", "name_param": "Alkeran"}, {
                "id": "1419",
                "name": "Alkeran Injection",
                "name_param": "AlkeranInjection"
            }, {"id": "1927", "name": "Alliant Energy", "name_param": "AlliantEnergy"}, {
                "id": "1433",
                "name": "Allopurinol",
                "name_param": "Allopurinol"
            }, {"id": "1447", "name": "Alocril", "name_param": "Alocril"}, {
                "id": "1461",
                "name": "Alomide",
                "name_param": "Alomide"
            }, {"id": "1475", "name": "Alora", "name_param": "Alora"}, {
                "id": "1489",
                "name": "Aloxi",
                "name_param": "Aloxi"
            }, {"id": "1504", "name": "Alphagan P", "name_param": "AlphaganP"}, {
                "id": "1516",
                "name": "Alphanate",
                "name_param": "Alphanate"
            }, {"id": "1530", "name": "Alphanine SD", "name_param": "AlphanineSD"}, {
                "id": "1542",
                "name": "Alprazolam",
                "name_param": "Alprazolam"
            }, {"id": "1553", "name": "Alprazolam ODT", "name_param": "AlprazolamODT"}, {
                "id": "1564",
                "name": "Alprazolam XR",
                "name_param": "AlprazolamXR"
            }, {"id": "1574", "name": "Alprolix", "name_param": "Alprolix"}, {
                "id": "1584",
                "name": "Alrex",
                "name_param": "Alrex"
            }, {"id": "1593", "name": "Alsuma", "name_param": "Alsuma"}, {
                "id": "1601",
                "name": "Altabax",
                "name_param": "Altabax"
            }, {"id": "1914", "name": "Altius", "name_param": "Altius"}, {
                "id": "1609",
                "name": "Altoprev",
                "name_param": "Altoprev"
            }, {"id": "1617", "name": "Alvesco", "name_param": "Alvesco"}, {
                "id": "1625",
                "name": "Amaryl",
                "name_param": "Amaryl"
            }, {"id": "1631", "name": "Ambien", "name_param": "Ambien"}, {
                "id": "1637",
                "name": "Ambien CR",
                "name_param": "AmbienCR"
            }, {"id": "1643", "name": "Amerge", "name_param": "Amerge"}, {
                "id": "1649",
                "name": "Amitiza",
                "name_param": "Amitiza"
            }, {"id": "1654", "name": "Amitriptyline", "name_param": "Amitriptyline"}, {
                "id": "1659",
                "name": "Amoxapine",
                "name_param": "Amoxapine"
            }, {
                "id": "1664",
                "name": "Amoxicillin\/clarithromycin\/lansoprazole",
                "name_param": "Amoxicillin\/clarithromycin\/lansoprazole"
            }, {"id": "1669", "name": "Amphetamine mixtures", "name_param": "Amphetaminemixtures"}, {
                "id": "1674",
                "name": "Amphetamine mixtures XR",
                "name_param": "AmphetaminemixturesXR"
            }, {"id": "1679", "name": "Ampyra", "name_param": "Ampyra"}, {
                "id": "1684",
                "name": "Amrix",
                "name_param": "Amrix"
            }, {"id": "1689", "name": "Amturnide", "name_param": "Amturnide"}, {
                "id": "1915",
                "name": "AmWINS Rx",
                "name_param": "AmWINSRx"
            }, {"id": "1693", "name": "Anaprox", "name_param": "Anaprox"}, {
                "id": "1697",
                "name": "Anastrozole",
                "name_param": "Anastrozole"
            }, {"id": "1701", "name": "Androderm", "name_param": "Androderm"}, {
                "id": "1705",
                "name": "AndroGel",
                "name_param": "AndroGel"
            }, {"id": "1709", "name": "Angeliq", "name_param": "Angeliq"}, {
                "id": "1713",
                "name": "Anoro Ellipta",
                "name_param": "AnoroEllipta"
            }, {"id": "1717", "name": "Antara", "name_param": "Antara"}, {
                "id": "1721",
                "name": "Anzemet",
                "name_param": "Anzemet"
            }, {
                "id": "1918",
                "name": "Aon Hewitt Corporate Health Exchange (UHC)",
                "name_param": "AonHewittCorporateHealthExchange(UHC)"
            }, {
                "id": "1953",
                "name": "Aon Hewitt Corporate Health Exchange (WA)",
                "name_param": "AonHewittCorporateHealthExchange(WA)"
            }, {"id": "1725", "name": "ApexiCon E", "name_param": "ApexiConE"}, {
                "id": "1729",
                "name": "Apidra Solostar",
                "name_param": "ApidraSolostar"
            }, {"id": "1733", "name": "Apidra vial", "name_param": "Apidravial"}, {
                "id": "1737",
                "name": "Aplenzin",
                "name_param": "Aplenzin"
            }, {"id": "1741", "name": "Apokyn", "name_param": "Apokyn"}, {
                "id": "1745",
                "name": "Apraclonidine",
                "name_param": "Apraclonidine"
            }, {"id": "1749", "name": "Apriso", "name_param": "Apriso"}, {
                "id": "1753",
                "name": "Aptiom",
                "name_param": "Aptiom"
            }, {"id": "1757", "name": "Aptivus", "name_param": "Aptivus"}, {
                "id": "1761",
                "name": "Aquoral",
                "name_param": "Aquoral"
            }, {"id": "1765", "name": "Aralast NP", "name_param": "AralastNP"}, {
                "id": "1769",
                "name": "Aranesp",
                "name_param": "Aranesp"
            }, {"id": "1773", "name": "Arava", "name_param": "Arava"}, {
                "id": "1777",
                "name": "Arcalyst",
                "name_param": "Arcalyst"
            }, {"id": "1781", "name": "Arcapta Neohaler", "name_param": "ArcaptaNeohaler"}, {
                "id": "1785",
                "name": "Aricept",
                "name_param": "Aricept"
            }, {"id": "1789", "name": "Aricept 23", "name_param": "Aricept23"}, {
                "id": "1793",
                "name": "Aricept ODT",
                "name_param": "AriceptODT"
            }, {"id": "1797", "name": "Arimidex", "name_param": "Arimidex"}, {
                "id": "1800",
                "name": "Arixtra",
                "name_param": "Arixtra"
            }, {"id": "1803", "name": "Armour Thyroid", "name_param": "ArmourThyroid"}, {
                "id": "1806",
                "name": "Arnuity Ellipta",
                "name_param": "ArnuityEllipta"
            }, {"id": "1809", "name": "Aromasin", "name_param": "Aromasin"}, {
                "id": "1812",
                "name": "Arranon",
                "name_param": "Arranon"
            }, {"id": "1814", "name": "Arthrotec", "name_param": "Arthrotec"}, {
                "id": "1815",
                "name": "Arzerra",
                "name_param": "Arzerra"
            }, {"id": "1817", "name": "Asacol HD", "name_param": "AsacolHD"}, {
                "id": "1818",
                "name": "Asmanex HFA",
                "name_param": "AsmanexHFA"
            }, {
                "id": "1820",
                "name": "Asmanex Twisthaler 110mcg",
                "name_param": "AsmanexTwisthaler110mcg"
            }, {
                "id": "1822",
                "name": "Asmanex Twisthaler 220mcg",
                "name_param": "AsmanexTwisthaler220mcg"
            }, {"id": "1824", "name": "Astagraf XL", "name_param": "AstagrafXL"}, {
                "id": "1826",
                "name": "Astepro",
                "name_param": "Astepro"
            }, {"id": "1962", "name": "Asuris Northwest", "name_param": "AsurisNorthwest"}, {
                "id": "1974",
                "name": "Asuris Northwest Medication",
                "name_param": "AsurisNorthwestMedication"
            }, {"id": "1829", "name": "Atacand", "name_param": "Atacand"}, {
                "id": "1831",
                "name": "Atacand HCT",
                "name_param": "AtacandHCT"
            }, {"id": "1833", "name": "Atelvia", "name_param": "Atelvia"}, {
                "id": "1835",
                "name": "Ativan",
                "name_param": "Ativan"
            }, {"id": "1837", "name": "Atopiclair", "name_param": "Atopiclair"}, {
                "id": "1839",
                "name": "Atorvastatin",
                "name_param": "Atorvastatin"
            }, {
                "id": "1841",
                "name": "Atorvastatin\/Amlodipine",
                "name_param": "Atorvastatin\/Amlodipine"
            }, {"id": "1843", "name": "Atralin", "name_param": "Atralin"}, {
                "id": "1845",
                "name": "Atripla",
                "name_param": "Atripla"
            }, {"id": "1847", "name": "Atrovent HFA", "name_param": "AtroventHFA"}, {
                "id": "1849",
                "name": "Aubagio",
                "name_param": "Aubagio"
            }, {"id": "1851", "name": "Augmentin", "name_param": "Augmentin"}, {
                "id": "1853",
                "name": "Augmentin XR",
                "name_param": "AugmentinXR"
            }, {"id": "1855", "name": "Auvi-Q", "name_param": "Auvi-Q"}, {
                "id": "1857",
                "name": "Avalide",
                "name_param": "Avalide"
            }, {"id": "1859", "name": "Avandamet", "name_param": "Avandamet"}, {
                "id": "1861",
                "name": "Avandaryl",
                "name_param": "Avandaryl"
            }, {"id": "1863", "name": "Avandia", "name_param": "Avandia"}, {
                "id": "1865",
                "name": "Avapro",
                "name_param": "Avapro"
            }, {"id": "1867", "name": "Avar Cleanser", "name_param": "AvarCleanser"}, {
                "id": "1869",
                "name": "Avar Cleansing Pad",
                "name_param": "AvarCleansingPad"
            }, {"id": "1875", "name": "Avar LS Cleanser", "name_param": "AvarLSCleanser"}, {
                "id": "1876",
                "name": "Avar LS Cleansing Pad",
                "name_param": "AvarLSCleansingPad"
            }, {"id": "1871", "name": "Avar-E", "name_param": "Avar-E"}, {
                "id": "1873",
                "name": "Avar-E Green",
                "name_param": "Avar-EGreen"
            }, {"id": "1874", "name": "Avar-E LS", "name_param": "Avar-ELS"}, {
                "id": "1877",
                "name": "Avastin",
                "name_param": "Avastin"
            }, {"id": "1878", "name": "Aveed", "name_param": "Aveed"}, {
                "id": "1879",
                "name": "Avelox Tabs",
                "name_param": "AveloxTabs"
            }, {"id": "1880", "name": "Aviane", "name_param": "Aviane"}, {
                "id": "1881",
                "name": "Avinza",
                "name_param": "Avinza"
            }, {"id": "1882", "name": "Avita", "name_param": "Avita"}, {
                "id": "1883",
                "name": "Avodart",
                "name_param": "Avodart"
            }, {"id": "1884", "name": "Avonex", "name_param": "Avonex"}, {
                "id": "1885",
                "name": "Axert",
                "name_param": "Axert"
            }, {"id": "1886", "name": "Axiron", "name_param": "Axiron"}, {
                "id": "1887",
                "name": "Aygestin",
                "name_param": "Aygestin"
            }, {"id": "1888", "name": "Azasan", "name_param": "Azasan"}, {
                "id": "1889",
                "name": "Azasite",
                "name_param": "Azasite"
            }, {"id": "1890", "name": "Azathioprine", "name_param": "Azathioprine"}, {
                "id": "1891",
                "name": "Azelastine",
                "name_param": "Azelastine"
            }, {"id": "1892", "name": "Azelastine (nasal)", "name_param": "Azelastine(nasal)"}, {
                "id": "1893",
                "name": "Azelex",
                "name_param": "Azelex"
            }, {"id": "1894", "name": "Azilect", "name_param": "Azilect"}, {
                "id": "1895",
                "name": "Azithromycin",
                "name_param": "Azithromycin"
            }, {
                "id": "1896",
                "name": "Azithromycin (suspension)",
                "name_param": "Azithromycin(suspension)"
            }, {"id": "1897", "name": "Azopt", "name_param": "Azopt"}, {
                "id": "1898",
                "name": "AZOR",
                "name_param": "AZOR"
            }, {"id": "1899", "name": "Azulfidine", "name_param": "Azulfidine"}, {
                "id": "1900",
                "name": "Azulfidine En-tabs",
                "name_param": "AzulfidineEn-tabs"
            }, {
                "id": "1",
                "name": "Bacitracin ophthalmic ointment",
                "name_param": "Bacitracinophthalmicointment"
            }, {"id": "2", "name": "Bactroban Cream", "name_param": "BactrobanCream"}, {
                "id": "10",
                "name": "Bactroban Ointment",
                "name_param": "BactrobanOintment"
            }, {"id": "19", "name": "Balsalazide", "name_param": "Balsalazide"}, {
                "id": "1924",
                "name": "Banner Health",
                "name_param": "BannerHealth"
            }, {"id": "35", "name": "Banzel", "name_param": "Banzel"}, {
                "id": "52",
                "name": "Banzel Oral Suspension",
                "name_param": "BanzelOralSuspension"
            }, {"id": "74", "name": "Baraclude", "name_param": "Baraclude"}, {
                "id": "1928",
                "name": "Basic Core Formulary",
                "name_param": "BasicCoreFormulary"
            }, {"id": "94", "name": "BD pen needles", "name_param": "BDpenneedles"}, {
                "id": "115",
                "name": "BD ultrafine insulin syringe",
                "name_param": "BDultrafineinsulinsyringe"
            }, {"id": "137", "name": "Bebulin", "name_param": "Bebulin"}, {
                "id": "160",
                "name": "Beconase AQ",
                "name_param": "BeconaseAQ"
            }, {"id": "184", "name": "Belviq", "name_param": "Belviq"}, {
                "id": "209",
                "name": "BeneFIX",
                "name_param": "BeneFIX"
            }, {"id": "235", "name": "Benicar", "name_param": "Benicar"}, {
                "id": "261",
                "name": "Benicar HCT",
                "name_param": "BenicarHCT"
            }, {"id": "286", "name": "Benlysta", "name_param": "Benlysta"}, {
                "id": "310",
                "name": "Bensal HP",
                "name_param": "BensalHP"
            }, {"id": "334", "name": "Bentyl", "name_param": "Bentyl"}, {
                "id": "356",
                "name": "Benzaclin",
                "name_param": "Benzaclin"
            }, {
                "id": "378",
                "name": "Benzoyl peroxide\/Clindamycin",
                "name_param": "Benzoylperoxide\/Clindamycin"
            }, {
                "id": "400",
                "name": "Benzoyl peroxide\/erythromycin",
                "name_param": "Benzoylperoxide\/erythromycin"
            }, {"id": "423", "name": "benzphetamine", "name_param": "benzphetamine"}, {
                "id": "445",
                "name": "Bepreve",
                "name_param": "Bepreve"
            }, {"id": "467", "name": "Berinert", "name_param": "Berinert"}, {
                "id": "490",
                "name": "Besivance",
                "name_param": "Besivance"
            }, {"id": "513", "name": "Betagan", "name_param": "Betagan"}, {
                "id": "534",
                "name": "Betaseron",
                "name_param": "Betaseron"
            }, {"id": "555", "name": "Bethkis", "name_param": "Bethkis"}, {
                "id": "576",
                "name": "Betimol",
                "name_param": "Betimol"
            }, {"id": "597", "name": "Betoptic S", "name_param": "BetopticS"}, {
                "id": "618",
                "name": "Beyaz",
                "name_param": "Beyaz"
            }, {"id": "639", "name": "BG Star Test Strips", "name_param": "BGStarTestStrips"}, {
                "id": "660",
                "name": "Biaxin",
                "name_param": "Biaxin"
            }, {"id": "681", "name": "Biaxin XL", "name_param": "BiaxinXL"}, {
                "id": "702",
                "name": "Bicalutamide",
                "name_param": "Bicalutamide"
            }, {"id": "722", "name": "BiCNU", "name_param": "BiCNU"}, {
                "id": "742",
                "name": "BiDil",
                "name_param": "BiDil"
            }, {"id": "762", "name": "Binosto", "name_param": "Binosto"}, {
                "id": "782",
                "name": "Bionect",
                "name_param": "Bionect"
            }, {"id": "801", "name": "Bisoprolol", "name_param": "Bisoprolol"}, {
                "id": "820",
                "name": "Bisoprolol\/HCTZ",
                "name_param": "Bisoprolol\/HCTZ"
            }, {"id": "839", "name": "Blephamide Suspension", "name_param": "BlephamideSuspension"}, {
                "id": "1966",
                "name": "BlueCHiP for Healthy Options",
                "name_param": "BlueCHiPforHealthyOptions"
            }, {"id": "1933", "name": "Boeing", "name_param": "Boeing"}, {
                "id": "858",
                "name": "Boniva",
                "name_param": "Boniva"
            }, {"id": "877", "name": "Boniva Injection", "name_param": "BonivaInjection"}, {
                "id": "895",
                "name": "Bontril PDM",
                "name_param": "BontrilPDM"
            }, {"id": "913", "name": "Boostrix", "name_param": "Boostrix"}, {
                "id": "1941",
                "name": "BOP of the Presbyterian Church",
                "name_param": "BOPofthePresbyterianChurch"
            }, {
                "id": "1949",
                "name": "BOP of the Presbyterian Church Retirees",
                "name_param": "BOPofthePresbyterianChurchRetirees"
            }, {"id": "932", "name": "BOSULIF", "name_param": "BOSULIF"}, {
                "id": "949",
                "name": "Bravelle",
                "name_param": "Bravelle"
            }, {"id": "966", "name": "Breeze 2", "name_param": "Breeze2"}, {
                "id": "983",
                "name": "Breeze 2 Test Strips",
                "name_param": "Breeze2TestStrips"
            }, {"id": "1000", "name": "Breo Ellipta", "name_param": "BreoEllipta"}, {
                "id": "1019",
                "name": "Brilinta",
                "name_param": "Brilinta"
            }, {"id": "1036", "name": "Brintellix", "name_param": "Brintellix"}, {
                "id": "1053",
                "name": "Brisdelle",
                "name_param": "Brisdelle"
            }, {"id": "1070", "name": "Bromfenac", "name_param": "Bromfenac"}, {
                "id": "1086",
                "name": "Brovana",
                "name_param": "Brovana"
            }, {
                "id": "1102",
                "name": "Budesonide 0.25mg & 0.5mg",
                "name_param": "Budesonide0.25mg&0.5mg"
            }, {"id": "1118", "name": "Budesonide EC", "name_param": "BudesonideEC"}, {
                "id": "1134",
                "name": "Budesonide Nasal Suspension",
                "name_param": "BudesonideNasalSuspension"
            }, {"id": "1150", "name": "Bupap", "name_param": "Bupap"}, {
                "id": "1166",
                "name": "Buprenorphine",
                "name_param": "Buprenorphine"
            }, {
                "id": "1182",
                "name": "Buprenorphine\/naloxone",
                "name_param": "Buprenorphine\/naloxone"
            }, {
                "id": "1214",
                "name": "Bupropion (Wellbutrin SR)",
                "name_param": "Bupropion(WellbutrinSR)"
            }, {
                "id": "1231",
                "name": "Bupropion (Wellbutrin XL)",
                "name_param": "Bupropion(WellbutrinXL)"
            }, {"id": "1198", "name": "Bupropion (Wellbutrin)", "name_param": "Bupropion(Wellbutrin)"}, {
                "id": "1249",
                "name": "Bupropion (Zyban)",
                "name_param": "Bupropion(Zyban)"
            }, {
                "id": "1958",
                "name": "Bureau of Prisons - National Formulary",
                "name_param": "BureauofPrisons-NationalFormulary"
            }, {"id": "1265", "name": "Buspirone", "name_param": "Buspirone"}, {
                "id": "1282",
                "name": "Butrans",
                "name_param": "Butrans"
            }, {"id": "1298", "name": "Bydureon", "name_param": "Bydureon"}, {
                "id": "1314",
                "name": "Bydureon Pen",
                "name_param": "BydureonPen"
            }, {"id": "1329", "name": "Byetta", "name_param": "Byetta"}, {
                "id": "1345",
                "name": "Bystolic",
                "name_param": "Bystolic"
            }, {"id": "8", "name": "Cabergoline", "name_param": "Cabergoline"}, {
                "id": "16",
                "name": "Caduet",
                "name_param": "Caduet"
            }, {"id": "25", "name": "Calan SR", "name_param": "CalanSR"}, {
                "id": "41",
                "name": "Calcipotriene Ointment",
                "name_param": "CalcipotrieneOintment"
            }, {"id": "59", "name": "Calcitonin-salmon", "name_param": "Calcitonin-salmon"}, {
                "id": "60",
                "name": "Calcitrene Ointment",
                "name_param": "CalcitreneOintment"
            }, {"id": "80", "name": "Calcitriol ", "name_param": "Calcitriol"}, {
                "id": "100",
                "name": "Calcitriol Caps",
                "name_param": "CalcitriolCaps"
            }, {"id": "121", "name": "Calcium acetate", "name_param": "Calciumacetate"}, {
                "id": "143",
                "name": "Cambia",
                "name_param": "Cambia"
            }, {"id": "166", "name": "Campath", "name_param": "Campath"}, {
                "id": "190",
                "name": "Campral",
                "name_param": "Campral"
            }, {"id": "215", "name": "Camptosar", "name_param": "Camptosar"}, {
                "id": "241",
                "name": "Canasa",
                "name_param": "Canasa"
            }, {"id": "268", "name": "Candesartan", "name_param": "Candesartan"}, {
                "id": "292",
                "name": "Candesartan\/HCTZ ",
                "name_param": "Candesartan\/HCTZ"
            }, {"id": "316", "name": "Capecitabine", "name_param": "Capecitabine"}, {
                "id": "340",
                "name": "Caprelsa",
                "name_param": "Caprelsa"
            }, {"id": "362", "name": "Carac", "name_param": "Carac"}, {
                "id": "384",
                "name": "Carafate",
                "name_param": "Carafate"
            }, {"id": "406", "name": "Carbaglu", "name_param": "Carbaglu"}, {
                "id": "429",
                "name": "Carbamazepine",
                "name_param": "Carbamazepine"
            }, {"id": "451", "name": "Carbamazepine XR", "name_param": "CarbamazepineXR"}, {
                "id": "474",
                "name": "Carbatrol",
                "name_param": "Carbatrol"
            }, {"id": "496", "name": "Carbidopa\/levodopa", "name_param": "Carbidopa\/levodopa"}, {
                "id": "519",
                "name": "Carbidopa\/levodopa ER",
                "name_param": "Carbidopa\/levodopaER"
            }, {"id": "540", "name": "Carbidopa\/levodopa ODT", "name_param": "Carbidopa\/levodopaODT"}, {
                "id": "561",
                "name": "Cardene SR",
                "name_param": "CardeneSR"
            }, {"id": "582", "name": "Cardizem", "name_param": "Cardizem"}, {
                "id": "603",
                "name": "Cardizem CD",
                "name_param": "CardizemCD"
            }, {"id": "624", "name": "Cardizem LA", "name_param": "CardizemLA"}, {
                "id": "645",
                "name": "Cardura",
                "name_param": "Cardura"
            }, {"id": "666", "name": "Cardura XL", "name_param": "CarduraXL"}, {
                "id": "1971",
                "name": "CareLink",
                "name_param": "CareLink"
            }, {"id": "687", "name": "Carimune NF", "name_param": "CarimuneNF"}, {
                "id": "708",
                "name": "Carisoprodol",
                "name_param": "Carisoprodol"
            }, {"id": "728", "name": "Carteolol", "name_param": "Carteolol"}, {
                "id": "748",
                "name": "Cartia XT",
                "name_param": "CartiaXT"
            }, {"id": "768", "name": "Carticel", "name_param": "Carticel"}, {
                "id": "788",
                "name": "Carvedilol",
                "name_param": "Carvedilol"
            }, {"id": "807", "name": "Casodex", "name_param": "Casodex"}, {
                "id": "826",
                "name": "Cataflam",
                "name_param": "Cataflam"
            }, {"id": "845", "name": "Cayston", "name_param": "Cayston"}, {
                "id": "864",
                "name": "Cedax",
                "name_param": "Cedax"
            }, {"id": "883", "name": "Cefaclor 250 mg\/ 5 ml ", "name_param": "Cefaclor250mg\/5ml"}, {
                "id": "901",
                "name": "Cefdinir",
                "name_param": "Cefdinir"
            }, {"id": "919", "name": "Ceftin", "name_param": "Ceftin"}, {
                "id": "937",
                "name": "Ceftin Suspension",
                "name_param": "CeftinSuspension"
            }, {"id": "954", "name": "Cefuroxime", "name_param": "Cefuroxime"}, {
                "id": "971",
                "name": "Cefuroxime Suspension",
                "name_param": "CefuroximeSuspension"
            }, {"id": "988", "name": "Celebrex", "name_param": "Celebrex"}, {
                "id": "1006",
                "name": "Celexa",
                "name_param": "Celexa"
            }, {"id": "1024", "name": "Cellcept", "name_param": "Cellcept"}, {
                "id": "1041",
                "name": "Celontin",
                "name_param": "Celontin"
            }, {"id": "1058", "name": "Cenestin", "name_param": "Cenestin"}, {
                "id": "1074",
                "name": "Cerdelga",
                "name_param": "Cerdelga"
            }, {"id": "1090", "name": "Cerefolin NAC ", "name_param": "CerefolinNAC"}, {
                "id": "1106",
                "name": "Cervarix",
                "name_param": "Cervarix"
            }, {"id": "1122", "name": "Cesamet", "name_param": "Cesamet"}, {
                "id": "1138",
                "name": "Cetraxal",
                "name_param": "Cetraxal"
            }, {"id": "1154", "name": "Chantix", "name_param": "Chantix"}, {
                "id": "1170",
                "name": "Chlorpheniramine\/Hydrocodone",
                "name_param": "Chlorpheniramine\/Hydrocodone"
            }, {"id": "1186", "name": "Chlorpropamide", "name_param": "Chlorpropamide"}, {
                "id": "1270",
                "name": "Cialis (PRN\/ED)",
                "name_param": "Cialis(PRN\/ED)"
            }, {"id": "1202", "name": "Cialis 2.5 mg (OAD\/BPH)", "name_param": "Cialis2.5mg(OAD\/BPH)"}, {
                "id": "1218",
                "name": "Cialis 2.5 mg (OAD\/ED)",
                "name_param": "Cialis2.5mg(OAD\/ED)"
            }, {"id": "1236", "name": "Cialis 5 mg (OAD\/BPH)", "name_param": "Cialis5mg(OAD\/BPH)"}, {
                "id": "1253",
                "name": "Cialis 5 mg (OAD\/ED)",
                "name_param": "Cialis5mg(OAD\/ED)"
            }, {"id": "1286", "name": "Ciclopirox Nail Lacquer", "name_param": "CiclopiroxNailLacquer"}, {
                "id": "1302",
                "name": "Cilostazol",
                "name_param": "Cilostazol"
            }, {"id": "1318", "name": "Ciloxan ointment", "name_param": "Ciloxanointment"}, {
                "id": "1333",
                "name": "Cimzia",
                "name_param": "Cimzia"
            }, {
                "id": "1349",
                "name": "Cimzia (prefilled syringe)",
                "name_param": "Cimzia(prefilledsyringe)"
            }, {"id": "1363", "name": "Cinryze", "name_param": "Cinryze"}, {
                "id": "1377",
                "name": "Cipro",
                "name_param": "Cipro"
            }, {"id": "1434", "name": "Cipro HC", "name_param": "CiproHC"}, {
                "id": "1392",
                "name": "Ciprodex",
                "name_param": "Ciprodex"
            }, {"id": "1406", "name": "Ciprofloxacin", "name_param": "Ciprofloxacin"}, {
                "id": "1420",
                "name": "Ciprofloxacin (Ciloxan)",
                "name_param": "Ciprofloxacin(Ciloxan)"
            }, {"id": "1448", "name": "Citalopram", "name_param": "Citalopram"}, {
                "id": "1462",
                "name": "Citalopram Solution",
                "name_param": "CitalopramSolution"
            }, {"id": "1476", "name": "CitraNatal 90 DHA", "name_param": "CitraNatal90DHA"}, {
                "id": "1490",
                "name": "CitraNatal Assure",
                "name_param": "CitraNatalAssure"
            }, {"id": "1505", "name": "CitraNatal B-Calm", "name_param": "CitraNatalB-Calm"}, {
                "id": "1517",
                "name": "CitraNatal DHA",
                "name_param": "CitraNatalDHA"
            }, {"id": "1531", "name": "CitraNatal Harmony", "name_param": "CitraNatalHarmony"}, {
                "id": "1543",
                "name": "Citranatal Rx",
                "name_param": "CitranatalRx"
            }, {"id": "1554", "name": "Claravis", "name_param": "Claravis"}, {
                "id": "1565",
                "name": "Clarifoam EF",
                "name_param": "ClarifoamEF"
            }, {"id": "1575", "name": "Clarinex", "name_param": "Clarinex"}, {
                "id": "1594",
                "name": "Clarinex RediTabs",
                "name_param": "ClarinexRediTabs"
            }, {"id": "1585", "name": "Clarinex-D ", "name_param": "Clarinex-D"}, {
                "id": "1602",
                "name": "Clarithromycin",
                "name_param": "Clarithromycin"
            }, {
                "id": "1610",
                "name": "Clarithromycin (Biaxin XL)",
                "name_param": "Clarithromycin(BiaxinXL)"
            }, {"id": "1618", "name": "Cleocin T Gel", "name_param": "CleocinTGel"}, {
                "id": "1626",
                "name": "Climara",
                "name_param": "Climara"
            }, {"id": "1632", "name": "Climara Pro", "name_param": "ClimaraPro"}, {
                "id": "1638",
                "name": "Clindacin-P",
                "name_param": "Clindacin-P"
            }, {"id": "1644", "name": "Clindagel", "name_param": "Clindagel"}, {
                "id": "1650",
                "name": "Clindamax Gel",
                "name_param": "ClindamaxGel"
            }, {"id": "1655", "name": "Clindamax Lotion", "name_param": "ClindamaxLotion"}, {
                "id": "1660",
                "name": "Clobetasol",
                "name_param": "Clobetasol"
            }, {"id": "1665", "name": "Clobex", "name_param": "Clobex"}, {
                "id": "1670",
                "name": "Clobex Spray",
                "name_param": "ClobexSpray"
            }, {"id": "1675", "name": "Cloderm", "name_param": "Cloderm"}, {
                "id": "1680",
                "name": "Clomid",
                "name_param": "Clomid"
            }, {"id": "1685", "name": "Clonazepam", "name_param": "Clonazepam"}, {
                "id": "1690",
                "name": "Clopidogrel",
                "name_param": "Clopidogrel"
            }, {"id": "1694", "name": "Clotrimazole Lozenge", "name_param": "ClotrimazoleLozenge"}, {
                "id": "1698",
                "name": "Clozapine",
                "name_param": "Clozapine"
            }, {"id": "1702", "name": "Clozaril", "name_param": "Clozaril"}, {
                "id": "1706",
                "name": "Coartem",
                "name_param": "Coartem"
            }, {"id": "1710", "name": "Colazal", "name_param": "Colazal"}, {
                "id": "1714",
                "name": "Colcrys",
                "name_param": "Colcrys"
            }, {"id": "1718", "name": "Colestid", "name_param": "Colestid"}, {
                "id": "1722",
                "name": "Colestipol",
                "name_param": "Colestipol"
            }, {"id": "1726", "name": "Coly-mycin S", "name_param": "Coly-mycinS"}, {
                "id": "1730",
                "name": "Colyte",
                "name_param": "Colyte"
            }, {"id": "1734", "name": "Combigan", "name_param": "Combigan"}, {
                "id": "1738",
                "name": "Combipatch",
                "name_param": "Combipatch"
            }, {"id": "1742", "name": "Combivent Respimat", "name_param": "CombiventRespimat"}, {
                "id": "1746",
                "name": "Combivir",
                "name_param": "Combivir"
            }, {"id": "1750", "name": "Cometriq", "name_param": "Cometriq"}, {
                "id": "1754",
                "name": "Complera",
                "name_param": "Complera"
            }, {"id": "1758", "name": "Comtan", "name_param": "Comtan"}, {
                "id": "1762",
                "name": "Concerta",
                "name_param": "Concerta"
            }, {"id": "1766", "name": "Condylox", "name_param": "Condylox"}, {
                "id": "1770",
                "name": "Condylox Gel",
                "name_param": "CondyloxGel"
            }, {"id": "1774", "name": "Constulose", "name_param": "Constulose"}, {
                "id": "1778",
                "name": "Contour",
                "name_param": "Contour"
            }, {"id": "1782", "name": "Contour Next EZ", "name_param": "ContourNextEZ"}, {
                "id": "1786",
                "name": "Contour Next Test Strips",
                "name_param": "ContourNextTestStrips"
            }, {"id": "1790", "name": "Contour Test Strips", "name_param": "ContourTestStrips"}, {
                "id": "1794",
                "name": "Contrave",
                "name_param": "Contrave"
            }, {"id": "1798", "name": "Copaxone 20mg", "name_param": "Copaxone20mg"}, {
                "id": "1801",
                "name": "Copaxone 40mg",
                "name_param": "Copaxone40mg"
            }, {"id": "1804", "name": "Copegus", "name_param": "Copegus"}, {
                "id": "1807",
                "name": "Cordarone",
                "name_param": "Cordarone"
            }, {"id": "1810", "name": "Coreg", "name_param": "Coreg"}, {
                "id": "1813",
                "name": "Coreg CR",
                "name_param": "CoregCR"
            }, {"id": "1816", "name": "Corgard", "name_param": "Corgard"}, {
                "id": "1819",
                "name": "Corifact",
                "name_param": "Corifact"
            }, {"id": "1821", "name": "Cormax", "name_param": "Cormax"}, {
                "id": "1823",
                "name": "Cortenema",
                "name_param": "Cortenema"
            }, {"id": "1825", "name": "Cortifoam", "name_param": "Cortifoam"}, {
                "id": "1827",
                "name": "Cortisporin Otic",
                "name_param": "CortisporinOtic"
            }, {"id": "1828", "name": "Cosopt", "name_param": "Cosopt"}, {
                "id": "1830",
                "name": "Cosopt PF",
                "name_param": "CosoptPF"
            }, {"id": "1832", "name": "Coumadin", "name_param": "Coumadin"}, {
                "id": "1834",
                "name": "Cozaar",
                "name_param": "Cozaar"
            }, {"id": "1836", "name": "Creon", "name_param": "Creon"}, {
                "id": "1838",
                "name": "Crestor",
                "name_param": "Crestor"
            }, {"id": "1840", "name": "Crinone", "name_param": "Crinone"}, {
                "id": "1842",
                "name": "Crixivan",
                "name_param": "Crixivan"
            }, {"id": "1844", "name": "Cromolyn (Crolom)", "name_param": "Cromolyn(Crolom)"}, {
                "id": "1846",
                "name": "Cromolyn Nebulizer",
                "name_param": "CromolynNebulizer"
            }, {"id": "1848", "name": "Cubicin", "name_param": "Cubicin"}, {
                "id": "1850",
                "name": "Cuprimine",
                "name_param": "Cuprimine"
            }, {"id": "1852", "name": "Cutivate Cream", "name_param": "CutivateCream"}, {
                "id": "1854",
                "name": "Cutivate Lotion",
                "name_param": "CutivateLotion"
            }, {"id": "1856", "name": "Cuvposa", "name_param": "Cuvposa"}, {
                "id": "1858",
                "name": "Cyanocobalamin",
                "name_param": "Cyanocobalamin"
            }, {"id": "1860", "name": "Cyclessa", "name_param": "Cyclessa"}, {
                "id": "1862",
                "name": "Cyclobenzaprine",
                "name_param": "Cyclobenzaprine"
            }, {"id": "1864", "name": "Cycloset", "name_param": "Cycloset"}, {
                "id": "1866",
                "name": "Cyclosporine",
                "name_param": "Cyclosporine"
            }, {"id": "1868", "name": "Cymbalta", "name_param": "Cymbalta"}, {
                "id": "1870",
                "name": "Cytomel",
                "name_param": "Cytomel"
            }, {"id": "1872", "name": "Cytotec", "name_param": "Cytotec"}, {
                "id": "9",
                "name": "Dacogen",
                "name_param": "Dacogen"
            }, {"id": "17", "name": "Daliresp", "name_param": "Daliresp"}, {
                "id": "26",
                "name": "Danazol",
                "name_param": "Danazol"
            }, {"id": "42", "name": "Daypro", "name_param": "Daypro"}, {
                "id": "61",
                "name": "Daytrana",
                "name_param": "Daytrana"
            }, {"id": "62", "name": "Delatestryl", "name_param": "Delatestryl"}, {
                "id": "81",
                "name": "Delzicol",
                "name_param": "Delzicol"
            }, {"id": "101", "name": "Denavir Cream", "name_param": "DenavirCream"}, {
                "id": "122",
                "name": "Depakene",
                "name_param": "Depakene"
            }, {"id": "144", "name": "Depakote", "name_param": "Depakote"}, {
                "id": "167",
                "name": "Depakote ER",
                "name_param": "DepakoteER"
            }, {"id": "191", "name": "Depen", "name_param": "Depen"}, {
                "id": "216",
                "name": "Deplin 15",
                "name_param": "Deplin15"
            }, {"id": "242", "name": "Deplin 7.5", "name_param": "Deplin7.5"}, {
                "id": "269",
                "name": "Depo-Provera",
                "name_param": "Depo-Provera"
            }, {
                "id": "293",
                "name": "Depo-Provera Contraceptive",
                "name_param": "Depo-ProveraContraceptive"
            }, {"id": "317", "name": "Depo-subq provera 104", "name_param": "Depo-subqprovera104"}, {
                "id": "341",
                "name": "Depo-Testosterone",
                "name_param": "Depo-Testosterone"
            }, {"id": "363", "name": "Desipramine", "name_param": "Desipramine"}, {
                "id": "385",
                "name": "Desloratadine",
                "name_param": "Desloratadine"
            }, {"id": "407", "name": "Desonate", "name_param": "Desonate"}, {
                "id": "430",
                "name": "Desonide",
                "name_param": "Desonide"
            }, {
                "id": "452",
                "name": "Desvenlafaxine FUMARATE ER",
                "name_param": "DesvenlafaxineFUMARATEER"
            }, {"id": "475", "name": "Detrol", "name_param": "Detrol"}, {
                "id": "497",
                "name": "Detrol LA",
                "name_param": "DetrolLA"
            }, {
                "id": "520",
                "name": "Dexamethasone\/Tobramycin",
                "name_param": "Dexamethasone\/Tobramycin"
            }, {
                "id": "541",
                "name": "Dexcom G4 Platinum Pediatric Receiver",
                "name_param": "DexcomG4PlatinumPediatricReceiver"
            }, {
                "id": "562",
                "name": "Dexcom G4 Platinum Receiver",
                "name_param": "DexcomG4PlatinumReceiver"
            }, {"id": "583", "name": "Dexcom G4 Platinum Sensor", "name_param": "DexcomG4PlatinumSensor"}, {
                "id": "604",
                "name": "Dexcom G4 Platinum Transmitter",
                "name_param": "DexcomG4PlatinumTransmitter"
            }, {"id": "625", "name": "Dexedrine", "name_param": "Dexedrine"}, {
                "id": "646",
                "name": "Dexilant",
                "name_param": "Dexilant"
            }, {"id": "667", "name": "Dexmethylphenidate", "name_param": "Dexmethylphenidate"}, {
                "id": "688",
                "name": "Dexmethylphenidate ER",
                "name_param": "DexmethylphenidateER"
            }, {"id": "709", "name": "Diabeta", "name_param": "Diabeta"}, {
                "id": "729",
                "name": "Diamox Sequels",
                "name_param": "DiamoxSequels"
            }, {"id": "749", "name": "Diastat", "name_param": "Diastat"}, {
                "id": "769",
                "name": "Diazepam",
                "name_param": "Diazepam"
            }, {"id": "789", "name": "Diclegis", "name_param": "Diclegis"}, {
                "id": "808",
                "name": "Diclofenac ER",
                "name_param": "DiclofenacER"
            }, {"id": "846", "name": "Diclofenac Solution", "name_param": "DiclofenacSolution"}, {
                "id": "827",
                "name": "Diclofenac\/Misoprostol",
                "name_param": "Diclofenac\/Misoprostol"
            }, {"id": "865", "name": "Dicyclomine", "name_param": "Dicyclomine"}, {
                "id": "884",
                "name": "Didrex",
                "name_param": "Didrex"
            }, {"id": "902", "name": "diethylpropion", "name_param": "diethylpropion"}, {
                "id": "920",
                "name": "Diethylpropion ER",
                "name_param": "DiethylpropionER"
            }, {"id": "938", "name": "Differin Cream 0.1%", "name_param": "DifferinCream0.1%"}, {
                "id": "955",
                "name": "Differin Gel 0.1%",
                "name_param": "DifferinGel0.1%"
            }, {"id": "972", "name": "Differin Gel 0.3%", "name_param": "DifferinGel0.3%"}, {
                "id": "989",
                "name": "Differin Lotion 0.1%",
                "name_param": "DifferinLotion0.1%"
            }, {"id": "1007", "name": "Dificid", "name_param": "Dificid"}, {
                "id": "1025",
                "name": "Diflucan",
                "name_param": "Diflucan"
            }, {"id": "1042", "name": "Digoxin", "name_param": "Digoxin"}, {
                "id": "1059",
                "name": "Dilacor XR",
                "name_param": "DilacorXR"
            }, {"id": "1075", "name": "Dilantin", "name_param": "Dilantin"}, {
                "id": "1091",
                "name": "Dilantin Infatabs",
                "name_param": "DilantinInfatabs"
            }, {"id": "1107", "name": "Dilantin Suspension", "name_param": "DilantinSuspension"}, {
                "id": "1123",
                "name": "Dilatrate SR",
                "name_param": "DilatrateSR"
            }, {"id": "1139", "name": "Dilaudid", "name_param": "Dilaudid"}, {
                "id": "1155",
                "name": "Diovan",
                "name_param": "Diovan"
            }, {"id": "1171", "name": "Diovan HCT", "name_param": "DiovanHCT"}, {
                "id": "1187",
                "name": "Dipentum",
                "name_param": "Dipentum"
            }, {"id": "1203", "name": "Diprolene", "name_param": "Diprolene"}, {
                "id": "1219",
                "name": "Diprolene AF",
                "name_param": "DiproleneAF"
            }, {"id": "1237", "name": "Dipyridamole", "name_param": "Dipyridamole"}, {
                "id": "1254",
                "name": "Disopyramide",
                "name_param": "Disopyramide"
            }, {"id": "1271", "name": "Ditropan XL", "name_param": "DitropanXL"}, {
                "id": "1287",
                "name": "Divalproex",
                "name_param": "Divalproex"
            }, {"id": "1303", "name": "Divalproex ER", "name_param": "DivalproexER"}, {
                "id": "1319",
                "name": "Divigel",
                "name_param": "Divigel"
            }, {"id": "1334", "name": "Docefrez", "name_param": "Docefrez"}, {
                "id": "1335",
                "name": "Donepezil",
                "name_param": "Donepezil"
            }, {"id": "1350", "name": "Donepezil 23", "name_param": "Donepezil23"}, {
                "id": "1364",
                "name": "Donepezil ODT",
                "name_param": "DonepezilODT"
            }, {"id": "1378", "name": "Doribax", "name_param": "Doribax"}, {
                "id": "1393",
                "name": "Doryx",
                "name_param": "Doryx"
            }, {"id": "1407", "name": "Dorzolamide", "name_param": "Dorzolamide"}, {
                "id": "1421",
                "name": "Dorzolamide \/ Timolol",
                "name_param": "Dorzolamide\/Timolol"
            }, {"id": "1435", "name": "Dovonex Cream", "name_param": "DovonexCream"}, {
                "id": "1449",
                "name": "Doxazosin",
                "name_param": "Doxazosin"
            }, {"id": "1463", "name": "Doxepin", "name_param": "Doxepin"}, {
                "id": "1477",
                "name": "Doxil",
                "name_param": "Doxil"
            }, {"id": "1491", "name": "Duac ", "name_param": "Duac"}, {
                "id": "1506",
                "name": "Duavee",
                "name_param": "Duavee"
            }, {"id": "1518", "name": "Duetact", "name_param": "Duetact"}, {
                "id": "1532",
                "name": "Duexis",
                "name_param": "Duexis"
            }, {"id": "1544", "name": "Dulera", "name_param": "Dulera"}, {
                "id": "1555",
                "name": "Duloxetine",
                "name_param": "Duloxetine"
            }, {"id": "1566", "name": "Duoneb", "name_param": "Duoneb"}, {
                "id": "1576",
                "name": "Duragesic",
                "name_param": "Duragesic"
            }, {"id": "1586", "name": "Durezol", "name_param": "Durezol"}, {
                "id": "1595",
                "name": "Dutoprol",
                "name_param": "Dutoprol"
            }, {"id": "1603", "name": "Dyazide", "name_param": "Dyazide"}, {
                "id": "1611",
                "name": "Dymista",
                "name_param": "Dymista"
            }, {"id": "1619", "name": "Dynacin", "name_param": "Dynacin"}, {
                "id": "3",
                "name": "Econazole",
                "name_param": "Econazole"
            }, {"id": "11", "name": "Ecoza", "name_param": "Ecoza"}, {
                "id": "20",
                "name": "Edarbi",
                "name_param": "Edarbi"
            }, {"id": "36", "name": "Edarbyclor", "name_param": "Edarbyclor"}, {
                "id": "53",
                "name": "Edluar",
                "name_param": "Edluar"
            }, {"id": "75", "name": "Edurant", "name_param": "Edurant"}, {
                "id": "95",
                "name": "Effexor XR",
                "name_param": "EffexorXR"
            }, {"id": "116", "name": "Effient", "name_param": "Effient"}, {
                "id": "138",
                "name": "Efudex",
                "name_param": "Efudex"
            }, {"id": "161", "name": "Eight(8)-Mop", "name_param": "Eight(8)-Mop"}, {
                "id": "185",
                "name": "Elestat",
                "name_param": "Elestat"
            }, {"id": "210", "name": "Elestrin", "name_param": "Elestrin"}, {
                "id": "236",
                "name": "Eletone",
                "name_param": "Eletone"
            }, {"id": "262", "name": "Elidel", "name_param": "Elidel"}, {
                "id": "287",
                "name": "Eligard",
                "name_param": "Eligard"
            }, {"id": "311", "name": "Eliphos", "name_param": "Eliphos"}, {
                "id": "335",
                "name": "Eliquis",
                "name_param": "Eliquis"
            }, {"id": "357", "name": "Ella", "name_param": "Ella"}, {
                "id": "379",
                "name": "Ellence",
                "name_param": "Ellence"
            }, {"id": "401", "name": "Elocon Cream", "name_param": "EloconCream"}, {
                "id": "424",
                "name": "Eloctate",
                "name_param": "Eloctate"
            }, {"id": "446", "name": "Eloxatin", "name_param": "Eloxatin"}, {
                "id": "468",
                "name": "Emadine",
                "name_param": "Emadine"
            }, {"id": "491", "name": "Emcyt", "name_param": "Emcyt"}, {
                "id": "514",
                "name": "Emend",
                "name_param": "Emend"
            }, {"id": "535", "name": "Emsam", "name_param": "Emsam"}, {
                "id": "556",
                "name": "Emtriva (FTC)",
                "name_param": "Emtriva(FTC)"
            }, {"id": "577", "name": "Enablex", "name_param": "Enablex"}, {
                "id": "598",
                "name": "Enalapril",
                "name_param": "Enalapril"
            }, {"id": "619", "name": "Enalapril\/HCTZ", "name_param": "Enalapril\/HCTZ"}, {
                "id": "640",
                "name": "Enbrel",
                "name_param": "Enbrel"
            }, {"id": "661", "name": "Endometrin", "name_param": "Endometrin"}, {
                "id": "682",
                "name": "Enjuvia",
                "name_param": "Enjuvia"
            }, {"id": "703", "name": "Enoxaparin", "name_param": "Enoxaparin"}, {
                "id": "723",
                "name": "Entecavir",
                "name_param": "Entecavir"
            }, {"id": "743", "name": "Entereg", "name_param": "Entereg"}, {
                "id": "763",
                "name": "Entocort EC",
                "name_param": "EntocortEC"
            }, {"id": "783", "name": "Entyvio", "name_param": "Entyvio"}, {
                "id": "802",
                "name": "Enulose",
                "name_param": "Enulose"
            }, {"id": "821", "name": "Epaned", "name_param": "Epaned"}, {
                "id": "840",
                "name": "Epanova",
                "name_param": "Epanova"
            }, {"id": "859", "name": "Epiduo", "name_param": "Epiduo"}, {
                "id": "878",
                "name": "EpiPen",
                "name_param": "EpiPen"
            }, {"id": "896", "name": "EpiPen Jr", "name_param": "EpiPenJr"}, {
                "id": "914",
                "name": "Epiquin Micro",
                "name_param": "EpiquinMicro"
            }, {"id": "933", "name": "Epitol", "name_param": "Epitol"}, {
                "id": "950",
                "name": "Epivir (3TC)",
                "name_param": "Epivir(3TC)"
            }, {"id": "967", "name": "Epivir-HBV", "name_param": "Epivir-HBV"}, {
                "id": "984",
                "name": "Eplerenone",
                "name_param": "Eplerenone"
            }, {"id": "1001", "name": "Epogen", "name_param": "Epogen"}, {
                "id": "1020",
                "name": "Epoprostenol",
                "name_param": "Epoprostenol"
            }, {"id": "1037", "name": "Eprosartan", "name_param": "Eprosartan"}, {
                "id": "1054",
                "name": "Epzicom",
                "name_param": "Epzicom"
            }, {"id": "1071", "name": "Equetro", "name_param": "Equetro"}, {
                "id": "1087",
                "name": "Erbitux",
                "name_param": "Erbitux"
            }, {"id": "1103", "name": "Erivedge", "name_param": "Erivedge"}, {
                "id": "1119",
                "name": "Ertaczo",
                "name_param": "Ertaczo"
            }, {"id": "1135", "name": "Erwinaze", "name_param": "Erwinaze"}, {
                "id": "1151",
                "name": "Esbriet",
                "name_param": "Esbriet"
            }, {"id": "1167", "name": "Escitalopram Solution", "name_param": "EscitalopramSolution"}, {
                "id": "1183",
                "name": "Esomeprazole STRONTIUM",
                "name_param": "EsomeprazoleSTRONTIUM"
            }, {"id": "1199", "name": "Estrace", "name_param": "Estrace"}, {
                "id": "1215",
                "name": "Estrace Cream",
                "name_param": "EstraceCream"
            }, {"id": "1232", "name": "Estradiol", "name_param": "Estradiol"}, {
                "id": "1250",
                "name": "Estradiol transdermal",
                "name_param": "Estradioltransdermal"
            }, {
                "id": "1233",
                "name": "Estradiol\/norgestimate",
                "name_param": "Estradiol\/norgestimate"
            }, {"id": "1266", "name": "Estrasorb", "name_param": "Estrasorb"}, {
                "id": "1267",
                "name": "Estring",
                "name_param": "Estring"
            }, {"id": "1283", "name": "EstroGel", "name_param": "EstroGel"}, {
                "id": "1299",
                "name": "Estropipate",
                "name_param": "Estropipate"
            }, {"id": "1315", "name": "Estrostep Fe", "name_param": "EstrostepFe"}, {
                "id": "1330",
                "name": "Eszopiclone",
                "name_param": "Eszopiclone"
            }, {"id": "1346", "name": "Etidronate", "name_param": "Etidronate"}, {
                "id": "1360",
                "name": "Euflexxa",
                "name_param": "Euflexxa"
            }, {"id": "1374", "name": "Evamist", "name_param": "Evamist"}, {
                "id": "1388",
                "name": "Evista",
                "name_param": "Evista"
            }, {"id": "1403", "name": "Evoclin", "name_param": "Evoclin"}, {
                "id": "1417",
                "name": "Evoxac",
                "name_param": "Evoxac"
            }, {"id": "1431", "name": "Evzio", "name_param": "Evzio"}, {
                "id": "1445",
                "name": "Exalgo",
                "name_param": "Exalgo"
            }, {"id": "1459", "name": "Exelderm", "name_param": "Exelderm"}, {
                "id": "1473",
                "name": "Exelon",
                "name_param": "Exelon"
            }, {"id": "1487", "name": "Exelon Patch", "name_param": "ExelonPatch"}, {
                "id": "1501",
                "name": "Exemestane",
                "name_param": "Exemestane"
            }, {"id": "1514", "name": "Exforge", "name_param": "Exforge"}, {
                "id": "1528",
                "name": "Exforge HCT",
                "name_param": "ExforgeHCT"
            }, {"id": "1539", "name": "Exjade", "name_param": "Exjade"}, {
                "id": "1540",
                "name": "Extavia",
                "name_param": "Extavia"
            }, {"id": "1551", "name": "Extina", "name_param": "Extina"}, {
                "id": "1562",
                "name": "Eylea",
                "name_param": "Eylea"
            }, {"id": "6", "name": "Fabior", "name_param": "Fabior"}, {
                "id": "14",
                "name": "Factive",
                "name_param": "Factive"
            }, {"id": "23", "name": "FaLessa Kit", "name_param": "FaLessaKit"}, {
                "id": "39",
                "name": "Famciclovir",
                "name_param": "Famciclovir"
            }, {"id": "57", "name": "Famvir", "name_param": "Famvir"}, {
                "id": "78",
                "name": "Fanapt",
                "name_param": "Fanapt"
            }, {"id": "98", "name": "Fareston", "name_param": "Fareston"}, {
                "id": "119",
                "name": "Farxiga",
                "name_param": "Farxiga"
            }, {"id": "141", "name": "Faslodex", "name_param": "Faslodex"}, {
                "id": "164",
                "name": "FazaClo",
                "name_param": "FazaClo"
            }, {"id": "188", "name": "Feiba NF", "name_param": "FeibaNF"}, {
                "id": "213",
                "name": "Felbatol",
                "name_param": "Felbatol"
            }, {"id": "239", "name": "Feldene", "name_param": "Feldene"}, {
                "id": "266",
                "name": "Felodipine",
                "name_param": "Felodipine"
            }, {"id": "290", "name": "Femara", "name_param": "Femara"}, {
                "id": "314",
                "name": "Femcon Fe",
                "name_param": "FemconFe"
            }, {"id": "338", "name": "FemHRT", "name_param": "FemHRT"}, {
                "id": "360",
                "name": "Femring",
                "name_param": "Femring"
            }, {"id": "382", "name": "Fenofibrate Caps", "name_param": "FenofibrateCaps"}, {
                "id": "404",
                "name": "Fenofibric Acid",
                "name_param": "FenofibricAcid"
            }, {"id": "427", "name": "Fenoglide", "name_param": "Fenoglide"}, {
                "id": "449",
                "name": "Fenoprofen",
                "name_param": "Fenoprofen"
            }, {"id": "472", "name": "Fentanyl Transdermal", "name_param": "FentanylTransdermal"}, {
                "id": "494",
                "name": "Fentanyl Transmucosal",
                "name_param": "FentanylTransmucosal"
            }, {"id": "517", "name": "Fentora", "name_param": "Fentora"}, {
                "id": "538",
                "name": "FeRiva",
                "name_param": "FeRiva"
            }, {"id": "559", "name": "FeRiva FA", "name_param": "FeRivaFA"}, {
                "id": "580",
                "name": "Ferralet 90",
                "name_param": "Ferralet90"
            }, {"id": "601", "name": "Ferriprox", "name_param": "Ferriprox"}, {
                "id": "622",
                "name": "Fetzima",
                "name_param": "Fetzima"
            }, {"id": "643", "name": "Fibricor", "name_param": "Fibricor"}, {
                "id": "664",
                "name": "Finacea",
                "name_param": "Finacea"
            }, {"id": "685", "name": "Finasteride (Proscar)", "name_param": "Finasteride(Proscar)"}, {
                "id": "706",
                "name": "Fioricet",
                "name_param": "Fioricet"
            }, {"id": "726", "name": "Firazyr", "name_param": "Firazyr"}, {
                "id": "746",
                "name": "Firmagon",
                "name_param": "Firmagon"
            }, {"id": "766", "name": "Flebogamma DIF", "name_param": "FlebogammaDIF"}, {
                "id": "786",
                "name": "Flector Patch",
                "name_param": "FlectorPatch"
            }, {"id": "862", "name": "Flo-Pred", "name_param": "Flo-Pred"}, {
                "id": "805",
                "name": "Flolan",
                "name_param": "Flolan"
            }, {"id": "824", "name": "Flomax", "name_param": "Flomax"}, {
                "id": "843",
                "name": "Flonase",
                "name_param": "Flonase"
            }, {"id": "881", "name": "Flovent Diskus", "name_param": "FloventDiskus"}, {
                "id": "899",
                "name": "Flovent HFA",
                "name_param": "FloventHFA"
            }, {"id": "917", "name": "Fluarix", "name_param": "Fluarix"}, {
                "id": "935",
                "name": "Fluconazole",
                "name_param": "Fluconazole"
            }, {"id": "952", "name": "Flumadine", "name_param": "Flumadine"}, {
                "id": "969",
                "name": "Fluocinonide",
                "name_param": "Fluocinonide"
            }, {"id": "986", "name": "Fluorometholone Susp", "name_param": "FluorometholoneSusp"}, {
                "id": "1004",
                "name": "Fluoroplex",
                "name_param": "Fluoroplex"
            }, {"id": "1022", "name": "Fluorouracil", "name_param": "Fluorouracil"}, {
                "id": "1039",
                "name": "Fluoxetine",
                "name_param": "Fluoxetine"
            }, {"id": "1056", "name": "Fluoxetine Tablets 60mg", "name_param": "FluoxetineTablets60mg"}, {
                "id": "1072",
                "name": "Flurazepam",
                "name_param": "Flurazepam"
            }, {"id": "1088", "name": "Flurbiprofen", "name_param": "Flurbiprofen"}, {
                "id": "1104",
                "name": "Flurbiprofen (Ocufen)",
                "name_param": "Flurbiprofen(Ocufen)"
            }, {"id": "1120", "name": "Flutamide", "name_param": "Flutamide"}, {
                "id": "1136",
                "name": "Fluticasone (Flonase)",
                "name_param": "Fluticasone(Flonase)"
            }, {"id": "1152", "name": "Fluticasone (topical)", "name_param": "Fluticasone(topical)"}, {
                "id": "1168",
                "name": "Fluvastatin",
                "name_param": "Fluvastatin"
            }, {"id": "1184", "name": "Fluvoxamine", "name_param": "Fluvoxamine"}, {
                "id": "1200",
                "name": "Fluvoxamine SR",
                "name_param": "FluvoxamineSR"
            }, {"id": "1216", "name": "Fluzone", "name_param": "Fluzone"}, {
                "id": "1234",
                "name": "Fluzone HD",
                "name_param": "FluzoneHD"
            }, {"id": "1251", "name": "Fluzone IntraDermal", "name_param": "FluzoneIntraDermal"}, {
                "id": "1268",
                "name": "FML Forte",
                "name_param": "FMLForte"
            }, {"id": "1284", "name": "FML Ointment", "name_param": "FMLOintment"}, {
                "id": "1300",
                "name": "Focalin",
                "name_param": "Focalin"
            }, {"id": "1316", "name": "Focalin XR", "name_param": "FocalinXR"}, {
                "id": "1331",
                "name": "Follistim AQ",
                "name_param": "FollistimAQ"
            }, {"id": "1347", "name": "Folotyn", "name_param": "Folotyn"}, {
                "id": "1361",
                "name": "Foradil",
                "name_param": "Foradil"
            }, {"id": "1375", "name": "Forfivo XL", "name_param": "ForfivoXL"}, {
                "id": "1389",
                "name": "Fortamet",
                "name_param": "Fortamet"
            }, {"id": "1404", "name": "Forteo", "name_param": "Forteo"}, {
                "id": "1418",
                "name": "Fortesta",
                "name_param": "Fortesta"
            }, {"id": "1432", "name": "Fortical", "name_param": "Fortical"}, {
                "id": "1446",
                "name": "Fosamax",
                "name_param": "Fosamax"
            }, {"id": "1460", "name": "Fosamax Plus D", "name_param": "FosamaxPlusD"}, {
                "id": "1474",
                "name": "Fosphenytoin",
                "name_param": "Fosphenytoin"
            }, {"id": "1488", "name": "Fosrenol", "name_param": "Fosrenol"}, {
                "id": "1502",
                "name": "Fragmin",
                "name_param": "Fragmin"
            }, {
                "id": "1503",
                "name": "FreeStyle InsuLinx Test Strips",
                "name_param": "FreeStyleInsuLinxTestStrips"
            }, {"id": "1515", "name": "FreeStyle Lite", "name_param": "FreeStyleLite"}, {
                "id": "1529",
                "name": "FreeStyle Lite Test Strips",
                "name_param": "FreeStyleLiteTestStrips"
            }, {"id": "1541", "name": "Freestyle Test Strips", "name_param": "FreestyleTestStrips"}, {
                "id": "1552",
                "name": "Frova",
                "name_param": "Frova"
            }, {"id": "1563", "name": "Fulyzaq", "name_param": "Fulyzaq"}, {
                "id": "1573",
                "name": "Fusilev",
                "name_param": "Fusilev"
            }, {"id": "1583", "name": "Fuzeon", "name_param": "Fuzeon"}, {
                "id": "1592",
                "name": "FYCOMPA",
                "name_param": "FYCOMPA"
            }, {"id": "5", "name": "Gabapentin", "name_param": "Gabapentin"}, {
                "id": "13",
                "name": "Gabapentin Solution",
                "name_param": "GabapentinSolution"
            }, {"id": "22", "name": "Gabitril", "name_param": "Gabitril"}, {
                "id": "38",
                "name": "Galantamine",
                "name_param": "Galantamine"
            }, {"id": "55", "name": "Galantamine ER", "name_param": "GalantamineER"}, {
                "id": "56",
                "name": "Galzin",
                "name_param": "Galzin"
            }, {"id": "77", "name": "Gammagard Liquid", "name_param": "GammagardLiquid"}, {
                "id": "97",
                "name": "Gamunex-C",
                "name_param": "Gamunex-C"
            }, {"id": "118", "name": "Ganciclovir", "name_param": "Ganciclovir"}, {
                "id": "140",
                "name": "Ganirelix",
                "name_param": "Ganirelix"
            }, {"id": "163", "name": "Gardasil", "name_param": "Gardasil"}, {
                "id": "187",
                "name": "Gattex",
                "name_param": "Gattex"
            }, {"id": "212", "name": "Gazyva", "name_param": "Gazyva"}, {
                "id": "265",
                "name": "Gel-One",
                "name_param": "Gel-One"
            }, {"id": "238", "name": "Gelclair", "name_param": "Gelclair"}, {
                "id": "264",
                "name": "Gelnique",
                "name_param": "Gelnique"
            }, {"id": "289", "name": "Gemfibrozil", "name_param": "Gemfibrozil"}, {
                "id": "313",
                "name": "Gemzar",
                "name_param": "Gemzar"
            }, {"id": "337", "name": "Generess Fe", "name_param": "GeneressFe"}, {
                "id": "359",
                "name": "Generlac",
                "name_param": "Generlac"
            }, {"id": "381", "name": "Gengraf", "name_param": "Gengraf"}, {
                "id": "403",
                "name": "Genotropin",
                "name_param": "Genotropin"
            }, {"id": "426", "name": "Genotropin Miniquick", "name_param": "GenotropinMiniquick"}, {
                "id": "448",
                "name": "Gentamicin Solution",
                "name_param": "GentamicinSolution"
            }, {"id": "471", "name": "Geodon", "name_param": "Geodon"}, {
                "id": "493",
                "name": "Gianvi",
                "name_param": "Gianvi"
            }, {"id": "516", "name": "Giazo", "name_param": "Giazo"}, {
                "id": "537",
                "name": "Gilenya",
                "name_param": "Gilenya"
            }, {"id": "558", "name": "Gilotrif", "name_param": "Gilotrif"}, {
                "id": "579",
                "name": "Glassia",
                "name_param": "Glassia"
            }, {"id": "600", "name": "Gleevec", "name_param": "Gleevec"}, {
                "id": "621",
                "name": "Glimepiride",
                "name_param": "Glimepiride"
            }, {"id": "642", "name": "Glipizide", "name_param": "Glipizide"}, {
                "id": "663",
                "name": "Glipizide XL",
                "name_param": "GlipizideXL"
            }, {"id": "705", "name": "GlucaGen Hypo-Kit 2-Pack", "name_param": "GlucaGenHypo-Kit2-Pack"}, {
                "id": "684",
                "name": "GlucaGen HypoKit",
                "name_param": "GlucaGenHypoKit"
            }, {"id": "725", "name": "Glucagon Emergency Kit", "name_param": "GlucagonEmergencyKit"}, {
                "id": "745",
                "name": "Glucocard 01 Test Strips",
                "name_param": "Glucocard01TestStrips"
            }, {
                "id": "765",
                "name": "Glucocard Expression Test Strips",
                "name_param": "GlucocardExpressionTestStrips"
            }, {
                "id": "785",
                "name": "Glucocard Vital Test Strips",
                "name_param": "GlucocardVitalTestStrips"
            }, {"id": "804", "name": "Glucophage", "name_param": "Glucophage"}, {
                "id": "823",
                "name": "Glucophage XR",
                "name_param": "GlucophageXR"
            }, {"id": "842", "name": "Glucotrol", "name_param": "Glucotrol"}, {
                "id": "861",
                "name": "Glucotrol XL",
                "name_param": "GlucotrolXL"
            }, {"id": "880", "name": "Glucovance", "name_param": "Glucovance"}, {
                "id": "898",
                "name": "Glumetza",
                "name_param": "Glumetza"
            }, {"id": "916", "name": "Glyburide", "name_param": "Glyburide"}, {
                "id": "934",
                "name": "Glyburide Micronized",
                "name_param": "GlyburideMicronized"
            }, {"id": "951", "name": "Glynase", "name_param": "Glynase"}, {
                "id": "968",
                "name": "Glyset",
                "name_param": "Glyset"
            }, {"id": "985", "name": "Golytely", "name_param": "Golytely"}, {
                "id": "1002",
                "name": "Gonal-F",
                "name_param": "Gonal-F"
            }, {"id": "1003", "name": "Gralise", "name_param": "Gralise"}, {
                "id": "1021",
                "name": "Granisetron",
                "name_param": "Granisetron"
            }, {"id": "1038", "name": "Granix", "name_param": "Granix"}, {
                "id": "1055",
                "name": "Grastek",
                "name_param": "Grastek"
            }, {"id": "336", "name": "H.P. Acthar Gel", "name_param": "H.P.ActharGel"}, {
                "id": "4",
                "name": "Halaven",
                "name_param": "Halaven"
            }, {"id": "12", "name": "Halflytely Kit", "name_param": "HalflytelyKit"}, {
                "id": "21",
                "name": "Halobetasol",
                "name_param": "Halobetasol"
            }, {"id": "37", "name": "Halog Cream", "name_param": "HalogCream"}, {
                "id": "54",
                "name": "Harvoni",
                "name_param": "Harvoni"
            }, {"id": "76", "name": "Hecoria", "name_param": "Hecoria"}, {
                "id": "96",
                "name": "Hectorol",
                "name_param": "Hectorol"
            }, {"id": "117", "name": "Hectorol IV", "name_param": "HectorolIV"}, {
                "id": "139",
                "name": "Helixate FS",
                "name_param": "HelixateFS"
            }, {"id": "162", "name": "Hemofil M", "name_param": "HemofilM"}, {
                "id": "186",
                "name": "Hepsera",
                "name_param": "Hepsera"
            }, {"id": "211", "name": "Herceptin", "name_param": "Herceptin"}, {
                "id": "237",
                "name": "Hetlioz",
                "name_param": "Hetlioz"
            }, {"id": "263", "name": "Hizentra", "name_param": "Hizentra"}, {
                "id": "288",
                "name": "Homatropine \/ Hydrocodone",
                "name_param": "Homatropine\/Hydrocodone"
            }, {"id": "312", "name": "Horizant", "name_param": "Horizant"}, {
                "id": "358",
                "name": "Humalog KwikPen",
                "name_param": "HumalogKwikPen"
            }, {
                "id": "380",
                "name": "Humalog Mix 50\/50 KwikPen",
                "name_param": "HumalogMix50\/50KwikPen"
            }, {"id": "402", "name": "Humalog Mix 50\/50 vial", "name_param": "HumalogMix50\/50vial"}, {
                "id": "425",
                "name": "Humalog Mix 75\/25 KwikPen",
                "name_param": "HumalogMix75\/25KwikPen"
            }, {"id": "447", "name": "Humalog Mix 75\/25 vial", "name_param": "HumalogMix75\/25vial"}, {
                "id": "469",
                "name": "Humalog vial",
                "name_param": "Humalogvial"
            }, {"id": "470", "name": "Humate-P", "name_param": "Humate-P"}, {
                "id": "492",
                "name": "Humatrope",
                "name_param": "Humatrope"
            }, {"id": "515", "name": "Humatrope Cartridge", "name_param": "HumatropeCartridge"}, {
                "id": "536",
                "name": "Humira",
                "name_param": "Humira"
            }, {"id": "557", "name": "Humulin 70\/30 Kwikpen", "name_param": "Humulin70\/30Kwikpen"}, {
                "id": "578",
                "name": "Humulin 70\/30 Pen",
                "name_param": "Humulin70\/30Pen"
            }, {"id": "599", "name": "Humulin 70\/30 vial", "name_param": "Humulin70\/30vial"}, {
                "id": "620",
                "name": "Humulin N Kwikpen",
                "name_param": "HumulinNKwikpen"
            }, {"id": "641", "name": "Humulin N Pen", "name_param": "HumulinNPen"}, {
                "id": "662",
                "name": "Humulin N vial",
                "name_param": "HumulinNvial"
            }, {"id": "683", "name": "Humulin R U-500", "name_param": "HumulinRU-500"}, {
                "id": "704",
                "name": "Humulin R vial",
                "name_param": "HumulinRvial"
            }, {"id": "724", "name": "Hyalgan", "name_param": "Hyalgan"}, {
                "id": "744",
                "name": "Hycamtin",
                "name_param": "Hycamtin"
            }, {"id": "764", "name": "Hycamtin IV", "name_param": "HycamtinIV"}, {
                "id": "784",
                "name": "Hydrocodone\/Apap",
                "name_param": "Hydrocodone\/Apap"
            }, {"id": "803", "name": "Hydrocodone\/Ibuprofen", "name_param": "Hydrocodone\/Ibuprofen"}, {
                "id": "822",
                "name": "Hydrocortisone\/neomycin\/polymyxinB (otics)",
                "name_param": "Hydrocortisone\/neomycin\/polymyxinB(otics)"
            }, {"id": "841", "name": "Hydromorphone", "name_param": "Hydromorphone"}, {
                "id": "860",
                "name": "Hydromorphone ER",
                "name_param": "HydromorphoneER"
            }, {"id": "879", "name": "Hydroxychloroquine", "name_param": "Hydroxychloroquine"}, {
                "id": "897",
                "name": "Hyophen",
                "name_param": "Hyophen"
            }, {"id": "915", "name": "Hyzaar", "name_param": "Hyzaar"}, {
                "id": "18",
                "name": "Ibandronate",
                "name_param": "Ibandronate"
            }, {"id": "27", "name": "iBG Star", "name_param": "iBGStar"}, {
                "id": "43",
                "name": "Iclusig",
                "name_param": "Iclusig"
            }, {"id": "63", "name": "Ifex", "name_param": "Ifex"}, {
                "id": "82",
                "name": "Ilaris",
                "name_param": "Ilaris"
            }, {"id": "102", "name": "Ilevro", "name_param": "Ilevro"}, {
                "id": "123",
                "name": "Imbruvica",
                "name_param": "Imbruvica"
            }, {"id": "145", "name": "Imiquimod", "name_param": "Imiquimod"}, {
                "id": "168",
                "name": "Imitrex",
                "name_param": "Imitrex"
            }, {"id": "192", "name": "Imitrex Nasal Spray", "name_param": "ImitrexNasalSpray"}, {
                "id": "217",
                "name": "Imitrex STATdose ",
                "name_param": "ImitrexSTATdose"
            }, {"id": "243", "name": "Imuran", "name_param": "Imuran"}, {
                "id": "270",
                "name": "Incivek",
                "name_param": "Incivek"
            }, {"id": "294", "name": "Increlex", "name_param": "Increlex"}, {
                "id": "318",
                "name": "Incruse Ellipta",
                "name_param": "IncruseEllipta"
            }, {"id": "342", "name": "Inderal LA", "name_param": "InderalLA"}, {
                "id": "364",
                "name": "Indomethacin",
                "name_param": "Indomethacin"
            }, {"id": "386", "name": "Inlyta", "name_param": "Inlyta"}, {
                "id": "408",
                "name": "Innopran XL",
                "name_param": "InnopranXL"
            }, {"id": "431", "name": "Inspra", "name_param": "Inspra"}, {
                "id": "453",
                "name": "Intelence",
                "name_param": "Intelence"
            }, {"id": "476", "name": "Intermezzo", "name_param": "Intermezzo"}, {
                "id": "498",
                "name": "Intron A",
                "name_param": "IntronA"
            }, {"id": "521", "name": "Intuniv", "name_param": "Intuniv"}, {
                "id": "542",
                "name": "Invanz",
                "name_param": "Invanz"
            }, {"id": "563", "name": "Invega", "name_param": "Invega"}, {
                "id": "584",
                "name": "Invega Sustenna",
                "name_param": "InvegaSustenna"
            }, {"id": "605", "name": "Invirase", "name_param": "Invirase"}, {
                "id": "626",
                "name": "Invokamet",
                "name_param": "Invokamet"
            }, {"id": "647", "name": "Invokana", "name_param": "Invokana"}, {
                "id": "668",
                "name": "Ipratropium Nebulizer",
                "name_param": "IpratropiumNebulizer"
            }, {"id": "689", "name": "Irbesartan ", "name_param": "Irbesartan"}, {
                "id": "710",
                "name": "Irbesartan\/HCTZ",
                "name_param": "Irbesartan\/HCTZ"
            }, {"id": "730", "name": "Isentress", "name_param": "Isentress"}, {
                "id": "750",
                "name": "Isordil",
                "name_param": "Isordil"
            }, {"id": "770", "name": "Isosorbide dinitrate SR", "name_param": "IsosorbidedinitrateSR"}, {
                "id": "790",
                "name": "Isradipine",
                "name_param": "Isradipine"
            }, {"id": "809", "name": "Istalol", "name_param": "Istalol"}, {
                "id": "828",
                "name": "Istodax",
                "name_param": "Istodax"
            }, {"id": "847", "name": "Itraconazole", "name_param": "Itraconazole"}, {
                "id": "866",
                "name": "Ixempra",
                "name_param": "Ixempra"
            }, {"id": "28", "name": "Jakafi", "name_param": "Jakafi"}, {
                "id": "44",
                "name": "Jalyn",
                "name_param": "Jalyn"
            }, {"id": "64", "name": "Jantoven", "name_param": "Jantoven"}, {
                "id": "83",
                "name": "Janumet",
                "name_param": "Janumet"
            }, {"id": "103", "name": "Janumet XR", "name_param": "JanumetXR"}, {
                "id": "124",
                "name": "Januvia",
                "name_param": "Januvia"
            }, {"id": "146", "name": "Jardiance", "name_param": "Jardiance"}, {
                "id": "169",
                "name": "Jentadueto",
                "name_param": "Jentadueto"
            }, {"id": "193", "name": "Jevtana", "name_param": "Jevtana"}, {
                "id": "218",
                "name": "Jublia",
                "name_param": "Jublia"
            }, {"id": "244", "name": "Juxtapid", "name_param": "Juxtapid"}, {
                "id": "29",
                "name": "Kadcyla",
                "name_param": "Kadcyla"
            }, {"id": "45", "name": "Kadian", "name_param": "Kadian"}, {
                "id": "65",
                "name": "Kalbitor",
                "name_param": "Kalbitor"
            }, {"id": "84", "name": "Kaletra", "name_param": "Kaletra"}, {
                "id": "104",
                "name": "Kalydeco",
                "name_param": "Kalydeco"
            }, {"id": "125", "name": "Kapvay", "name_param": "Kapvay"}, {
                "id": "147",
                "name": "Kazano",
                "name_param": "Kazano"
            }, {"id": "170", "name": "Kenalog", "name_param": "Kenalog"}, {
                "id": "194",
                "name": "Keppra",
                "name_param": "Keppra"
            }, {"id": "219", "name": "Keppra Solution", "name_param": "KeppraSolution"}, {
                "id": "245",
                "name": "Keppra XR",
                "name_param": "KeppraXR"
            }, {"id": "271", "name": "Kerlone", "name_param": "Kerlone"}, {
                "id": "295",
                "name": "Kerydin",
                "name_param": "Kerydin"
            }, {"id": "319", "name": "Ketek", "name_param": "Ketek"}, {
                "id": "320",
                "name": "Ketoconazole",
                "name_param": "Ketoconazole"
            }, {"id": "343", "name": "Ketoprofen ER", "name_param": "KetoprofenER"}, {
                "id": "365",
                "name": "Ketorolac",
                "name_param": "Ketorolac"
            }, {"id": "387", "name": "Ketorolac (Acular\/LS)", "name_param": "Ketorolac(Acular\/LS)"}, {
                "id": "409",
                "name": "Keytruda",
                "name_param": "Keytruda"
            }, {"id": "432", "name": "Khedezla", "name_param": "Khedezla"}, {
                "id": "454",
                "name": "Kineret",
                "name_param": "Kineret"
            }, {"id": "477", "name": "Klaron", "name_param": "Klaron"}, {
                "id": "499",
                "name": "Klonopin",
                "name_param": "Klonopin"
            }, {"id": "522", "name": "Koate DVI", "name_param": "KoateDVI"}, {
                "id": "543",
                "name": "Kogenate FS",
                "name_param": "KogenateFS"
            }, {"id": "564", "name": "Kombiglyze XR", "name_param": "KombiglyzeXR"}, {
                "id": "585",
                "name": "Korlym",
                "name_param": "Korlym"
            }, {"id": "606", "name": "Kristalose", "name_param": "Kristalose"}, {
                "id": "627",
                "name": "Krystexxa",
                "name_param": "Krystexxa"
            }, {"id": "648", "name": "Kuvan", "name_param": "Kuvan"}, {
                "id": "669",
                "name": "Kynamro",
                "name_param": "Kynamro"
            }, {"id": "690", "name": "Kyprolis", "name_param": "Kyprolis"}, {
                "id": "30",
                "name": "Labetalol",
                "name_param": "Labetalol"
            }, {"id": "46", "name": "Lacrisert", "name_param": "Lacrisert"}, {
                "id": "66",
                "name": "Lactulose",
                "name_param": "Lactulose"
            }, {"id": "85", "name": "Lamictal", "name_param": "Lamictal"}, {
                "id": "105",
                "name": "Lamictal ODT",
                "name_param": "LamictalODT"
            }, {"id": "126", "name": "Lamictal XR", "name_param": "LamictalXR"}, {
                "id": "148",
                "name": "Lamisil (oral)",
                "name_param": "Lamisil(oral)"
            }, {"id": "171", "name": "Lamivudine", "name_param": "Lamivudine"}, {
                "id": "195",
                "name": "Lamivudine\/Zidovudine",
                "name_param": "Lamivudine\/Zidovudine"
            }, {"id": "220", "name": "Lamotrigine", "name_param": "Lamotrigine"}, {
                "id": "246",
                "name": "Lamotrigine XR",
                "name_param": "LamotrigineXR"
            }, {"id": "272", "name": "Lanoxin", "name_param": "Lanoxin"}, {
                "id": "296",
                "name": "Lanoxin (new strengths)",
                "name_param": "Lanoxin(newstrengths)"
            }, {"id": "321", "name": "Lansoprazole", "name_param": "Lansoprazole"}, {
                "id": "344",
                "name": "Lantus Solostar",
                "name_param": "LantusSolostar"
            }, {"id": "366", "name": "Lantus vial", "name_param": "Lantusvial"}, {
                "id": "388",
                "name": "Lastacaft",
                "name_param": "Lastacaft"
            }, {"id": "410", "name": "Latanoprost", "name_param": "Latanoprost"}, {
                "id": "433",
                "name": "Latuda",
                "name_param": "Latuda"
            }, {"id": "455", "name": "Lazanda", "name_param": "Lazanda"}, {
                "id": "478",
                "name": "Leflunomide",
                "name_param": "Leflunomide"
            }, {"id": "500", "name": "Lescol", "name_param": "Lescol"}, {
                "id": "523",
                "name": "Lescol XL",
                "name_param": "LescolXL"
            }, {"id": "544", "name": "Letairis", "name_param": "Letairis"}, {
                "id": "565",
                "name": "Letrozole",
                "name_param": "Letrozole"
            }, {"id": "586", "name": "Leukeran", "name_param": "Leukeran"}, {
                "id": "607",
                "name": "Leukine",
                "name_param": "Leukine"
            }, {"id": "628", "name": "Levalbuterol Nebulizer", "name_param": "LevalbuterolNebulizer"}, {
                "id": "649",
                "name": "Levaquin",
                "name_param": "Levaquin"
            }, {"id": "670", "name": "Levatol", "name_param": "Levatol"}, {
                "id": "691",
                "name": "Levemir FlexPen",
                "name_param": "LevemirFlexPen"
            }, {"id": "711", "name": "Levemir FlexTouch Pen", "name_param": "LevemirFlexTouchPen"}, {
                "id": "731",
                "name": "Levemir vial",
                "name_param": "Levemirvial"
            }, {"id": "751", "name": "Levetiracetam", "name_param": "Levetiracetam"}, {
                "id": "771",
                "name": "Levitra",
                "name_param": "Levitra"
            }, {"id": "791", "name": "Levobunolol", "name_param": "Levobunolol"}, {
                "id": "810",
                "name": "Levocetirizine",
                "name_param": "Levocetirizine"
            }, {"id": "829", "name": "Levofloxacin", "name_param": "Levofloxacin"}, {
                "id": "848",
                "name": "Levothyroxine",
                "name_param": "Levothyroxine"
            }, {"id": "867", "name": "Levoxyl", "name_param": "Levoxyl"}, {
                "id": "885",
                "name": "Levulan Kerastick",
                "name_param": "LevulanKerastick"
            }, {"id": "903", "name": "Lexapro", "name_param": "Lexapro"}, {
                "id": "921",
                "name": "Lexapro Solution",
                "name_param": "LexaproSolution"
            }, {"id": "939", "name": "Lexiva", "name_param": "Lexiva"}, {
                "id": "956",
                "name": "Lialda",
                "name_param": "Lialda"
            }, {"id": "973", "name": "Lidoderm", "name_param": "Lidoderm"}, {
                "id": "990",
                "name": "Lindane Shampoo",
                "name_param": "LindaneShampoo"
            }, {"id": "1008", "name": "Linzess", "name_param": "Linzess"}, {
                "id": "1026",
                "name": "Liothyronine",
                "name_param": "Liothyronine"
            }, {"id": "1043", "name": "Lipitor", "name_param": "Lipitor"}, {
                "id": "1060",
                "name": "Lipofen",
                "name_param": "Lipofen"
            }, {"id": "1076", "name": "Liptruzet", "name_param": "Liptruzet"}, {
                "id": "1092",
                "name": "Lithobid",
                "name_param": "Lithobid"
            }, {"id": "1108", "name": "Lithostat", "name_param": "Lithostat"}, {
                "id": "1124",
                "name": "Livalo",
                "name_param": "Livalo"
            }, {"id": "1204", "name": "Lo Loestrin Fe", "name_param": "LoLoestrinFe"}, {
                "id": "1140",
                "name": "Locoid Lipocream",
                "name_param": "LocoidLipocream"
            }, {"id": "1156", "name": "Locoid Lotion", "name_param": "LocoidLotion"}, {
                "id": "1172",
                "name": "Loestrin Fe 1\/20",
                "name_param": "LoestrinFe1\/20"
            }, {"id": "1188", "name": "Lofibra", "name_param": "Lofibra"}, {
                "id": "1220",
                "name": "Lomedia 24 FE",
                "name_param": "Lomedia24FE"
            }, {"id": "1238", "name": "Lomotil", "name_param": "Lomotil"}, {
                "id": "1255",
                "name": "Lomustine",
                "name_param": "Lomustine"
            }, {"id": "1272", "name": "Loperamide", "name_param": "Loperamide"}, {
                "id": "1288",
                "name": "Lopid",
                "name_param": "Lopid"
            }, {"id": "1304", "name": "Lopressor", "name_param": "Lopressor"}, {
                "id": "1320",
                "name": "Lopressor HCT",
                "name_param": "LopressorHCT"
            }, {"id": "1336", "name": "Loprox Gel", "name_param": "LoproxGel"}, {
                "id": "1351",
                "name": "Loprox Shampoo",
                "name_param": "LoproxShampoo"
            }, {"id": "1365", "name": "Lorazepam", "name_param": "Lorazepam"}, {
                "id": "1379",
                "name": "Loryna",
                "name_param": "Loryna"
            }, {"id": "1394", "name": "Lorzone", "name_param": "Lorzone"}, {
                "id": "1408",
                "name": "Losartan",
                "name_param": "Losartan"
            }, {"id": "1422", "name": "Losartan\/HCTZ", "name_param": "Losartan\/HCTZ"}, {
                "id": "1436",
                "name": "LoSeasonique",
                "name_param": "LoSeasonique"
            }, {"id": "1450", "name": "Lotemax Gel", "name_param": "LotemaxGel"}, {
                "id": "1464",
                "name": "Lotemax Ointment",
                "name_param": "LotemaxOintment"
            }, {"id": "1478", "name": "Lotemax Suspension", "name_param": "LotemaxSuspension"}, {
                "id": "1492",
                "name": "Lotensin",
                "name_param": "Lotensin"
            }, {"id": "1507", "name": "Lotensin HCT", "name_param": "LotensinHCT"}, {
                "id": "1519",
                "name": "Lotrel",
                "name_param": "Lotrel"
            }, {"id": "1533", "name": "Lotronex", "name_param": "Lotronex"}, {
                "id": "1545",
                "name": "Lovastatin",
                "name_param": "Lovastatin"
            }, {"id": "1556", "name": "Lovaza", "name_param": "Lovaza"}, {
                "id": "1567",
                "name": "Lovenox",
                "name_param": "Lovenox"
            }, {"id": "1577", "name": "Lucentis", "name_param": "Lucentis"}, {
                "id": "1587",
                "name": "Lumigan",
                "name_param": "Lumigan"
            }, {"id": "1596", "name": "Lunesta", "name_param": "Lunesta"}, {
                "id": "1604",
                "name": "Lupron Depot",
                "name_param": "LupronDepot"
            }, {"id": "1612", "name": "Luvox CR", "name_param": "LuvoxCR"}, {
                "id": "1620",
                "name": "Luxiq",
                "name_param": "Luxiq"
            }, {"id": "1627", "name": "LUZU Cream", "name_param": "LUZUCream"}, {
                "id": "1633",
                "name": "Lycelle",
                "name_param": "Lycelle"
            }, {"id": "1639", "name": "Lyrica", "name_param": "Lyrica"}, {
                "id": "1645",
                "name": "Lysodren",
                "name_param": "Lysodren"
            }, {"id": "31", "name": "Macugen", "name_param": "Macugen"}, {
                "id": "47",
                "name": "Malathion Lotion",
                "name_param": "MalathionLotion"
            }, {"id": "67", "name": "Marplan", "name_param": "Marplan"}, {
                "id": "86",
                "name": "Matulane",
                "name_param": "Matulane"
            }, {"id": "106", "name": "Mavik", "name_param": "Mavik"}, {
                "id": "127",
                "name": "Maxalt",
                "name_param": "Maxalt"
            }, {"id": "149", "name": "Maxalt-MLT", "name_param": "Maxalt-MLT"}, {
                "id": "172",
                "name": "Maxidex",
                "name_param": "Maxidex"
            }, {"id": "196", "name": "Maxitrol", "name_param": "Maxitrol"}, {
                "id": "221",
                "name": "Medroxyprogesterone",
                "name_param": "Medroxyprogesterone"
            }, {
                "id": "247",
                "name": "Medroxyprogesterone Injection",
                "name_param": "MedroxyprogesteroneInjection"
            }, {"id": "273", "name": "Mekinist", "name_param": "Mekinist"}, {
                "id": "297",
                "name": "Meloxicam",
                "name_param": "Meloxicam"
            }, {"id": "322", "name": "Menest", "name_param": "Menest"}, {
                "id": "345",
                "name": "Menopur",
                "name_param": "Menopur"
            }, {"id": "367", "name": "Menostar", "name_param": "Menostar"}, {
                "id": "389",
                "name": "Mentax",
                "name_param": "Mentax"
            }, {"id": "411", "name": "Mesalamine", "name_param": "Mesalamine"}, {
                "id": "434",
                "name": "Metadate CD",
                "name_param": "MetadateCD"
            }, {"id": "456", "name": "Metadate ER", "name_param": "MetadateER"}, {
                "id": "479",
                "name": "Metanx",
                "name_param": "Metanx"
            }, {"id": "501", "name": "Metaxalone", "name_param": "Metaxalone"}, {
                "id": "524",
                "name": "Metformin",
                "name_param": "Metformin"
            }, {"id": "545", "name": "Metformin ER", "name_param": "MetforminER"}, {
                "id": "566",
                "name": "Metformin\/glipizide",
                "name_param": "Metformin\/glipizide"
            }, {"id": "587", "name": "Metformin\/glyburide", "name_param": "Metformin\/glyburide"}, {
                "id": "608",
                "name": "Methadone",
                "name_param": "Methadone"
            }, {"id": "629", "name": "Methotrexate", "name_param": "Methotrexate"}, {
                "id": "650",
                "name": "Methotrexate Injection",
                "name_param": "MethotrexateInjection"
            }, {"id": "671", "name": "methscopolamine", "name_param": "methscopolamine"}, {
                "id": "692",
                "name": "Methylin Solution",
                "name_param": "MethylinSolution"
            }, {"id": "712", "name": "Methylphenidate", "name_param": "Methylphenidate"}, {
                "id": "732",
                "name": "Methylphenidate ER",
                "name_param": "MethylphenidateER"
            }, {"id": "752", "name": "Methylphenidate SR", "name_param": "MethylphenidateSR"}, {
                "id": "772",
                "name": "Metipranolol",
                "name_param": "Metipranolol"
            }, {"id": "792", "name": "Metoprolol", "name_param": "Metoprolol"}, {
                "id": "830",
                "name": "Metoprolol XL",
                "name_param": "MetoprololXL"
            }, {"id": "811", "name": "Metoprolol\/HCTZ", "name_param": "Metoprolol\/HCTZ"}, {
                "id": "849",
                "name": "Metozolv ODT",
                "name_param": "MetozolvODT"
            }, {"id": "868", "name": "Metrogel 1%", "name_param": "Metrogel1%"}, {
                "id": "886",
                "name": "Metrogel 1% Pump",
                "name_param": "Metrogel1%Pump"
            }, {"id": "904", "name": "Metronidazole Gel 0.75%", "name_param": "MetronidazoleGel0.75%"}, {
                "id": "922",
                "name": "Metronidazole Gel 1%",
                "name_param": "MetronidazoleGel1%"
            }, {"id": "940", "name": "Mevacor", "name_param": "Mevacor"}, {
                "id": "957",
                "name": "Miacalcin",
                "name_param": "Miacalcin"
            }, {"id": "974", "name": "Micardis", "name_param": "Micardis"}, {
                "id": "991",
                "name": "Micardis HCT",
                "name_param": "MicardisHCT"
            }, {"id": "1009", "name": "Migranal", "name_param": "Migranal"}, {
                "id": "1027",
                "name": "Minastrin 24 Fe",
                "name_param": "Minastrin24Fe"
            }, {"id": "1044", "name": "Minipress", "name_param": "Minipress"}, {
                "id": "1061",
                "name": "Minitran",
                "name_param": "Minitran"
            }, {"id": "1077", "name": "Minivelle", "name_param": "Minivelle"}, {
                "id": "1093",
                "name": "Minocin",
                "name_param": "Minocin"
            }, {"id": "1109", "name": "Minocycline", "name_param": "Minocycline"}, {
                "id": "1125",
                "name": "Minocycline ER",
                "name_param": "MinocyclineER"
            }, {"id": "1141", "name": "Mirapex", "name_param": "Mirapex"}, {
                "id": "1157",
                "name": "Mirapex ER",
                "name_param": "MirapexER"
            }, {"id": "1173", "name": "Mircette", "name_param": "Mircette"}, {
                "id": "1189",
                "name": "Mirena",
                "name_param": "Mirena"
            }, {"id": "1205", "name": "Mirtazapine", "name_param": "Mirtazapine"}, {
                "id": "1221",
                "name": "Mirtazapine Soltab",
                "name_param": "MirtazapineSoltab"
            }, {"id": "1239", "name": "Mirvaso", "name_param": "Mirvaso"}, {
                "id": "1256",
                "name": "Misoprostol",
                "name_param": "Misoprostol"
            }, {"id": "1273", "name": "Mitigare", "name_param": "Mitigare"}, {
                "id": "1289",
                "name": "Mitoxantrone",
                "name_param": "Mitoxantrone"
            }, {"id": "1305", "name": "Mobic", "name_param": "Mobic"}, {
                "id": "1321",
                "name": "Modafinil",
                "name_param": "Modafinil"
            }, {"id": "1337", "name": "Modicon 28", "name_param": "Modicon28"}, {
                "id": "1352",
                "name": "moexipril",
                "name_param": "moexipril"
            }, {"id": "1366", "name": "moexipril\/HCTZ", "name_param": "moexipril\/HCTZ"}, {
                "id": "1380",
                "name": "Monoclate-P",
                "name_param": "Monoclate-P"
            }, {"id": "1395", "name": "Monodox", "name_param": "Monodox"}, {
                "id": "1409",
                "name": "Mononine",
                "name_param": "Mononine"
            }, {"id": "1423", "name": "Montelukast", "name_param": "Montelukast"}, {
                "id": "1437",
                "name": "Monurol",
                "name_param": "Monurol"
            }, {"id": "1451", "name": "Morphine ER", "name_param": "MorphineER"}, {
                "id": "1465",
                "name": "Morphine Sulfate ER (Avinza)",
                "name_param": "MorphineSulfateER(Avinza)"
            }, {
                "id": "1479",
                "name": "Morphine Sulfate ER (Kadian)",
                "name_param": "MorphineSulfateER(Kadian)"
            }, {"id": "1493", "name": "MoviPrep", "name_param": "MoviPrep"}, {
                "id": "1508",
                "name": "Moxatag",
                "name_param": "Moxatag"
            }, {"id": "1520", "name": "Moxeza", "name_param": "Moxeza"}, {
                "id": "1521",
                "name": "Mozobil",
                "name_param": "Mozobil"
            }, {"id": "1534", "name": "MS Contin", "name_param": "MSContin"}, {
                "id": "1546",
                "name": "Mugard",
                "name_param": "Mugard"
            }, {"id": "1557", "name": "Multaq", "name_param": "Multaq"}, {
                "id": "1568",
                "name": "Mupirocin",
                "name_param": "Mupirocin"
            }, {"id": "1578", "name": "Mustargen", "name_param": "Mustargen"}, {
                "id": "1588",
                "name": "Mycophenolate Mofetil",
                "name_param": "MycophenolateMofetil"
            }, {"id": "1597", "name": "Mycophenolic acid", "name_param": "Mycophenolicacid"}, {
                "id": "1605",
                "name": "Myfortic",
                "name_param": "Myfortic"
            }, {"id": "1613", "name": "Myleran", "name_param": "Myleran"}, {
                "id": "1621",
                "name": "Myrbetriq",
                "name_param": "Myrbetriq"
            }, {"id": "32", "name": "Nabumetone", "name_param": "Nabumetone"}, {
                "id": "48",
                "name": "Nadolol",
                "name_param": "Nadolol"
            }, {
                "id": "68",
                "name": "nadolol\/bendroflumethiazide",
                "name_param": "nadolol\/bendroflumethiazide"
            }, {"id": "87", "name": "Naftin 1%", "name_param": "Naftin1%"}, {
                "id": "107",
                "name": "Naftin 2%",
                "name_param": "Naftin2%"
            }, {"id": "128", "name": "Naglazyme", "name_param": "Naglazyme"}, {
                "id": "150",
                "name": "Nalfon",
                "name_param": "Nalfon"
            }, {"id": "173", "name": "Naltrexone", "name_param": "Naltrexone"}, {
                "id": "197",
                "name": "Namenda",
                "name_param": "Namenda"
            }, {"id": "222", "name": "Namenda XR", "name_param": "NamendaXR"}, {
                "id": "248",
                "name": "Naprelan",
                "name_param": "Naprelan"
            }, {"id": "274", "name": "Naprosyn-EC", "name_param": "Naprosyn-EC"}, {
                "id": "298",
                "name": "Naratriptan",
                "name_param": "Naratriptan"
            }, {"id": "323", "name": "Nardil", "name_param": "Nardil"}, {
                "id": "346",
                "name": "Nascobal",
                "name_param": "Nascobal"
            }, {"id": "368", "name": "Nasonex", "name_param": "Nasonex"}, {
                "id": "390",
                "name": "Natacyn",
                "name_param": "Natacyn"
            }, {"id": "412", "name": "Natazia", "name_param": "Natazia"}, {
                "id": "435",
                "name": "Nateglinide",
                "name_param": "Nateglinide"
            }, {"id": "457", "name": "Natroba", "name_param": "Natroba"}, {
                "id": "480",
                "name": "Necon 1\/35",
                "name_param": "Necon1\/35"
            }, {"id": "502", "name": "Neoral", "name_param": "Neoral"}, {
                "id": "525",
                "name": "Nesina",
                "name_param": "Nesina"
            }, {"id": "546", "name": "Neulasta", "name_param": "Neulasta"}, {
                "id": "567",
                "name": "Neupogen",
                "name_param": "Neupogen"
            }, {"id": "588", "name": "Neupro", "name_param": "Neupro"}, {
                "id": "609",
                "name": "Neurontin",
                "name_param": "Neurontin"
            }, {"id": "630", "name": "Neurontin Solution", "name_param": "NeurontinSolution"}, {
                "id": "651",
                "name": "Nevanac",
                "name_param": "Nevanac"
            }, {"id": "672", "name": "Nevirapine", "name_param": "Nevirapine"}, {
                "id": "693",
                "name": "Nexavar",
                "name_param": "Nexavar"
            }, {"id": "713", "name": "Nexium", "name_param": "Nexium"}, {
                "id": "733",
                "name": "Nexium Granules for Oral Suspension",
                "name_param": "NexiumGranulesforOralSuspension"
            }, {"id": "753", "name": "Nexplanon", "name_param": "Nexplanon"}, {
                "id": "773",
                "name": "Niaspan",
                "name_param": "Niaspan"
            }, {"id": "793", "name": "Nicardipine", "name_param": "Nicardipine"}, {
                "id": "812",
                "name": "Nicotrol Inhaler",
                "name_param": "NicotrolInhaler"
            }, {"id": "831", "name": "Nicotrol NS", "name_param": "NicotrolNS"}, {
                "id": "850",
                "name": "Nifedipine",
                "name_param": "Nifedipine"
            }, {"id": "869", "name": "Nifedipine ER", "name_param": "NifedipineER"}, {
                "id": "887",
                "name": "Nilandron",
                "name_param": "Nilandron"
            }, {"id": "905", "name": "Nimodipine", "name_param": "Nimodipine"}, {
                "id": "923",
                "name": "Niravam",
                "name_param": "Niravam"
            }, {"id": "924", "name": "Nitro-Dur", "name_param": "Nitro-Dur"}, {
                "id": "941",
                "name": "Nitroglycerin transdermal",
                "name_param": "Nitroglycerintransdermal"
            }, {"id": "958", "name": "Nitrolingual Pumpspray", "name_param": "NitrolingualPumpspray"}, {
                "id": "975",
                "name": "Nitrostat",
                "name_param": "Nitrostat"
            }, {"id": "992", "name": "Norco", "name_param": "Norco"}, {
                "id": "1010",
                "name": "Norditropin FlexPro",
                "name_param": "NorditropinFlexPro"
            }, {"id": "1028", "name": "Norditropin Nordiflex", "name_param": "NorditropinNordiflex"}, {
                "id": "1045",
                "name": "Norethindrone",
                "name_param": "Norethindrone"
            }, {"id": "1062", "name": "Noritate", "name_param": "Noritate"}, {
                "id": "1078",
                "name": "Norpace",
                "name_param": "Norpace"
            }, {"id": "1094", "name": "Norpace CR", "name_param": "NorpaceCR"}, {
                "id": "1110",
                "name": "Norpramin",
                "name_param": "Norpramin"
            }, {"id": "1126", "name": "Norvasc", "name_param": "Norvasc"}, {
                "id": "1142",
                "name": "Norvir",
                "name_param": "Norvir"
            }, {"id": "1158", "name": "Nova Max Test Strips", "name_param": "NovaMaxTestStrips"}, {
                "id": "1174",
                "name": "NovoFine Autocover",
                "name_param": "NovoFineAutocover"
            }, {"id": "1190", "name": "NovoFine Pen Needles", "name_param": "NovoFinePenNeedles"}, {
                "id": "1206",
                "name": "Novolin 70\/30 vial",
                "name_param": "Novolin70\/30vial"
            }, {"id": "1222", "name": "Novolin N vial", "name_param": "NovolinNvial"}, {
                "id": "1240",
                "name": "Novolin R vial",
                "name_param": "NovolinRvial"
            }, {"id": "1257", "name": "NovoLog FlexPen", "name_param": "NovoLogFlexPen"}, {
                "id": "1274",
                "name": "NovoLog Mix 70\/30 FlexPen",
                "name_param": "NovoLogMix70\/30FlexPen"
            }, {"id": "1290", "name": "Novolog Mix 70\/30 vial", "name_param": "NovologMix70\/30vial"}, {
                "id": "1306",
                "name": "Novolog vial",
                "name_param": "Novologvial"
            }, {"id": "1322", "name": "NovoSeven RT", "name_param": "NovoSevenRT"}, {
                "id": "1338",
                "name": "Noxafil Suspension",
                "name_param": "NoxafilSuspension"
            }, {"id": "1353", "name": "Noxafil Tablets", "name_param": "NoxafilTablets"}, {
                "id": "1367",
                "name": "Nplate",
                "name_param": "Nplate"
            }, {"id": "1381", "name": "Nucynta", "name_param": "Nucynta"}, {
                "id": "1396",
                "name": "Nucynta ER",
                "name_param": "NucyntaER"
            }, {"id": "1410", "name": "Nuedexta", "name_param": "Nuedexta"}, {
                "id": "1424",
                "name": "Nulojix",
                "name_param": "Nulojix"
            }, {"id": "1438", "name": "Nulytely", "name_param": "Nulytely"}, {
                "id": "1452",
                "name": "Nutropin AQ",
                "name_param": "NutropinAQ"
            }, {"id": "1466", "name": "NuvaRing", "name_param": "NuvaRing"}, {
                "id": "1480",
                "name": "Nuvigil",
                "name_param": "Nuvigil"
            }, {"id": "1494", "name": "Nystatin", "name_param": "Nystatin"}, {
                "id": "33",
                "name": "Ocella",
                "name_param": "Ocella"
            }, {"id": "49", "name": "Octagam", "name_param": "Octagam"}, {
                "id": "69",
                "name": "Octreotide",
                "name_param": "Octreotide"
            }, {"id": "88", "name": "Ocufen", "name_param": "Ocufen"}, {
                "id": "108",
                "name": "Ocuflox",
                "name_param": "Ocuflox"
            }, {"id": "129", "name": "Ofev", "name_param": "Ofev"}, {
                "id": "151",
                "name": "Ofloxacin (Ocuflox)",
                "name_param": "Ofloxacin(Ocuflox)"
            }, {"id": "174", "name": "Olanzapine", "name_param": "Olanzapine"}, {
                "id": "198",
                "name": "Olanzapine ODT",
                "name_param": "OlanzapineODT"
            }, {"id": "223", "name": "Oleptro", "name_param": "Oleptro"}, {
                "id": "249",
                "name": "Olux",
                "name_param": "Olux"
            }, {"id": "275", "name": "Olux-E", "name_param": "Olux-E"}, {
                "id": "299",
                "name": "Olysio",
                "name_param": "Olysio"
            }, {"id": "300", "name": "Omeclamox-Pak", "name_param": "Omeclamox-Pak"}, {
                "id": "324",
                "name": "Omega-3-acid Ethyl Esters",
                "name_param": "Omega-3-acidEthylEsters"
            }, {"id": "347", "name": "Omeprazole", "name_param": "Omeprazole"}, {
                "id": "369",
                "name": "Omeprazole\/Sodium bicarbonate",
                "name_param": "Omeprazole\/Sodiumbicarbonate"
            }, {"id": "391", "name": "Omnaris", "name_param": "Omnaris"}, {
                "id": "413",
                "name": "Omnipred ",
                "name_param": "Omnipred"
            }, {"id": "436", "name": "Omnitrope Cartridge", "name_param": "OmnitropeCartridge"}, {
                "id": "458",
                "name": "Omnitrope Vial",
                "name_param": "OmnitropeVial"
            }, {"id": "481", "name": "Oncaspar", "name_param": "Oncaspar"}, {
                "id": "503",
                "name": "Ondansetron",
                "name_param": "Ondansetron"
            }, {"id": "526", "name": "Ondansetron ODT", "name_param": "OndansetronODT"}, {
                "id": "547",
                "name": "OneTouch Test Strips",
                "name_param": "OneTouchTestStrips"
            }, {"id": "568", "name": "OneTouch Ultra 2", "name_param": "OneTouchUltra2"}, {
                "id": "589",
                "name": "OneTouch Ultra Blue Test Strips",
                "name_param": "OneTouchUltraBlueTestStrips"
            }, {"id": "610", "name": "OneTouch UltraMini", "name_param": "OneTouchUltraMini"}, {
                "id": "631",
                "name": "OneTouch UltraSmart",
                "name_param": "OneTouchUltraSmart"
            }, {
                "id": "652",
                "name": "OneTouch Verio Test Strips",
                "name_param": "OneTouchVerioTestStrips"
            }, {"id": "673", "name": "Onfi", "name_param": "Onfi"}, {
                "id": "694",
                "name": "Onglyza",
                "name_param": "Onglyza"
            }, {"id": "714", "name": "Onmel", "name_param": "Onmel"}, {
                "id": "734",
                "name": "Opana",
                "name_param": "Opana"
            }, {"id": "754", "name": "Opana ER", "name_param": "OpanaER"}, {
                "id": "774",
                "name": "Opsumit",
                "name_param": "Opsumit"
            }, {"id": "794", "name": "Optipranolol", "name_param": "Optipranolol"}, {
                "id": "813",
                "name": "Optivar",
                "name_param": "Optivar"
            }, {"id": "832", "name": "Oracea", "name_param": "Oracea"}, {
                "id": "851",
                "name": "Oralair",
                "name_param": "Oralair"
            }, {"id": "870", "name": "Orapred ODT", "name_param": "OrapredODT"}, {
                "id": "888",
                "name": "Oravig",
                "name_param": "Oravig"
            }, {"id": "906", "name": "Orbivan", "name_param": "Orbivan"}, {
                "id": "925",
                "name": "Orbivan CF",
                "name_param": "OrbivanCF"
            }, {"id": "942", "name": "Orencia", "name_param": "Orencia"}, {
                "id": "959",
                "name": "Orencia SC",
                "name_param": "OrenciaSC"
            }, {"id": "976", "name": "Orenitram", "name_param": "Orenitram"}, {
                "id": "1046",
                "name": "Ortho Evra (3)",
                "name_param": "OrthoEvra(3)"
            }, {"id": "1063", "name": "Ortho Micronor", "name_param": "OrthoMicronor"}, {
                "id": "1111",
                "name": "Ortho Tri-Cyclen",
                "name_param": "OrthoTri-Cyclen"
            }, {"id": "1127", "name": "Ortho Tri-Cyclen Lo", "name_param": "OrthoTri-CyclenLo"}, {
                "id": "993",
                "name": "Ortho-Cept",
                "name_param": "Ortho-Cept"
            }, {"id": "1011", "name": "Ortho-Cyclen", "name_param": "Ortho-Cyclen"}, {
                "id": "1029",
                "name": "Ortho-Est",
                "name_param": "Ortho-Est"
            }, {"id": "1079", "name": "Ortho-Novum 1\/35", "name_param": "Ortho-Novum1\/35"}, {
                "id": "1095",
                "name": "Ortho-Novum 7\/7\/7-28",
                "name_param": "Ortho-Novum7\/7\/7-28"
            }, {"id": "1143", "name": "Orthovisc", "name_param": "Orthovisc"}, {
                "id": "1159",
                "name": "Oseni",
                "name_param": "Oseni"
            }, {"id": "1175", "name": "Osmoprep", "name_param": "Osmoprep"}, {
                "id": "1191",
                "name": "Osphena",
                "name_param": "Osphena"
            }, {"id": "1207", "name": "Otezla", "name_param": "Otezla"}, {
                "id": "1223",
                "name": "Otezla Starter Pack ",
                "name_param": "OtezlaStarterPack"
            }, {"id": "1241", "name": "Otic Care", "name_param": "OticCare"}, {
                "id": "1258",
                "name": "Otrexup",
                "name_param": "Otrexup"
            }, {"id": "1275", "name": "Ovace Plus Cream", "name_param": "OvacePlusCream"}, {
                "id": "1291",
                "name": "Ovace Plus Shampoo",
                "name_param": "OvacePlusShampoo"
            }, {"id": "1307", "name": "Ovace Plus Wash", "name_param": "OvacePlusWash"}, {
                "id": "1323",
                "name": "Ovace Wash",
                "name_param": "OvaceWash"
            }, {"id": "1339", "name": "Ovide", "name_param": "Ovide"}, {
                "id": "1354",
                "name": "Oxaprozin",
                "name_param": "Oxaprozin"
            }, {"id": "1368", "name": "Oxcarbazepine", "name_param": "Oxcarbazepine"}, {
                "id": "1382",
                "name": "Oxistat Cream",
                "name_param": "OxistatCream"
            }, {"id": "1397", "name": "Oxtellar XR", "name_param": "OxtellarXR"}, {
                "id": "1411",
                "name": "Oxybutynin",
                "name_param": "Oxybutynin"
            }, {"id": "1425", "name": "Oxybutynin ER", "name_param": "OxybutyninER"}, {
                "id": "1467",
                "name": "Oxycodone \/Ibuprofen",
                "name_param": "Oxycodone\/Ibuprofen"
            }, {"id": "1481", "name": "Oxycodone Solution", "name_param": "OxycodoneSolution"}, {
                "id": "1439",
                "name": "Oxycodone\/acetaminophen",
                "name_param": "Oxycodone\/acetaminophen"
            }, {"id": "1453", "name": "Oxycodone\/Aspirin", "name_param": "Oxycodone\/Aspirin"}, {
                "id": "1495",
                "name": "OxyContin",
                "name_param": "OxyContin"
            }, {"id": "1509", "name": "Oxymorphone ER", "name_param": "OxymorphoneER"}, {
                "id": "1522",
                "name": "Oxytrol",
                "name_param": "Oxytrol"
            }, {"id": "34", "name": "Pacerone", "name_param": "Pacerone"}, {
                "id": "50",
                "name": "Pamine",
                "name_param": "Pamine"
            }, {"id": "70", "name": "Pancreaze", "name_param": "Pancreaze"}, {
                "id": "89",
                "name": "Pancrelipase",
                "name_param": "Pancrelipase"
            }, {"id": "109", "name": "Pandel ", "name_param": "Pandel"}, {
                "id": "130",
                "name": "Panretin",
                "name_param": "Panretin"
            }, {"id": "152", "name": "Pantoprazole", "name_param": "Pantoprazole"}, {
                "id": "175",
                "name": "ParaGard",
                "name_param": "ParaGard"
            }, {"id": "199", "name": "Parcopa", "name_param": "Parcopa"}, {
                "id": "224",
                "name": "Parnate",
                "name_param": "Parnate"
            }, {"id": "250", "name": "Paroxetine", "name_param": "Paroxetine"}, {
                "id": "276",
                "name": "Paroxetine CR",
                "name_param": "ParoxetineCR"
            }, {"id": "301", "name": "Pataday", "name_param": "Pataday"}, {
                "id": "325",
                "name": "Patanase",
                "name_param": "Patanase"
            }, {"id": "348", "name": "Patanol", "name_param": "Patanol"}, {
                "id": "370",
                "name": "Paxil",
                "name_param": "Paxil"
            }, {"id": "392", "name": "Paxil CR", "name_param": "PaxilCR"}, {
                "id": "414",
                "name": "Paxil Oral Suspension",
                "name_param": "PaxilOralSuspension"
            }, {"id": "415", "name": "Peganone", "name_param": "Peganone"}, {
                "id": "437",
                "name": "Pegasys",
                "name_param": "Pegasys"
            }, {"id": "459", "name": "PegIntron", "name_param": "PegIntron"}, {
                "id": "482",
                "name": "PegIntron Redipen",
                "name_param": "PegIntronRedipen"
            }, {"id": "504", "name": "Penlac", "name_param": "Penlac"}, {
                "id": "527",
                "name": "Pennsaid 1.5%",
                "name_param": "Pennsaid1.5%"
            }, {"id": "548", "name": "Pennsaid 2%", "name_param": "Pennsaid2%"}, {
                "id": "569",
                "name": "Pentasa",
                "name_param": "Pentasa"
            }, {"id": "590", "name": "Pentoxifylline", "name_param": "Pentoxifylline"}, {
                "id": "611",
                "name": "Percocet",
                "name_param": "Percocet"
            }, {"id": "632", "name": "Percodan", "name_param": "Percodan"}, {
                "id": "653",
                "name": "Perforomist",
                "name_param": "Perforomist"
            }, {"id": "674", "name": "Perjeta", "name_param": "Perjeta"}, {
                "id": "695",
                "name": "Permethrin Cream",
                "name_param": "PermethrinCream"
            }, {"id": "715", "name": "Persantine", "name_param": "Persantine"}, {
                "id": "735",
                "name": "Pertzye",
                "name_param": "Pertzye"
            }, {"id": "755", "name": "Pexeva", "name_param": "Pexeva"}, {
                "id": "775",
                "name": "phendimetrazine",
                "name_param": "phendimetrazine"
            }, {"id": "795", "name": "phendimetrazine ER", "name_param": "phendimetrazineER"}, {
                "id": "814",
                "name": "phentermine",
                "name_param": "phentermine"
            }, {"id": "833", "name": "Phenytoin", "name_param": "Phenytoin"}, {
                "id": "852",
                "name": "Phoslo Caps",
                "name_param": "PhosloCaps"
            }, {"id": "871", "name": "Phoslyra", "name_param": "Phoslyra"}, {
                "id": "889",
                "name": "Phospholine Iodide",
                "name_param": "PhospholineIodide"
            }, {"id": "907", "name": "Picato", "name_param": "Picato"}, {
                "id": "926",
                "name": "Pioglitazone",
                "name_param": "Pioglitazone"
            }, {
                "id": "943",
                "name": "Pioglitazone\/glimepiride",
                "name_param": "Pioglitazone\/glimepiride"
            }, {"id": "960", "name": "Pioglitazone\/metformin", "name_param": "Pioglitazone\/metformin"}, {
                "id": "977",
                "name": "Piroxicam",
                "name_param": "Piroxicam"
            }, {"id": "994", "name": "Plaquenil", "name_param": "Plaquenil"}, {
                "id": "1012",
                "name": "Plavix",
                "name_param": "Plavix"
            }, {"id": "1030", "name": "Plegridy", "name_param": "Plegridy"}, {
                "id": "1047",
                "name": "Plegridy Starter Pack",
                "name_param": "PlegridyStarterPack"
            }, {"id": "1064", "name": "Pletal", "name_param": "Pletal"}, {
                "id": "1080",
                "name": "Pneumovax 23",
                "name_param": "Pneumovax23"
            }, {"id": "1096", "name": "Podofilox", "name_param": "Podofilox"}, {
                "id": "1112",
                "name": "Polyethylene Glycol ",
                "name_param": "PolyethyleneGlycol"
            }, {
                "id": "1128",
                "name": "Polymyxin B\/Trimethoprim",
                "name_param": "PolymyxinB\/Trimethoprim"
            }, {"id": "1144", "name": "Polytrim", "name_param": "Polytrim"}, {
                "id": "1160",
                "name": "Pomalyst",
                "name_param": "Pomalyst"
            }, {
                "id": "1176",
                "name": "Potassium Citrate ER 15mEq",
                "name_param": "PotassiumCitrateER15mEq"
            }, {"id": "1192", "name": "Potiga", "name_param": "Potiga"}, {
                "id": "1208",
                "name": "Pradaxa",
                "name_param": "Pradaxa"
            }, {"id": "1224", "name": "Pramipexole", "name_param": "Pramipexole"}, {
                "id": "1242",
                "name": "Pramosone",
                "name_param": "Pramosone"
            }, {"id": "1259", "name": "PrandiMet", "name_param": "PrandiMet"}, {
                "id": "1276",
                "name": "Prandin",
                "name_param": "Prandin"
            }, {"id": "1292", "name": "Prascion", "name_param": "Prascion"}, {
                "id": "1308",
                "name": "Pravachol",
                "name_param": "Pravachol"
            }, {"id": "1324", "name": "Pravastatin", "name_param": "Pravastatin"}, {
                "id": "1340",
                "name": "Prazosin",
                "name_param": "Prazosin"
            }, {"id": "1355", "name": "Precision Xtra", "name_param": "PrecisionXtra"}, {
                "id": "1369",
                "name": "Precision Xtra Test Strips",
                "name_param": "PrecisionXtraTestStrips"
            }, {"id": "1383", "name": "Precose", "name_param": "Precose"}, {
                "id": "1398",
                "name": "Pred Forte",
                "name_param": "PredForte"
            }, {"id": "1426", "name": "Pred Mild", "name_param": "PredMild"}, {
                "id": "1412",
                "name": "Pred-G Suspension",
                "name_param": "Pred-GSuspension"
            }, {"id": "1440", "name": "Prednicarbate", "name_param": "Prednicarbate"}, {
                "id": "1454",
                "name": "Prednisolone Acetate",
                "name_param": "PrednisoloneAcetate"
            }, {
                "id": "1468",
                "name": "Prednisolone Sodium Phosphate 25mg\/5ml",
                "name_param": "PrednisoloneSodiumPhosphate25mg\/5ml"
            }, {"id": "1482", "name": "Prefest", "name_param": "Prefest"}, {
                "id": "1496",
                "name": "Pregnyl",
                "name_param": "Pregnyl"
            }, {"id": "1510", "name": "Premarin", "name_param": "Premarin"}, {
                "id": "1523",
                "name": "Premarin Vaginal Cream",
                "name_param": "PremarinVaginalCream"
            }, {"id": "1535", "name": "Premphase", "name_param": "Premphase"}, {
                "id": "1547",
                "name": "Prempro",
                "name_param": "Prempro"
            }, {"id": "1558", "name": "Prenate Enhance", "name_param": "PrenateEnhance"}, {
                "id": "1569",
                "name": "Prenate Mini",
                "name_param": "PrenateMini"
            }, {"id": "1579", "name": "Prenate Restore", "name_param": "PrenateRestore"}, {
                "id": "1589",
                "name": "Prepopik",
                "name_param": "Prepopik"
            }, {"id": "1598", "name": "Presto Test Strips", "name_param": "PrestoTestStrips"}, {
                "id": "1606",
                "name": "Prevacid Capsules",
                "name_param": "PrevacidCapsules"
            }, {"id": "1614", "name": "Prevacid SoluTab", "name_param": "PrevacidSoluTab"}, {
                "id": "1622",
                "name": "Prevnar 13",
                "name_param": "Prevnar13"
            }, {"id": "1628", "name": "Prevpac", "name_param": "Prevpac"}, {
                "id": "1634",
                "name": "Prezista",
                "name_param": "Prezista"
            }, {"id": "1640", "name": "Prilosec", "name_param": "Prilosec"}, {
                "id": "1646",
                "name": "Prinivil",
                "name_param": "Prinivil"
            }, {"id": "1651", "name": "Prinzide", "name_param": "Prinzide"}, {
                "id": "1656",
                "name": "Pristiq",
                "name_param": "Pristiq"
            }, {"id": "1661", "name": "Privigen", "name_param": "Privigen"}, {
                "id": "1666",
                "name": "ProAir HFA",
                "name_param": "ProAirHFA"
            }, {"id": "1671", "name": "Probenecid", "name_param": "Probenecid"}, {
                "id": "1676",
                "name": "Probenecid\/Colchicine",
                "name_param": "Probenecid\/Colchicine"
            }, {"id": "1681", "name": "Procardia", "name_param": "Procardia"}, {
                "id": "1686",
                "name": "Procardia XL",
                "name_param": "ProcardiaXL"
            }, {"id": "1691", "name": "ProCentra", "name_param": "ProCentra"}, {
                "id": "1695",
                "name": "Procrit",
                "name_param": "Procrit"
            }, {"id": "1699", "name": "Procysbi", "name_param": "Procysbi"}, {
                "id": "1703",
                "name": "Prodigy No Coding Test Strips",
                "name_param": "ProdigyNoCodingTestStrips"
            }, {"id": "1707", "name": "Profilnine SD", "name_param": "ProfilnineSD"}, {
                "id": "1711",
                "name": "Prograf",
                "name_param": "Prograf"
            }, {"id": "1715", "name": "Prolastin-C", "name_param": "Prolastin-C"}, {
                "id": "1719",
                "name": "Prolensa",
                "name_param": "Prolensa"
            }, {"id": "1723", "name": "Proleukin", "name_param": "Proleukin"}, {
                "id": "1727",
                "name": "Prolia",
                "name_param": "Prolia"
            }, {"id": "1731", "name": "Promacta", "name_param": "Promacta"}, {
                "id": "1735",
                "name": "Promethazine with Codeine",
                "name_param": "PromethazinewithCodeine"
            }, {"id": "1739", "name": "Prometrium", "name_param": "Prometrium"}, {
                "id": "1743",
                "name": "Propranolol (Inderal LA)",
                "name_param": "Propranolol(InderalLA)"
            }, {"id": "1747", "name": "ProQuad", "name_param": "ProQuad"}, {
                "id": "1751",
                "name": "Proscar",
                "name_param": "Proscar"
            }, {"id": "1755", "name": "Protonix", "name_param": "Protonix"}, {
                "id": "1759",
                "name": "Protonix Granules for Suspension",
                "name_param": "ProtonixGranulesforSuspension"
            }, {"id": "1763", "name": "Protopic", "name_param": "Protopic"}, {
                "id": "1767",
                "name": "Protriptyline",
                "name_param": "Protriptyline"
            }, {"id": "1771", "name": "Provenge", "name_param": "Provenge"}, {
                "id": "1775",
                "name": "Proventil HFA",
                "name_param": "ProventilHFA"
            }, {"id": "1779", "name": "Provera", "name_param": "Provera"}, {
                "id": "1783",
                "name": "Provigil",
                "name_param": "Provigil"
            }, {"id": "1787", "name": "Prozac", "name_param": "Prozac"}, {
                "id": "1791",
                "name": "Prozac Weekly",
                "name_param": "ProzacWeekly"
            }, {"id": "1795", "name": "Prudoxin", "name_param": "Prudoxin"}, {
                "id": "1799",
                "name": "Pulmicort Flexhaler",
                "name_param": "PulmicortFlexhaler"
            }, {
                "id": "1802",
                "name": "Pulmicort Respules 0.25mg & 0.5mg",
                "name_param": "PulmicortRespules0.25mg&0.5mg"
            }, {"id": "1805", "name": "Pulmicort Respules 1mg", "name_param": "PulmicortRespules1mg"}, {
                "id": "1808",
                "name": "Pulmozyme",
                "name_param": "Pulmozyme"
            }, {"id": "1811", "name": "Pylera", "name_param": "Pylera"}, {
                "id": "51",
                "name": "QNASL",
                "name_param": "QNASL"
            }, {"id": "71", "name": "Qsymia", "name_param": "Qsymia"}, {
                "id": "90",
                "name": "Quartette",
                "name_param": "Quartette"
            }, {"id": "110", "name": "Qudexy XR", "name_param": "QudexyXR"}, {
                "id": "131",
                "name": "Questran Powder",
                "name_param": "QuestranPowder"
            }, {"id": "153", "name": "Quetiapine Fumarate", "name_param": "QuetiapineFumarate"}, {
                "id": "176",
                "name": "Quillivant XR",
                "name_param": "QuillivantXR"
            }, {"id": "200", "name": "Quinapril", "name_param": "Quinapril"}, {
                "id": "225",
                "name": "Quinapril\/HCTZ",
                "name_param": "Quinapril\/HCTZ"
            }, {"id": "251", "name": "Quinaretic", "name_param": "Quinaretic"}, {
                "id": "277",
                "name": "QVAR",
                "name_param": "QVAR"
            }, {"id": "72", "name": "Rabeprazole ", "name_param": "Rabeprazole"}, {
                "id": "91",
                "name": "Ragwitek",
                "name_param": "Ragwitek"
            }, {"id": "111", "name": "Raloxifene", "name_param": "Raloxifene"}, {
                "id": "132",
                "name": "Ranexa",
                "name_param": "Ranexa"
            }, {"id": "154", "name": "Rapaflo", "name_param": "Rapaflo"}, {
                "id": "177",
                "name": "Rapamune",
                "name_param": "Rapamune"
            }, {"id": "201", "name": "Rayos", "name_param": "Rayos"}, {
                "id": "226",
                "name": "Razadyne",
                "name_param": "Razadyne"
            }, {"id": "252", "name": "Razadyne ER", "name_param": "RazadyneER"}, {
                "id": "278",
                "name": "Rebetol",
                "name_param": "Rebetol"
            }, {"id": "302", "name": "Rebif", "name_param": "Rebif"}, {
                "id": "326",
                "name": "Reclast",
                "name_param": "Reclast"
            }, {"id": "349", "name": "Recombinate", "name_param": "Recombinate"}, {
                "id": "371",
                "name": "Rectiv",
                "name_param": "Rectiv"
            }, {"id": "393", "name": "Regimex", "name_param": "Regimex"}, {
                "id": "416",
                "name": "Regranex",
                "name_param": "Regranex"
            }, {"id": "438", "name": "Relenza", "name_param": "Relenza"}, {
                "id": "460",
                "name": "Relistor",
                "name_param": "Relistor"
            }, {"id": "483", "name": "Relpax", "name_param": "Relpax"}, {
                "id": "505",
                "name": "Remeron",
                "name_param": "Remeron"
            }, {"id": "528", "name": "Remeron Soltab", "name_param": "RemeronSoltab"}, {
                "id": "549",
                "name": "Remicade",
                "name_param": "Remicade"
            }, {"id": "570", "name": "Remodulin", "name_param": "Remodulin"}, {
                "id": "591",
                "name": "Renagel",
                "name_param": "Renagel"
            }, {"id": "612", "name": "Renvela", "name_param": "Renvela"}, {
                "id": "633",
                "name": "Repaglinide",
                "name_param": "Repaglinide"
            }, {"id": "654", "name": "Reprexain", "name_param": "Reprexain"}, {
                "id": "675",
                "name": "Repronex",
                "name_param": "Repronex"
            }, {"id": "696", "name": "Requip", "name_param": "Requip"}, {
                "id": "716",
                "name": "Requip XL",
                "name_param": "RequipXL"
            }, {"id": "736", "name": "Rescriptor", "name_param": "Rescriptor"}, {
                "id": "756",
                "name": "Restasis",
                "name_param": "Restasis"
            }, {"id": "776", "name": "Restoril", "name_param": "Restoril"}, {
                "id": "796",
                "name": "Retin-A Cream",
                "name_param": "Retin-ACream"
            }, {"id": "815", "name": "Retin-A Gel", "name_param": "Retin-AGel"}, {
                "id": "834",
                "name": "Retin-A Micro",
                "name_param": "Retin-AMicro"
            }, {"id": "853", "name": "Retin-A Micro 0.08%", "name_param": "Retin-AMicro0.08%"}, {
                "id": "872",
                "name": "Retrovir (ZDV)",
                "name_param": "Retrovir(ZDV)"
            }, {"id": "890", "name": "Revatio", "name_param": "Revatio"}, {
                "id": "908",
                "name": "Revia",
                "name_param": "Revia"
            }, {"id": "927", "name": "Revlimid", "name_param": "Revlimid"}, {
                "id": "944",
                "name": "Reyataz",
                "name_param": "Reyataz"
            }, {"id": "961", "name": "Rezira", "name_param": "Rezira"}, {
                "id": "978",
                "name": "Rheumatrex",
                "name_param": "Rheumatrex"
            }, {"id": "995", "name": "Rhinocort Aqua", "name_param": "RhinocortAqua"}, {
                "id": "1013",
                "name": "Ribavirin",
                "name_param": "Ribavirin"
            }, {"id": "1031", "name": "Ridaura", "name_param": "Ridaura"}, {
                "id": "1048",
                "name": "Rimantadine",
                "name_param": "Rimantadine"
            }, {"id": "1065", "name": "Risedronate 150 mg", "name_param": "Risedronate150mg"}, {
                "id": "1081",
                "name": "Risperdal",
                "name_param": "Risperdal"
            }, {"id": "1097", "name": "Risperdal Consta", "name_param": "RisperdalConsta"}, {
                "id": "1113",
                "name": "Risperdal M-Tab",
                "name_param": "RisperdalM-Tab"
            }, {"id": "1129", "name": "Risperidone", "name_param": "Risperidone"}, {
                "id": "1145",
                "name": "Ritalin",
                "name_param": "Ritalin"
            }, {"id": "1161", "name": "Ritalin-LA", "name_param": "Ritalin-LA"}, {
                "id": "1177",
                "name": "Rituxan",
                "name_param": "Rituxan"
            }, {"id": "1193", "name": "Rivastigmine", "name_param": "Rivastigmine"}, {
                "id": "1209",
                "name": "Rixubis",
                "name_param": "Rixubis"
            }, {"id": "1225", "name": "Rizatriptan", "name_param": "Rizatriptan"}, {
                "id": "1226",
                "name": "Rizatriptan ODT",
                "name_param": "RizatriptanODT"
            }, {"id": "1243", "name": "Rocaltrol", "name_param": "Rocaltrol"}, {
                "id": "1244",
                "name": "Ropinirole",
                "name_param": "Ropinirole"
            }, {"id": "1260", "name": "Rowasa Kit", "name_param": "RowasaKit"}, {
                "id": "1277",
                "name": "Rozerem",
                "name_param": "Rozerem"
            }, {"id": "1293", "name": "Rythmol", "name_param": "Rythmol"}, {
                "id": "1309",
                "name": "Rythmol SR",
                "name_param": "RythmolSR"
            }, {"id": "73", "name": "Sabril", "name_param": "Sabril"}, {
                "id": "92",
                "name": "Safyral",
                "name_param": "Safyral"
            }, {"id": "112", "name": "Saizen", "name_param": "Saizen"}, {
                "id": "133",
                "name": "Samsca",
                "name_param": "Samsca"
            }, {"id": "155", "name": "Sancuso", "name_param": "Sancuso"}, {
                "id": "178",
                "name": "Sandimmune",
                "name_param": "Sandimmune"
            }, {"id": "202", "name": "Sandostatin", "name_param": "Sandostatin"}, {
                "id": "227",
                "name": "Sandostatin LAR Depot",
                "name_param": "SandostatinLARDepot"
            }, {"id": "253", "name": "Santyl Ointment", "name_param": "SantylOintment"}, {
                "id": "279",
                "name": "Saphris",
                "name_param": "Saphris"
            }, {"id": "303", "name": "Sarafem", "name_param": "Sarafem"}, {
                "id": "327",
                "name": "Savella",
                "name_param": "Savella"
            }, {"id": "350", "name": "Seasonique", "name_param": "Seasonique"}, {
                "id": "372",
                "name": "Selegiline",
                "name_param": "Selegiline"
            }, {"id": "394", "name": "Selzentry", "name_param": "Selzentry"}, {
                "id": "417",
                "name": "Semprex-D",
                "name_param": "Semprex-D"
            }, {"id": "439", "name": "Sensipar", "name_param": "Sensipar"}, {
                "id": "461",
                "name": "Serevent Diskus",
                "name_param": "SereventDiskus"
            }, {"id": "484", "name": "Serophene", "name_param": "Serophene"}, {
                "id": "506",
                "name": "Seroquel",
                "name_param": "Seroquel"
            }, {"id": "507", "name": "Seroquel XR", "name_param": "SeroquelXR"}, {
                "id": "529",
                "name": "Serostim",
                "name_param": "Serostim"
            }, {"id": "550", "name": "Sertraline", "name_param": "Sertraline"}, {
                "id": "571",
                "name": "Sertraline Oral Concentrate",
                "name_param": "SertralineOralConcentrate"
            }, {"id": "592", "name": "Signifor", "name_param": "Signifor"}, {
                "id": "613",
                "name": "Sildenafil",
                "name_param": "Sildenafil"
            }, {"id": "634", "name": "Silenor", "name_param": "Silenor"}, {
                "id": "655",
                "name": "Silvadene",
                "name_param": "Silvadene"
            }, {"id": "676", "name": "Simbrinza", "name_param": "Simbrinza"}, {
                "id": "697",
                "name": "Simcor",
                "name_param": "Simcor"
            }, {"id": "717", "name": "Simponi", "name_param": "Simponi"}, {
                "id": "737",
                "name": "Simulect",
                "name_param": "Simulect"
            }, {"id": "757", "name": "Simvastatin", "name_param": "Simvastatin"}, {
                "id": "777",
                "name": "Sinemet",
                "name_param": "Sinemet"
            }, {"id": "797", "name": "Sinemet CR", "name_param": "SinemetCR"}, {
                "id": "816",
                "name": "Singulair",
                "name_param": "Singulair"
            }, {"id": "835", "name": "Sirolimus", "name_param": "Sirolimus"}, {
                "id": "854",
                "name": "Sivextro",
                "name_param": "Sivextro"
            }, {"id": "873", "name": "Skelaxin", "name_param": "Skelaxin"}, {
                "id": "891",
                "name": "Sklice",
                "name_param": "Sklice"
            }, {"id": "909", "name": "Skyla", "name_param": "Skyla"}, {
                "id": "928",
                "name": "Solaraze Gel",
                "name_param": "SolarazeGel"
            }, {"id": "945", "name": "Soliris", "name_param": "Soliris"}, {
                "id": "962",
                "name": "Solodyn",
                "name_param": "Solodyn"
            }, {"id": "979", "name": "Soltamox", "name_param": "Soltamox"}, {
                "id": "996",
                "name": "Soma",
                "name_param": "Soma"
            }, {"id": "1014", "name": "Somatuline Depot", "name_param": "SomatulineDepot"}, {
                "id": "1032",
                "name": "Somavert",
                "name_param": "Somavert"
            }, {"id": "1049", "name": "Sonata", "name_param": "Sonata"}, {
                "id": "1066",
                "name": "Soriatane",
                "name_param": "Soriatane"
            }, {"id": "1082", "name": "Sorilux", "name_param": "Sorilux"}, {
                "id": "1098",
                "name": "Sotalol",
                "name_param": "Sotalol"
            }, {"id": "1114", "name": "Sovaldi", "name_param": "Sovaldi"}, {
                "id": "1130",
                "name": "Spectracef",
                "name_param": "Spectracef"
            }, {"id": "1146", "name": "Spinosad", "name_param": "Spinosad"}, {
                "id": "1162",
                "name": "Spiriva",
                "name_param": "Spiriva"
            }, {"id": "1178", "name": "Sporanox", "name_param": "Sporanox"}, {
                "id": "1194",
                "name": "Sprix",
                "name_param": "Sprix"
            }, {"id": "1210", "name": "Sprycel", "name_param": "Sprycel"}, {
                "id": "1227",
                "name": "Stalevo",
                "name_param": "Stalevo"
            }, {"id": "1245", "name": "Starlix", "name_param": "Starlix"}, {
                "id": "1261",
                "name": "Stavudine",
                "name_param": "Stavudine"
            }, {"id": "1278", "name": "Stavzor", "name_param": "Stavzor"}, {
                "id": "1294",
                "name": "Staxyn",
                "name_param": "Staxyn"
            }, {"id": "1310", "name": "Stelara", "name_param": "Stelara"}, {
                "id": "1325",
                "name": "Stendra",
                "name_param": "Stendra"
            }, {"id": "1341", "name": "Stivarga", "name_param": "Stivarga"}, {
                "id": "1356",
                "name": "Strattera",
                "name_param": "Strattera"
            }, {"id": "1370", "name": "Striant", "name_param": "Striant"}, {
                "id": "1384",
                "name": "Stribild",
                "name_param": "Stribild"
            }, {"id": "1399", "name": "Striverdi Respimat", "name_param": "StriverdiRespimat"}, {
                "id": "1413",
                "name": "Suboxone Film",
                "name_param": "SuboxoneFilm"
            }, {"id": "1427", "name": "Subsys", "name_param": "Subsys"}, {
                "id": "1441",
                "name": "Suclear",
                "name_param": "Suclear"
            }, {"id": "1455", "name": "Sucralfate", "name_param": "Sucralfate"}, {
                "id": "1469",
                "name": "Sular",
                "name_param": "Sular"
            }, {"id": "1483", "name": "Sulfasalazine", "name_param": "Sulfasalazine"}, {
                "id": "1497",
                "name": "Sulfasalazine SR",
                "name_param": "SulfasalazineSR"
            }, {"id": "1511", "name": "Sumatriptan", "name_param": "Sumatriptan"}, {
                "id": "1524",
                "name": "Sumatriptan (nasal spray)",
                "name_param": "Sumatriptan(nasalspray)"
            }, {
                "id": "1536",
                "name": "Sumatriptan(statdose pen)",
                "name_param": "Sumatriptan(statdosepen)"
            }, {"id": "1548", "name": "Sumavel DosePro", "name_param": "SumavelDosePro"}, {
                "id": "1559",
                "name": "Sunitinib",
                "name_param": "Sunitinib"
            }, {"id": "1570", "name": "Supartz", "name_param": "Supartz"}, {
                "id": "1580",
                "name": "Supprelin LA",
                "name_param": "SupprelinLA"
            }, {"id": "1590", "name": "Suprax", "name_param": "Suprax"}, {
                "id": "1599",
                "name": "Suprax Suspension",
                "name_param": "SupraxSuspension"
            }, {"id": "1607", "name": "Suprenza", "name_param": "Suprenza"}, {
                "id": "1615",
                "name": "Suprep Kit",
                "name_param": "SuprepKit"
            }, {"id": "1623", "name": "Sustiva", "name_param": "Sustiva"}, {
                "id": "1629",
                "name": "Sutent",
                "name_param": "Sutent"
            }, {"id": "1635", "name": "Sylatron", "name_param": "Sylatron"}, {
                "id": "1641",
                "name": "Symbicort",
                "name_param": "Symbicort"
            }, {"id": "1647", "name": "Symbyax", "name_param": "Symbyax"}, {
                "id": "1652",
                "name": "SymlinPen",
                "name_param": "SymlinPen"
            }, {"id": "1657", "name": "Synarel", "name_param": "Synarel"}, {
                "id": "1662",
                "name": "Synera",
                "name_param": "Synera"
            }, {"id": "1667", "name": "Synribo", "name_param": "Synribo"}, {
                "id": "1672",
                "name": "Synthroid",
                "name_param": "Synthroid"
            }, {"id": "1677", "name": "Synvisc", "name_param": "Synvisc"}, {
                "id": "1682",
                "name": "Synvisc-One",
                "name_param": "Synvisc-One"
            }, {"id": "93", "name": "Tabloid", "name_param": "Tabloid"}, {
                "id": "113",
                "name": "Taclonex Ointment",
                "name_param": "TaclonexOintment"
            }, {"id": "134", "name": "Taclonex Suspension", "name_param": "TaclonexSuspension"}, {
                "id": "156",
                "name": "Tacrolimus",
                "name_param": "Tacrolimus"
            }, {"id": "179", "name": "Tafinlar", "name_param": "Tafinlar"}, {
                "id": "203",
                "name": "Tamiflu",
                "name_param": "Tamiflu"
            }, {"id": "228", "name": "Tamsulosin", "name_param": "Tamsulosin"}, {
                "id": "254",
                "name": "Tanzeum",
                "name_param": "Tanzeum"
            }, {"id": "280", "name": "Tarceva", "name_param": "Tarceva"}, {
                "id": "304",
                "name": "Targretin",
                "name_param": "Targretin"
            }, {"id": "328", "name": "Targretin Gel", "name_param": "TargretinGel"}, {
                "id": "351",
                "name": "Tarka",
                "name_param": "Tarka"
            }, {"id": "373", "name": "Tasigna", "name_param": "Tasigna"}, {
                "id": "395",
                "name": "Tasmar",
                "name_param": "Tasmar"
            }, {"id": "418", "name": "Taxotere", "name_param": "Taxotere"}, {
                "id": "440",
                "name": "Tazorac Cream",
                "name_param": "TazoracCream"
            }, {"id": "462", "name": "Tazorac Gel", "name_param": "TazoracGel"}, {
                "id": "485",
                "name": "Tecfidera",
                "name_param": "Tecfidera"
            }, {"id": "508", "name": "Teflaro", "name_param": "Teflaro"}, {
                "id": "530",
                "name": "Tegretol",
                "name_param": "Tegretol"
            }, {"id": "551", "name": "Tegretol XR", "name_param": "TegretolXR"}, {
                "id": "572",
                "name": "Tekamlo",
                "name_param": "Tekamlo"
            }, {"id": "593", "name": "Tekturna", "name_param": "Tekturna"}, {
                "id": "614",
                "name": "Tekturna HCT",
                "name_param": "TekturnaHCT"
            }, {"id": "635", "name": "Temazepam", "name_param": "Temazepam"}, {
                "id": "656",
                "name": "Temodar",
                "name_param": "Temodar"
            }, {"id": "677", "name": "Temovate Cream", "name_param": "TemovateCream"}, {
                "id": "698",
                "name": "Temovate E",
                "name_param": "TemovateE"
            }, {"id": "718", "name": "Temozolomide", "name_param": "Temozolomide"}, {
                "id": "738",
                "name": "Tenivac",
                "name_param": "Tenivac"
            }, {"id": "758", "name": "Tenoretic", "name_param": "Tenoretic"}, {
                "id": "778",
                "name": "Tenormin",
                "name_param": "Tenormin"
            }, {"id": "798", "name": "Terbinafine", "name_param": "Terbinafine"}, {
                "id": "817",
                "name": "Tessalon Perle",
                "name_param": "TessalonPerle"
            }, {"id": "836", "name": "Testim", "name_param": "Testim"}, {
                "id": "855",
                "name": "Testopel Pellets",
                "name_param": "TestopelPellets"
            }, {"id": "874", "name": "Testosterone Cypionate", "name_param": "TestosteroneCypionate"}, {
                "id": "892",
                "name": "Testosterone Enanthate",
                "name_param": "TestosteroneEnanthate"
            }, {
                "id": "910",
                "name": "Tetanus Diphtheria Toxoid Adsorbed",
                "name_param": "TetanusDiphtheriaToxoidAdsorbed"
            }, {"id": "946", "name": "Tev-Tropin", "name_param": "Tev-Tropin"}, {
                "id": "929",
                "name": "Teveten HCT",
                "name_param": "TevetenHCT"
            }, {"id": "963", "name": "Texacort", "name_param": "Texacort"}, {
                "id": "980",
                "name": "Thalomid",
                "name_param": "Thalomid"
            }, {"id": "997", "name": "Thiola", "name_param": "Thiola"}, {
                "id": "1015",
                "name": "Tiazac",
                "name_param": "Tiazac"
            }, {"id": "1033", "name": "Ticlopidine", "name_param": "Ticlopidine"}, {
                "id": "1050",
                "name": "Tikosyn",
                "name_param": "Tikosyn"
            }, {"id": "1067", "name": "Timolol", "name_param": "Timolol"}, {
                "id": "1083",
                "name": "Timoptic Ocudose",
                "name_param": "TimopticOcudose"
            }, {"id": "1099", "name": "Tindamax", "name_param": "Tindamax"}, {
                "id": "1115",
                "name": "Tinidazole",
                "name_param": "Tinidazole"
            }, {"id": "1131", "name": "Tirosint", "name_param": "Tirosint"}, {
                "id": "1147",
                "name": "Tivicay",
                "name_param": "Tivicay"
            }, {"id": "1163", "name": "Tizanidine", "name_param": "Tizanidine"}, {
                "id": "1179",
                "name": "Tobi",
                "name_param": "Tobi"
            }, {"id": "1195", "name": "Tobi Podhaler", "name_param": "TobiPodhaler"}, {
                "id": "1211",
                "name": "Tobradex Ointment",
                "name_param": "TobradexOintment"
            }, {"id": "1228", "name": "Tobradex ST", "name_param": "TobradexST"}, {
                "id": "1246",
                "name": "TobraDex Suspension ",
                "name_param": "TobraDexSuspension"
            }, {"id": "1262", "name": "Tobramycin Nebulizer", "name_param": "TobramycinNebulizer"}, {
                "id": "1279",
                "name": "Tobrex Ointment",
                "name_param": "TobrexOintment"
            }, {"id": "1295", "name": "Tofranil", "name_param": "Tofranil"}, {
                "id": "1311",
                "name": "Tolazamide",
                "name_param": "Tolazamide"
            }, {"id": "1326", "name": "Tolbutamide", "name_param": "Tolbutamide"}, {
                "id": "1342",
                "name": "Tolterodine",
                "name_param": "Tolterodine"
            }, {"id": "1357", "name": "Tolterodine ER", "name_param": "TolterodineER"}, {
                "id": "1371",
                "name": "Topamax",
                "name_param": "Topamax"
            }, {"id": "1385", "name": "Topicort Cream", "name_param": "TopicortCream"}, {
                "id": "1400",
                "name": "Topicort Gel",
                "name_param": "TopicortGel"
            }, {"id": "1414", "name": "Topicort Spray", "name_param": "TopicortSpray"}, {
                "id": "1428",
                "name": "Topiramate",
                "name_param": "Topiramate"
            }, {"id": "1442", "name": "Topiramate ER", "name_param": "TopiramateER"}, {
                "id": "1456",
                "name": "Toprol-XL",
                "name_param": "Toprol-XL"
            }, {"id": "1470", "name": "Torisel", "name_param": "Torisel"}, {
                "id": "1484",
                "name": "Toviaz",
                "name_param": "Toviaz"
            }, {"id": "1498", "name": "Tracleer", "name_param": "Tracleer"}, {
                "id": "1512",
                "name": "Tradjenta",
                "name_param": "Tradjenta"
            }, {"id": "1525", "name": "Tramadol", "name_param": "Tramadol"}, {
                "id": "1537",
                "name": "Trandate",
                "name_param": "Trandate"
            }, {"id": "1549", "name": "Trandolapril", "name_param": "Trandolapril"}, {
                "id": "1560",
                "name": "Transderm-Scop",
                "name_param": "Transderm-Scop"
            }, {"id": "1571", "name": "Tranylcypromine", "name_param": "Tranylcypromine"}, {
                "id": "1581",
                "name": "Travatan Z",
                "name_param": "TravatanZ"
            }, {"id": "1591", "name": "Travoprost", "name_param": "Travoprost"}, {
                "id": "1600",
                "name": "Trazodone",
                "name_param": "Trazodone"
            }, {"id": "1608", "name": "Treanda", "name_param": "Treanda"}, {
                "id": "1616",
                "name": "Trelstar",
                "name_param": "Trelstar"
            }, {"id": "1630", "name": "Tretin-X", "name_param": "Tretin-X"}, {
                "id": "1636",
                "name": "Tretin-X Kit",
                "name_param": "Tretin-XKit"
            }, {"id": "1624", "name": "Tretinoin", "name_param": "Tretinoin"}, {
                "id": "1642",
                "name": "Trexall",
                "name_param": "Trexall"
            }, {"id": "1648", "name": "Treximet", "name_param": "Treximet"}, {
                "id": "1688",
                "name": "Tri-Luma ",
                "name_param": "Tri-Luma"
            }, {"id": "1696", "name": "Tri-Norinyl", "name_param": "Tri-Norinyl"}, {
                "id": "1704",
                "name": "Tri-Sprintec",
                "name_param": "Tri-Sprintec"
            }, {"id": "1653", "name": "Triamcinolone (Nasal)", "name_param": "Triamcinolone(Nasal)"}, {
                "id": "1658",
                "name": "Tribenzor",
                "name_param": "Tribenzor"
            }, {"id": "1663", "name": "TriCor", "name_param": "TriCor"}, {
                "id": "1668",
                "name": "Trifluridine",
                "name_param": "Trifluridine"
            }, {"id": "1673", "name": "Triglide", "name_param": "Triglide"}, {
                "id": "1678",
                "name": "Trileptal",
                "name_param": "Trileptal"
            }, {"id": "1683", "name": "Trileptal Suspension", "name_param": "TrileptalSuspension"}, {
                "id": "1687",
                "name": "Trilipix",
                "name_param": "Trilipix"
            }, {"id": "1692", "name": "TriLyte", "name_param": "TriLyte"}, {
                "id": "1700",
                "name": "Trisenox",
                "name_param": "Trisenox"
            }, {"id": "1708", "name": "Triumeq", "name_param": "Triumeq"}, {
                "id": "1712",
                "name": "Trivora-28",
                "name_param": "Trivora-28"
            }, {"id": "1716", "name": "Trizivir", "name_param": "Trizivir"}, {
                "id": "1720",
                "name": "Trokendi XR",
                "name_param": "TrokendiXR"
            }, {"id": "1724", "name": "Trospium", "name_param": "Trospium"}, {
                "id": "1728",
                "name": "Trospium ER",
                "name_param": "TrospiumER"
            }, {"id": "1732", "name": "TRUEtest Test Strips", "name_param": "TRUEtestTestStrips"}, {
                "id": "1736",
                "name": "TRUEtrack",
                "name_param": "TRUEtrack"
            }, {"id": "1740", "name": "TRUEtrack Test Strips", "name_param": "TRUEtrackTestStrips"}, {
                "id": "1744",
                "name": "Trulicity",
                "name_param": "Trulicity"
            }, {"id": "1748", "name": "Trusopt", "name_param": "Trusopt"}, {
                "id": "1752",
                "name": "Truvada",
                "name_param": "Truvada"
            }, {"id": "1756", "name": "Tudorza Pressair", "name_param": "TudorzaPressair"}, {
                "id": "1760",
                "name": "TussiCaps",
                "name_param": "TussiCaps"
            }, {"id": "1764", "name": "Tussigon", "name_param": "Tussigon"}, {
                "id": "1768",
                "name": "Tussionex",
                "name_param": "Tussionex"
            }, {"id": "1772", "name": "Twynsta", "name_param": "Twynsta"}, {
                "id": "1776",
                "name": "Tygacil",
                "name_param": "Tygacil"
            }, {"id": "1780", "name": "Tykerb", "name_param": "Tykerb"}, {
                "id": "1784",
                "name": "Tylenol w\/Codeine",
                "name_param": "Tylenolw\/Codeine"
            }, {"id": "1788", "name": "Tysabri", "name_param": "Tysabri"}, {
                "id": "1792",
                "name": "Tyvaso",
                "name_param": "Tyvaso"
            }, {"id": "1796", "name": "Tyzeka", "name_param": "Tyzeka"}, {
                "id": "114",
                "name": "Uceris",
                "name_param": "Uceris"
            }, {"id": "135", "name": "Ulesfia", "name_param": "Ulesfia"}, {
                "id": "157",
                "name": "Uloric",
                "name_param": "Uloric"
            }, {"id": "180", "name": "Ultracet", "name_param": "Ultracet"}, {
                "id": "204",
                "name": "Ultram",
                "name_param": "Ultram"
            }, {"id": "229", "name": "Ultram ER", "name_param": "UltramER"}, {
                "id": "255",
                "name": "Ultravate",
                "name_param": "Ultravate"
            }, {"id": "281", "name": "Ultresa", "name_param": "Ultresa"}, {
                "id": "305",
                "name": "Unifine Pentips",
                "name_param": "UnifinePentips"
            }, {"id": "329", "name": "Uniretic", "name_param": "Uniretic"}, {
                "id": "352",
                "name": "Unithroid",
                "name_param": "Unithroid"
            }, {"id": "374", "name": "Univasc", "name_param": "Univasc"}, {
                "id": "396",
                "name": "Uribel",
                "name_param": "Uribel"
            }, {"id": "419", "name": "Urocit-K 15", "name_param": "Urocit-K15"}, {
                "id": "441",
                "name": "Urocit-K 5 & 10",
                "name_param": "Urocit-K5&10"
            }, {"id": "463", "name": "Uroxatral", "name_param": "Uroxatral"}, {
                "id": "509",
                "name": "URSO Forte",
                "name_param": "URSOForte"
            }, {"id": "486", "name": "Ursodiol", "name_param": "Ursodiol"}, {
                "id": "136",
                "name": "Vagifem",
                "name_param": "Vagifem"
            }, {"id": "158", "name": "Valacyclovir", "name_param": "Valacyclovir"}, {
                "id": "181",
                "name": "Valchlor",
                "name_param": "Valchlor"
            }, {"id": "205", "name": "Valcyte", "name_param": "Valcyte"}, {
                "id": "230",
                "name": "Valium",
                "name_param": "Valium"
            }, {"id": "256", "name": "Valproic acid", "name_param": "Valproicacid"}, {
                "id": "282",
                "name": "Valsartan\/HCTZ",
                "name_param": "Valsartan\/HCTZ"
            }, {"id": "306", "name": "Valstar", "name_param": "Valstar"}, {
                "id": "330",
                "name": "Valtrex",
                "name_param": "Valtrex"
            }, {"id": "353", "name": "Vancocin", "name_param": "Vancocin"}, {
                "id": "375",
                "name": "Vancomycin",
                "name_param": "Vancomycin"
            }, {"id": "397", "name": "Vanos", "name_param": "Vanos"}, {
                "id": "420",
                "name": "Vantas",
                "name_param": "Vantas"
            }, {"id": "442", "name": "Vascepa", "name_param": "Vascepa"}, {
                "id": "464",
                "name": "Vaseretic",
                "name_param": "Vaseretic"
            }, {"id": "487", "name": "Vasotec", "name_param": "Vasotec"}, {
                "id": "510",
                "name": "Vectibix",
                "name_param": "Vectibix"
            }, {"id": "531", "name": "Vectical", "name_param": "Vectical"}, {
                "id": "552",
                "name": "Velcade",
                "name_param": "Velcade"
            }, {"id": "573", "name": "Veletri", "name_param": "Veletri"}, {
                "id": "594",
                "name": "Velphoro",
                "name_param": "Velphoro"
            }, {"id": "615", "name": "Veltin", "name_param": "Veltin"}, {
                "id": "636",
                "name": "Venlafaxine",
                "name_param": "Venlafaxine"
            }, {"id": "657", "name": "Venlafaxine ER", "name_param": "VenlafaxineER"}, {
                "id": "678",
                "name": "Ventavis",
                "name_param": "Ventavis"
            }, {"id": "699", "name": "Ventolin HFA", "name_param": "VentolinHFA"}, {
                "id": "719",
                "name": "Veramyst",
                "name_param": "Veramyst"
            }, {"id": "739", "name": "Verdeso", "name_param": "Verdeso"}, {
                "id": "759",
                "name": "Veregen",
                "name_param": "Veregen"
            }, {"id": "779", "name": "Verelan", "name_param": "Verelan"}, {
                "id": "799",
                "name": "Verelan PM",
                "name_param": "VerelanPM"
            }, {"id": "818", "name": "VESIcare", "name_param": "VESIcare"}, {
                "id": "837",
                "name": "Vexol",
                "name_param": "Vexol"
            }, {"id": "856", "name": "Vfend", "name_param": "Vfend"}, {
                "id": "875",
                "name": "Viagra",
                "name_param": "Viagra"
            }, {"id": "893", "name": "Vibativ", "name_param": "Vibativ"}, {
                "id": "911",
                "name": "Vibramycin",
                "name_param": "Vibramycin"
            }, {"id": "930", "name": "Vicodin", "name_param": "Vicodin"}, {
                "id": "947",
                "name": "Vicoprofen",
                "name_param": "Vicoprofen"
            }, {"id": "964", "name": "Victoza", "name_param": "Victoza"}, {
                "id": "981",
                "name": "Victrelis",
                "name_param": "Victrelis"
            }, {"id": "998", "name": "Vidaza", "name_param": "Vidaza"}, {
                "id": "1016",
                "name": "Videx EC",
                "name_param": "VidexEC"
            }, {"id": "1034", "name": "Vigamox", "name_param": "Vigamox"}, {
                "id": "1051",
                "name": "Viibryd",
                "name_param": "Viibryd"
            }, {"id": "1068", "name": "Vimizim", "name_param": "Vimizim"}, {
                "id": "1084",
                "name": "Vimovo",
                "name_param": "Vimovo"
            }, {"id": "1100", "name": "Vimpat", "name_param": "Vimpat"}, {
                "id": "1116",
                "name": "Vimpat Injection",
                "name_param": "VimpatInjection"
            }, {"id": "1132", "name": "Vimpat Solution", "name_param": "VimpatSolution"}, {
                "id": "1148",
                "name": "Vinblastine Injection",
                "name_param": "VinblastineInjection"
            }, {"id": "1164", "name": "Vincasar PFS", "name_param": "VincasarPFS"}, {
                "id": "1180",
                "name": "Viokace",
                "name_param": "Viokace"
            }, {"id": "1196", "name": "Viracept", "name_param": "Viracept"}, {
                "id": "1212",
                "name": "Viramune",
                "name_param": "Viramune"
            }, {"id": "1229", "name": "Viramune XR", "name_param": "ViramuneXR"}, {
                "id": "1247",
                "name": "Virazole",
                "name_param": "Virazole"
            }, {"id": "1263", "name": "Viread", "name_param": "Viread"}, {
                "id": "1280",
                "name": "Viroptic",
                "name_param": "Viroptic"
            }, {"id": "1296", "name": "Visicol", "name_param": "Visicol"}, {
                "id": "1312",
                "name": "Vitafol-OB",
                "name_param": "Vitafol-OB"
            }, {"id": "1327", "name": "Vivactil", "name_param": "Vivactil"}, {
                "id": "1343",
                "name": "Vivelle-Dot",
                "name_param": "Vivelle-Dot"
            }, {"id": "1358", "name": "Vivitrol", "name_param": "Vivitrol"}, {
                "id": "1372",
                "name": "Voltaren Gel",
                "name_param": "VoltarenGel"
            }, {"id": "1386", "name": "Voltaren XR", "name_param": "VoltarenXR"}, {
                "id": "1401",
                "name": "Voriconazole",
                "name_param": "Voriconazole"
            }, {"id": "1415", "name": "Vospire ER", "name_param": "VospireER"}, {
                "id": "1429",
                "name": "Votrient",
                "name_param": "Votrient"
            }, {"id": "1443", "name": "Vumon", "name_param": "Vumon"}, {
                "id": "1457",
                "name": "Vusion",
                "name_param": "Vusion"
            }, {"id": "1471", "name": "Vytorin", "name_param": "Vytorin"}, {
                "id": "1485",
                "name": "Vytorin 10\/80mg",
                "name_param": "Vytorin10\/80mg"
            }, {"id": "1499", "name": "Vyvanse", "name_param": "Vyvanse"}, {
                "id": "159",
                "name": "Warfarin",
                "name_param": "Warfarin"
            }, {"id": "182", "name": "Welchol", "name_param": "Welchol"}, {
                "id": "206",
                "name": "Welchol Suspension",
                "name_param": "WelcholSuspension"
            }, {"id": "231", "name": "Wellbutrin", "name_param": "Wellbutrin"}, {
                "id": "257",
                "name": "Wellbutrin SR",
                "name_param": "WellbutrinSR"
            }, {"id": "283", "name": "Wellbutrin XL", "name_param": "WellbutrinXL"}, {
                "id": "307",
                "name": "Westcort",
                "name_param": "Westcort"
            }, {"id": "331", "name": "Wilate", "name_param": "Wilate"}, {
                "id": "183",
                "name": "Xalatan",
                "name_param": "Xalatan"
            }, {"id": "207", "name": "Xalkori", "name_param": "Xalkori"}, {
                "id": "232",
                "name": "Xanax",
                "name_param": "Xanax"
            }, {"id": "258", "name": "Xanax XR", "name_param": "XanaxXR"}, {
                "id": "284",
                "name": "Xarelto 10",
                "name_param": "Xarelto10"
            }, {"id": "308", "name": "Xarelto 15 & 20", "name_param": "Xarelto15&20"}, {
                "id": "332",
                "name": "Xartemis XR",
                "name_param": "XartemisXR"
            }, {"id": "354", "name": "Xeljanz", "name_param": "Xeljanz"}, {
                "id": "376",
                "name": "Xeloda",
                "name_param": "Xeloda"
            }, {"id": "398", "name": "Xenazine", "name_param": "Xenazine"}, {
                "id": "421",
                "name": "Xenical",
                "name_param": "Xenical"
            }, {"id": "443", "name": "Xerese", "name_param": "Xerese"}, {
                "id": "465",
                "name": "Xgeva",
                "name_param": "Xgeva"
            }, {"id": "488", "name": "Xiaflex", "name_param": "Xiaflex"}, {
                "id": "511",
                "name": "Xifaxan 200mg",
                "name_param": "Xifaxan200mg"
            }, {"id": "532", "name": "Xifaxan 550mg", "name_param": "Xifaxan550mg"}, {
                "id": "553",
                "name": "Xodol",
                "name_param": "Xodol"
            }, {"id": "574", "name": "Xofigo", "name_param": "Xofigo"}, {
                "id": "595",
                "name": "Xolair",
                "name_param": "Xolair"
            }, {"id": "616", "name": "Xolegel", "name_param": "Xolegel"}, {
                "id": "637",
                "name": "Xopenex",
                "name_param": "Xopenex"
            }, {"id": "658", "name": "Xopenex HFA", "name_param": "XopenexHFA"}, {
                "id": "679",
                "name": "Xtandi",
                "name_param": "Xtandi"
            }, {"id": "700", "name": "Xulane", "name_param": "Xulane"}, {
                "id": "720",
                "name": "Xyntha",
                "name_param": "Xyntha"
            }, {"id": "740", "name": "Xyrem", "name_param": "Xyrem"}, {
                "id": "760",
                "name": "Xyzal",
                "name_param": "Xyzal"
            }, {"id": "780", "name": "Xyzal Solution", "name_param": "XyzalSolution"}, {
                "id": "208",
                "name": "Yasmin",
                "name_param": "Yasmin"
            }, {"id": "233", "name": "Yaz", "name_param": "Yaz"}, {
                "id": "259",
                "name": "Yervoy",
                "name_param": "Yervoy"
            }, {"id": "234", "name": "Zafirlukast", "name_param": "Zafirlukast"}, {
                "id": "260",
                "name": "Zaleplon",
                "name_param": "Zaleplon"
            }, {"id": "285", "name": "Zaltrap", "name_param": "Zaltrap"}, {
                "id": "309",
                "name": "Zanaflex Capsules",
                "name_param": "ZanaflexCapsules"
            }, {"id": "333", "name": "Zanaflex Tablet", "name_param": "ZanaflexTablet"}, {
                "id": "355",
                "name": "Zarah",
                "name_param": "Zarah"
            }, {"id": "377", "name": "Zarontin", "name_param": "Zarontin"}, {
                "id": "399",
                "name": "Zavesca",
                "name_param": "Zavesca"
            }, {"id": "422", "name": "Zebeta", "name_param": "Zebeta"}, {
                "id": "444",
                "name": "Zegerid",
                "name_param": "Zegerid"
            }, {
                "id": "466",
                "name": "Zegerid Powder for Oral Suspension",
                "name_param": "ZegeridPowderforOralSuspension"
            }, {"id": "489", "name": "Zelapar", "name_param": "Zelapar"}, {
                "id": "512",
                "name": "Zelboraf",
                "name_param": "Zelboraf"
            }, {"id": "533", "name": "Zemaira", "name_param": "Zemaira"}, {
                "id": "554",
                "name": "Zemplar",
                "name_param": "Zemplar"
            }, {"id": "575", "name": "Zemplar IV", "name_param": "ZemplarIV"}, {
                "id": "596",
                "name": "Zenpep",
                "name_param": "Zenpep"
            }, {"id": "617", "name": "Zerit (d4T)", "name_param": "Zerit(d4T)"}, {
                "id": "638",
                "name": "Zestoretic",
                "name_param": "Zestoretic"
            }, {"id": "659", "name": "Zestril", "name_param": "Zestril"}, {
                "id": "680",
                "name": "Zetia",
                "name_param": "Zetia"
            }, {"id": "701", "name": "Zetonna", "name_param": "Zetonna"}, {
                "id": "721",
                "name": "Zevalin",
                "name_param": "Zevalin"
            }, {"id": "741", "name": "Ziac", "name_param": "Ziac"}, {
                "id": "761",
                "name": "Ziagen",
                "name_param": "Ziagen"
            }, {"id": "781", "name": "Ziana", "name_param": "Ziana"}, {
                "id": "800",
                "name": "Zidovudine",
                "name_param": "Zidovudine"
            }, {
                "id": "819",
                "name": "Zidovudine\/lamivudine\/abacavir",
                "name_param": "Zidovudine\/lamivudine\/abacavir"
            }, {"id": "838", "name": "Zioptan", "name_param": "Zioptan"}, {
                "id": "857",
                "name": "Ziprasidone",
                "name_param": "Ziprasidone"
            }, {"id": "876", "name": "Zipsor", "name_param": "Zipsor"}, {
                "id": "894",
                "name": "Zirgan",
                "name_param": "Zirgan"
            }, {"id": "912", "name": "Zithromax", "name_param": "Zithromax"}, {
                "id": "931",
                "name": "Zithromax Suspension",
                "name_param": "ZithromaxSuspension"
            }, {"id": "948", "name": "Zmax", "name_param": "Zmax"}, {
                "id": "965",
                "name": "Zocor",
                "name_param": "Zocor"
            }, {"id": "982", "name": "Zofran", "name_param": "Zofran"}, {
                "id": "999",
                "name": "Zofran ODT",
                "name_param": "ZofranODT"
            }, {"id": "1017", "name": "Zohydro ER", "name_param": "ZohydroER"}, {
                "id": "1018",
                "name": "Zoladex",
                "name_param": "Zoladex"
            }, {"id": "1035", "name": "Zolinza", "name_param": "Zolinza"}, {
                "id": "1052",
                "name": "Zolmitriptan",
                "name_param": "Zolmitriptan"
            }, {"id": "1069", "name": "Zolmitriptan ODT", "name_param": "ZolmitriptanODT"}, {
                "id": "1085",
                "name": "Zoloft",
                "name_param": "Zoloft"
            }, {"id": "1101", "name": "Zoloft Oral Concentrate", "name_param": "ZoloftOralConcentrate"}, {
                "id": "1117",
                "name": "Zolpidem",
                "name_param": "Zolpidem"
            }, {"id": "1133", "name": "Zolpidem ER", "name_param": "ZolpidemER"}, {
                "id": "1149",
                "name": "Zolpimist",
                "name_param": "Zolpimist"
            }, {"id": "1165", "name": "Zometa", "name_param": "Zometa"}, {
                "id": "1181",
                "name": "Zomig",
                "name_param": "Zomig"
            }, {"id": "1197", "name": "Zomig Nasal Spray", "name_param": "ZomigNasalSpray"}, {
                "id": "1213",
                "name": "Zomig-ZMT",
                "name_param": "Zomig-ZMT"
            }, {"id": "1230", "name": "Zonalon", "name_param": "Zonalon"}, {
                "id": "1248",
                "name": "Zonegran",
                "name_param": "Zonegran"
            }, {"id": "1264", "name": "Zonisamide", "name_param": "Zonisamide"}, {
                "id": "1281",
                "name": "Zontivity",
                "name_param": "Zontivity"
            }, {"id": "1297", "name": "Zorbtive", "name_param": "Zorbtive"}, {
                "id": "1313",
                "name": "Zortress",
                "name_param": "Zortress"
            }, {"id": "1328", "name": "Zorvolex", "name_param": "Zorvolex"}, {
                "id": "1344",
                "name": "Zostavax",
                "name_param": "Zostavax"
            }, {"id": "1359", "name": "Zovirax", "name_param": "Zovirax"}, {
                "id": "1373",
                "name": "Zovirax Cream",
                "name_param": "ZoviraxCream"
            }, {"id": "1387", "name": "Zubsolv", "name_param": "Zubsolv"}, {
                "id": "1402",
                "name": "Zuplenz",
                "name_param": "Zuplenz"
            }, {"id": "1416", "name": "Zutripro", "name_param": "Zutripro"}, {
                "id": "1430",
                "name": "Zyban",
                "name_param": "Zyban"
            }, {"id": "1444", "name": "Zyclara Pump", "name_param": "ZyclaraPump"}, {
                "id": "1458",
                "name": "Zydelig",
                "name_param": "Zydelig"
            }, {"id": "1472", "name": "Zyflo CR", "name_param": "ZyfloCR"}, {
                "id": "1486",
                "name": "Zykadia",
                "name_param": "Zykadia"
            }, {"id": "1500", "name": "Zylet", "name_param": "Zylet"}, {
                "id": "1513",
                "name": "Zyloprim",
                "name_param": "Zyloprim"
            }, {"id": "1526", "name": "Zymaxid", "name_param": "Zymaxid"}, {
                "id": "1527",
                "name": "Zyprexa",
                "name_param": "Zyprexa"
            }, {"id": "1538", "name": "Zyprexa Relprevv", "name_param": "ZyprexaRelprevv"}, {
                "id": "1550",
                "name": "Zyprexa Zydis",
                "name_param": "ZyprexaZydis"
            }, {"id": "1561", "name": "Zytiga", "name_param": "Zytiga"}, {
                "id": "1572",
                "name": "Zyvox",
                "name_param": "Zyvox"
            }, {"id": "1582", "name": "Zyvox IV", "name_param": "ZyvoxIV"}];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByFirstalphabet: findByFirstalphabet
    };

}());