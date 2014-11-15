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
            results = results.slice(0,20);
            deferred.resolve(results);
            return deferred.promise();
        },

        findByFirstalphabet = function (alp) {
            var deferred = $.Deferred();
            var results = drugs.filter(function (element) {
                return alp === element.name.toLowerCase().substr(0,1);
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        drugs =
            [{"id": "1904", "name": "1199 SEIU"}, {"id": "1902", "name": "157th Medical Group"}, {
                "id": "1903",
                "name": "32 BJ Benefit Funds"
            }, {"id": "7", "name": "Abacavir"}, {"id": "15", "name": "Abilify"}, {
                "id": "24",
                "name": "Abilify Discmelt"
            }, {"id": "40", "name": "Abilify Injection"}, {"id": "58", "name": "Abilify Maintena"}, {
                "id": "79",
                "name": "Abraxane"
            }, {"id": "1923", "name": "Absolute Total Care"}, {"id": "99", "name": "Absorica"}, {
                "id": "120",
                "name": "Abstral"
            }, {"id": "142", "name": "Acanya"}, {"id": "165", "name": "Acarbose"}, {
                "id": "1905",
                "name": "Access Health Colorado Bronze"
            }, {"id": "1907", "name": "Access Health Colorado Gold"}, {
                "id": "1909",
                "name": "Access Health Colorado Silver"
            }, {"id": "189", "name": "Accolate"}, {"id": "214", "name": "ACCU-CHEK Active Test Strips"}, {
                "id": "240",
                "name": "ACCU-CHEK Aviva"
            }, {"id": "267", "name": "ACCU-CHEK Aviva Plus Test Strips"}, {
                "id": "291",
                "name": "ACCU-CHEK Comfort Curve Test Strips"
            }, {"id": "315", "name": "ACCU-CHEK Compact Plus"}, {
                "id": "339",
                "name": "ACCU-CHEK Compact Plus Test Strips"
            }, {"id": "361", "name": "ACCU-CHEK Nano"}, {
                "id": "383",
                "name": "ACCU-CHEK Nano SmartView Test Strips"
            }, {"id": "405", "name": "Accuneb"}, {"id": "428", "name": "Accupril"}, {
                "id": "450",
                "name": "Accuretic"
            }, {"id": "473", "name": "Aceon"}, {"id": "495", "name": "Acetaminophen\/Codeine"}, {
                "id": "518",
                "name": "Aciphex"
            }, {"id": "539", "name": "Aclovate Cream"}, {"id": "560", "name": "Actemra"}, {
                "id": "581",
                "name": "Actemra SC"
            }, {"id": "602", "name": "Acticin"}, {"id": "623", "name": "Acticlate"}, {
                "id": "644",
                "name": "Actigall"
            }, {"id": "665", "name": "Actiq"}, {"id": "686", "name": "Activella"}, {
                "id": "707",
                "name": "Actonel"
            }, {"id": "727", "name": "Actoplus Met"}, {"id": "747", "name": "ACTOplus met XR"}, {
                "id": "767",
                "name": "Actos"
            }, {"id": "787", "name": "Acular"}, {"id": "806", "name": "Acular LS"}, {
                "id": "825",
                "name": "Acuvail"
            }, {"id": "844", "name": "Aczone"}, {"id": "863", "name": "Adacel"}, {
                "id": "882",
                "name": "Adalat CC"
            }, {"id": "900", "name": "Adapalene Cream 0.1%"}, {"id": "918", "name": "Adapalene Gel 0.1%"}, {
                "id": "936",
                "name": "Adasuve"
            }, {"id": "953", "name": "Adcetris"}, {"id": "970", "name": "Adcirca"}, {
                "id": "987",
                "name": "Adderall"
            }, {"id": "1005", "name": "Adderall XR"}, {"id": "1023", "name": "Adefovir"}, {
                "id": "1040",
                "name": "Adempas"
            }, {"id": "1057", "name": "Adipex-P"}, {"id": "1073", "name": "Adoxa"}, {
                "id": "1089",
                "name": "Adriamycin"
            }, {"id": "1105", "name": "Advair Diskus 100\/50"}, {
                "id": "1121",
                "name": "Advair Diskus 250\/50 & 500\/50"
            }, {"id": "1137", "name": "Advair HFA"}, {"id": "1153", "name": "Advate"}, {
                "id": "1901",
                "name": "Adventist Health System"
            }, {"id": "1169", "name": "Advicor"}, {"id": "1185", "name": "Aerospan HFA"}, {
                "id": "1948",
                "name": "Affinity (CHP)"
            }, {"id": "1957", "name": "Affinity Essential American Indian"}, {
                "id": "1968",
                "name": "Affinity Essential Bronze"
            }, {"id": "1201", "name": "Afinitor"}, {"id": "1217", "name": "Afinitor Disperz"}, {
                "id": "1235",
                "name": "Afluria"
            }, {"id": "1906", "name": "AFSCME Council 31"}, {"id": "1908", "name": "AFTRA"}, {
                "id": "1252",
                "name": "Aggrenox"
            }, {"id": "1970", "name": "AIDS Drug Assistance Program (CA)"}, {
                "id": "1969",
                "name": "AIDS Drug Assistance Program (CT)"
            }, {"id": "1945", "name": "AIDS Drug Assistance Program (FL)"}, {
                "id": "1947",
                "name": "AIDS Drug Assistance Program (NC)"
            }, {"id": "1940", "name": "AIDS Drug Assistance Program (ND)"}, {
                "id": "1939",
                "name": "AIDS Drug Assistance Program (NE)"
            }, {"id": "1919", "name": "AIDS Drug Assistance Program (NH)"}, {
                "id": "1920",
                "name": "AIDS Drug Assistance Program (NJ)"
            }, {"id": "1912", "name": "AIDS Drug Assistance Program (NM)"}, {
                "id": "1938",
                "name": "AIDS Drug Assistance Program (NV)"
            }, {"id": "1932", "name": "AIDS Drug Assistance Program (RI)"}, {
                "id": "1911",
                "name": "AIDS Drug Assistance Program (WA)"
            }, {"id": "1922", "name": "AIDS Drug Assistance Program (WI)"}, {
                "id": "1913",
                "name": "AIDS Drug Assistance Program (WV)"
            }, {"id": "1910", "name": "AIDS Drug Assistance Program (WY)"}, {
                "id": "1269",
                "name": "Akynzeo"
            }, {"id": "1917", "name": "Albuquerque Public Schools"}, {
                "id": "1285",
                "name": "Albuterol ER"
            }, {"id": "1317", "name": "Albuterol Solution"}, {
                "id": "1332",
                "name": "Albuterol Solution Concentrate 0.5%"
            }, {"id": "1301", "name": "albuterol\/ipratropium"}, {"id": "1348", "name": "Alclometasone"}, {
                "id": "1362",
                "name": "Aldara"
            }, {"id": "1376", "name": "Alendronate"}, {"id": "1390", "name": "Alimta"}, {
                "id": "1391",
                "name": "Alinia"
            }, {"id": "1405", "name": "Alkeran"}, {"id": "1419", "name": "Alkeran Injection"}, {
                "id": "1927",
                "name": "Alliant Energy"
            }, {"id": "1433", "name": "Allopurinol"}, {"id": "1447", "name": "Alocril"}, {
                "id": "1461",
                "name": "Alomide"
            }, {"id": "1475", "name": "Alora"}, {"id": "1489", "name": "Aloxi"}, {
                "id": "1504",
                "name": "Alphagan P"
            }, {"id": "1516", "name": "Alphanate"}, {"id": "1530", "name": "Alphanine SD"}, {
                "id": "1542",
                "name": "Alprazolam"
            }, {"id": "1553", "name": "Alprazolam ODT"}, {"id": "1564", "name": "Alprazolam XR"}, {
                "id": "1574",
                "name": "Alprolix"
            }, {"id": "1584", "name": "Alrex"}, {"id": "1593", "name": "Alsuma"}, {
                "id": "1601",
                "name": "Altabax"
            }, {"id": "1914", "name": "Altius"}, {"id": "1609", "name": "Altoprev"}, {
                "id": "1617",
                "name": "Alvesco"
            }, {"id": "1625", "name": "Amaryl"}, {
                "id": "1954",
                "name": "ambetter Marketplace Bronze (FL)"
            }, {"id": "1916", "name": "ambetter Marketplace Bronze (WA) "}, {
                "id": "1963",
                "name": "ambetter Marketplace Gold (FL)"
            }, {"id": "1921", "name": "ambetter Marketplace Gold (WA) "}, {
                "id": "1975",
                "name": "ambetter Marketplace Silver (FL)"
            }, {"id": "1926", "name": "ambetter Marketplace Silver (WA) "}, {
                "id": "1631",
                "name": "Ambien"
            }, {"id": "1637", "name": "Ambien CR"}, {"id": "1643", "name": "Amerge"}, {
                "id": "1925",
                "name": "Amerigroup"
            }, {"id": "1931", "name": "Amerigroup (Washington)"}, {
                "id": "1930",
                "name": "Amerihealth Marketplace Bronze"
            }, {"id": "1936", "name": "Amerihealth Marketplace Catastrophic"}, {
                "id": "1944",
                "name": "Amerihealth Marketplace Gold"
            }, {"id": "1952", "name": "Amerihealth Marketplace Silver"}, {
                "id": "1961",
                "name": "Amerihealth Select"
            }, {"id": "1649", "name": "Amitiza"}, {"id": "1654", "name": "Amitriptyline"}, {
                "id": "1659",
                "name": "Amoxapine"
            }, {"id": "1664", "name": "Amoxicillin\/clarithromycin\/lansoprazole"}, {
                "id": "1669",
                "name": "Amphetamine mixtures"
            }, {"id": "1674", "name": "Amphetamine mixtures XR"}, {"id": "1679", "name": "Ampyra"}, {
                "id": "1684",
                "name": "Amrix"
            }, {"id": "1689", "name": "Amturnide"}, {"id": "1915", "name": "AmWINS Rx"}, {
                "id": "1693",
                "name": "Anaprox"
            }, {"id": "1697", "name": "Anastrozole"}, {"id": "1701", "name": "Androderm"}, {
                "id": "1705",
                "name": "AndroGel"
            }, {"id": "1709", "name": "Angeliq"}, {"id": "1713", "name": "Anoro Ellipta"}, {
                "id": "1717",
                "name": "Antara"
            }, {"id": "1929", "name": "Anthem BCBS"}, {"id": "1935", "name": "Anthem BCBS 4 Tier"}, {
                "id": "1943",
                "name": "Anthem Select 3-Tier"
            }, {"id": "1951", "name": "Anthem Select 4-Tier Bronze (IN, KY, ME, MO, NH, OH, VA)"}, {
                "id": "1955",
                "name": "Anthem Select 4-Tier Bronze (WI)"
            }, {"id": "1960", "name": "Anthem Select 4-Tier Catastrophic (IN, KY, ME, MO, NH, OH, VA)"}, {
                "id": "1964",
                "name": "Anthem Select 4-Tier Catastrophic (WI)"
            }, {"id": "1973", "name": "Anthem Select 4-Tier Gold (IN, KY, ME, MO, NH, OH, VA)"}, {
                "id": "1976",
                "name": "Anthem Select 4-Tier Gold (WI)"
            }, {"id": "1721", "name": "Anzemet"}, {
                "id": "1918",
                "name": "Aon Hewitt Corporate Health Exchange (UHC)"
            }, {"id": "1953", "name": "Aon Hewitt Corporate Health Exchange (WA)"}, {
                "id": "1725",
                "name": "ApexiCon E"
            }, {"id": "1729", "name": "Apidra Solostar"}, {"id": "1733", "name": "Apidra vial"}, {
                "id": "1737",
                "name": "Aplenzin"
            }, {"id": "1741", "name": "Apokyn"}, {"id": "1745", "name": "Apraclonidine"}, {
                "id": "1749",
                "name": "Apriso"
            }, {"id": "1753", "name": "Aptiom"}, {"id": "1757", "name": "Aptivus"}, {
                "id": "1761",
                "name": "Aquoral"
            }, {"id": "1765", "name": "Aralast NP"}, {"id": "1769", "name": "Aranesp"}, {
                "id": "1773",
                "name": "Arava"
            }, {"id": "1777", "name": "Arcalyst"}, {"id": "1781", "name": "Arcapta Neohaler"}, {
                "id": "1785",
                "name": "Aricept"
            }, {"id": "1789", "name": "Aricept 23"}, {"id": "1793", "name": "Aricept ODT"}, {
                "id": "1797",
                "name": "Arimidex"
            }, {"id": "1800", "name": "Arixtra"}, {"id": "1803", "name": "Armour Thyroid"}, {
                "id": "1806",
                "name": "Arnuity Ellipta"
            }, {"id": "1809", "name": "Aromasin"}, {"id": "1812", "name": "Arranon"}, {
                "id": "1814",
                "name": "Arthrotec"
            }, {"id": "1815", "name": "Arzerra"}, {"id": "1817", "name": "Asacol HD"}, {
                "id": "1818",
                "name": "Asmanex HFA"
            }, {"id": "1820", "name": "Asmanex Twisthaler 110mcg"}, {
                "id": "1822",
                "name": "Asmanex Twisthaler 220mcg"
            }, {"id": "1824", "name": "Astagraf XL"}, {"id": "1826", "name": "Astepro"}, {
                "id": "1962",
                "name": "Asuris Northwest"
            }, {"id": "1974", "name": "Asuris Northwest Medication"}, {"id": "1829", "name": "Atacand"}, {
                "id": "1831",
                "name": "Atacand HCT"
            }, {"id": "1833", "name": "Atelvia"}, {"id": "1835", "name": "Ativan"}, {
                "id": "1837",
                "name": "Atopiclair"
            }, {"id": "1839", "name": "Atorvastatin"}, {
                "id": "1841",
                "name": "Atorvastatin\/Amlodipine"
            }, {"id": "1843", "name": "Atralin"}, {"id": "1845", "name": "Atripla"}, {
                "id": "1847",
                "name": "Atrovent HFA"
            }, {"id": "1849", "name": "Aubagio"}, {"id": "1851", "name": "Augmentin"}, {
                "id": "1853",
                "name": "Augmentin XR"
            }, {"id": "1855", "name": "Auvi-Q"}, {"id": "1857", "name": "Avalide"}, {
                "id": "1859",
                "name": "Avandamet"
            }, {"id": "1861", "name": "Avandaryl"}, {"id": "1863", "name": "Avandia"}, {
                "id": "1865",
                "name": "Avapro"
            }, {"id": "1867", "name": "Avar Cleanser"}, {"id": "1869", "name": "Avar Cleansing Pad"}, {
                "id": "1875",
                "name": "Avar LS Cleanser"
            }, {"id": "1876", "name": "Avar LS Cleansing Pad"}, {"id": "1871", "name": "Avar-E"}, {
                "id": "1873",
                "name": "Avar-E Green"
            }, {"id": "1874", "name": "Avar-E LS"}, {"id": "1877", "name": "Avastin"}, {
                "id": "1878",
                "name": "Aveed"
            }, {"id": "1879", "name": "Avelox Tabs"}, {"id": "1967", "name": "Avera (3-Tier)"}, {
                "id": "1880",
                "name": "Aviane"
            }, {"id": "1881", "name": "Avinza"}, {"id": "1882", "name": "Avita"}, {
                "id": "1883",
                "name": "Avodart"
            }, {"id": "1884", "name": "Avonex"}, {"id": "1885", "name": "Axert"}, {
                "id": "1886",
                "name": "Axiron"
            }, {"id": "1887", "name": "Aygestin"}, {"id": "1888", "name": "Azasan"}, {
                "id": "1889",
                "name": "Azasite"
            }, {"id": "1890", "name": "Azathioprine"}, {"id": "1891", "name": "Azelastine"}, {
                "id": "1892",
                "name": "Azelastine (nasal)"
            }, {"id": "1893", "name": "Azelex"}, {"id": "1894", "name": "Azilect"}, {
                "id": "1895",
                "name": "Azithromycin"
            }, {"id": "1896", "name": "Azithromycin (suspension)"}, {"id": "1897", "name": "Azopt"}, {
                "id": "1898",
                "name": "AZOR"
            }, {"id": "1899", "name": "Azulfidine"}, {"id": "1900", "name": "Azulfidine En-tabs"}, {
                "id": "1",
                "name": "Bacitracin ophthalmic ointment"
            }, {"id": "2", "name": "Bactroban Cream"}, {"id": "10", "name": "Bactroban Ointment"}, {
                "id": "19",
                "name": "Balsalazide"
            }, {"id": "1924", "name": "Banner Health"}, {"id": "35", "name": "Banzel"}, {
                "id": "52",
                "name": "Banzel Oral Suspension"
            }, {"id": "74", "name": "Baraclude"}, {"id": "1928", "name": "Basic Core Formulary"}, {
                "id": "94",
                "name": "BD pen needles"
            }, {"id": "115", "name": "BD ultrafine insulin syringe"}, {"id": "137", "name": "Bebulin"}, {
                "id": "160",
                "name": "Beconase AQ"
            }, {"id": "184", "name": "Belviq"}, {"id": "209", "name": "BeneFIX"}, {
                "id": "235",
                "name": "Benicar"
            }, {"id": "261", "name": "Benicar HCT"}, {"id": "286", "name": "Benlysta"}, {
                "id": "310",
                "name": "Bensal HP"
            }, {"id": "334", "name": "Bentyl"}, {"id": "356", "name": "Benzaclin"}, {
                "id": "378",
                "name": "Benzoyl peroxide\/Clindamycin"
            }, {"id": "400", "name": "Benzoyl peroxide\/erythromycin"}, {
                "id": "423",
                "name": "benzphetamine"
            }, {"id": "445", "name": "Bepreve"}, {"id": "467", "name": "Berinert"}, {
                "id": "490",
                "name": "Besivance"
            }, {"id": "513", "name": "Betagan"}, {"id": "534", "name": "Betaseron"}, {
                "id": "555",
                "name": "Bethkis"
            }, {"id": "576", "name": "Betimol"}, {"id": "597", "name": "Betoptic S"}, {
                "id": "618",
                "name": "Beyaz"
            }, {"id": "639", "name": "BG Star Test Strips"}, {"id": "660", "name": "Biaxin"}, {
                "id": "681",
                "name": "Biaxin XL"
            }, {"id": "702", "name": "Bicalutamide"}, {"id": "722", "name": "BiCNU"}, {
                "id": "742",
                "name": "BiDil"
            }, {"id": "762", "name": "Binosto"}, {"id": "782", "name": "Bionect"}, {
                "id": "801",
                "name": "Bisoprolol"
            }, {"id": "820", "name": "Bisoprolol\/HCTZ"}, {"id": "839", "name": "Blephamide Suspension"}, {
                "id": "1966",
                "name": "BlueCHiP for Healthy Options"
            }, {"id": "1937", "name": "BlueCross BlueShield New Mexico"}, {
                "id": "1946",
                "name": "BlueCross BlueShield New Mexico (3 Tier Open)"
            }, {"id": "1956", "name": "BlueCross BlueShield New Mexico Marketplace Bronze"}, {
                "id": "1965",
                "name": "BlueCross BlueShield New Mexico Marketplace Catastrophic"
            }, {
                "id": "1977",
                "name": "BlueCross BlueShield New Mexico Marketplace Generics Plus Bronze"
            }, {"id": "1934", "name": "BlueCross BlueShield Wyoming"}, {
                "id": "1942",
                "name": "BlueCross BlueShield Wyoming Blue Select Bronze"
            }, {"id": "1950", "name": "BlueCross BlueShield Wyoming Blue Select Catastrophic"}, {
                "id": "1959",
                "name": "BlueCross BlueShield Wyoming Blue Select Gold"
            }, {"id": "1972", "name": "BlueCross BlueShield Wyoming Blue Select Silver"}, {
                "id": "1933",
                "name": "Boeing"
            }, {"id": "858", "name": "Boniva"}, {"id": "877", "name": "Boniva Injection"}, {
                "id": "895",
                "name": "Bontril PDM"
            }, {"id": "913", "name": "Boostrix"}, {
                "id": "1941",
                "name": "BOP of the Presbyterian Church"
            }, {"id": "1949", "name": "BOP of the Presbyterian Church Retirees"}, {
                "id": "932",
                "name": "BOSULIF"
            }, {"id": "949", "name": "Bravelle"}, {"id": "966", "name": "Breeze 2"}, {
                "id": "983",
                "name": "Breeze 2 Test Strips"
            }, {"id": "1000", "name": "Breo Ellipta"}, {"id": "1019", "name": "Brilinta"}, {
                "id": "1036",
                "name": "Brintellix"
            }, {"id": "1053", "name": "Brisdelle"}, {"id": "1070", "name": "Bromfenac"}, {
                "id": "1086",
                "name": "Brovana"
            }, {"id": "1102", "name": "Budesonide 0.25mg & 0.5mg"}, {
                "id": "1118",
                "name": "Budesonide EC"
            }, {"id": "1134", "name": "Budesonide Nasal Suspension"}, {"id": "1150", "name": "Bupap"}, {
                "id": "1166",
                "name": "Buprenorphine"
            }, {"id": "1182", "name": "Buprenorphine\/naloxone"}, {
                "id": "1214",
                "name": "Bupropion (Wellbutrin SR)"
            }, {"id": "1231", "name": "Bupropion (Wellbutrin XL)"}, {
                "id": "1198",
                "name": "Bupropion (Wellbutrin)"
            }, {"id": "1249", "name": "Bupropion (Zyban)"}, {
                "id": "1958",
                "name": "Bureau of Prisons - National Formulary"
            }, {"id": "1265", "name": "Buspirone"}, {"id": "1282", "name": "Butrans"}, {
                "id": "1298",
                "name": "Bydureon"
            }, {"id": "1314", "name": "Bydureon Pen"}, {"id": "1329", "name": "Byetta"}, {
                "id": "1345",
                "name": "Bystolic"
            }, {"id": "8", "name": "Cabergoline"}, {"id": "16", "name": "Caduet"}, {
                "id": "25",
                "name": "Calan SR"
            }, {"id": "41", "name": "Calcipotriene Ointment"}, {"id": "59", "name": "Calcitonin-salmon"}, {
                "id": "60",
                "name": "Calcitrene Ointment"
            }, {"id": "80", "name": "Calcitriol "}, {"id": "100", "name": "Calcitriol Caps"}, {
                "id": "121",
                "name": "Calcium acetate"
            }, {"id": "143", "name": "Cambia"}, {"id": "166", "name": "Campath"}, {
                "id": "190",
                "name": "Campral"
            }, {"id": "215", "name": "Camptosar"}, {"id": "241", "name": "Canasa"}, {
                "id": "268",
                "name": "Candesartan"
            }, {"id": "292", "name": "Candesartan\/HCTZ "}, {"id": "316", "name": "Capecitabine"}, {
                "id": "340",
                "name": "Caprelsa"
            }, {"id": "362", "name": "Carac"}, {"id": "384", "name": "Carafate"}, {
                "id": "406",
                "name": "Carbaglu"
            }, {"id": "429", "name": "Carbamazepine"}, {"id": "451", "name": "Carbamazepine XR"}, {
                "id": "474",
                "name": "Carbatrol"
            }, {"id": "496", "name": "Carbidopa\/levodopa"}, {
                "id": "519",
                "name": "Carbidopa\/levodopa ER"
            }, {"id": "540", "name": "Carbidopa\/levodopa ODT"}, {"id": "561", "name": "Cardene SR"}, {
                "id": "582",
                "name": "Cardizem"
            }, {"id": "603", "name": "Cardizem CD"}, {"id": "624", "name": "Cardizem LA"}, {
                "id": "645",
                "name": "Cardura"
            }, {"id": "666", "name": "Cardura XL"}, {"id": "1971", "name": "CareLink"}, {
                "id": "687",
                "name": "Carimune NF"
            }, {"id": "708", "name": "Carisoprodol"}, {"id": "728", "name": "Carteolol"}, {
                "id": "748",
                "name": "Cartia XT"
            }, {"id": "768", "name": "Carticel"}, {"id": "788", "name": "Carvedilol"}, {
                "id": "807",
                "name": "Casodex"
            }, {"id": "826", "name": "Cataflam"}, {"id": "845", "name": "Cayston"}, {
                "id": "864",
                "name": "Cedax"
            }, {"id": "883", "name": "Cefaclor 250 mg\/ 5 ml "}, {"id": "901", "name": "Cefdinir"}, {
                "id": "919",
                "name": "Ceftin"
            }, {"id": "937", "name": "Ceftin Suspension"}, {"id": "954", "name": "Cefuroxime"}, {
                "id": "971",
                "name": "Cefuroxime Suspension"
            }, {"id": "988", "name": "Celebrex"}, {"id": "1006", "name": "Celexa"}, {
                "id": "1024",
                "name": "Cellcept"
            }, {"id": "1041", "name": "Celontin"}, {"id": "1058", "name": "Cenestin"}, {
                "id": "1074",
                "name": "Cerdelga"
            }, {"id": "1090", "name": "Cerefolin NAC "}, {"id": "1106", "name": "Cervarix"}, {
                "id": "1122",
                "name": "Cesamet"
            }, {"id": "1138", "name": "Cetraxal"}, {"id": "1154", "name": "Chantix"}, {
                "id": "1170",
                "name": "Chlorpheniramine\/Hydrocodone"
            }, {"id": "1186", "name": "Chlorpropamide"}, {"id": "1270", "name": "Cialis (PRN\/ED)"}, {
                "id": "1202",
                "name": "Cialis 2.5 mg (OAD\/BPH)"
            }, {"id": "1218", "name": "Cialis 2.5 mg (OAD\/ED)"}, {
                "id": "1236",
                "name": "Cialis 5 mg (OAD\/BPH)"
            }, {"id": "1253", "name": "Cialis 5 mg (OAD\/ED)"}, {
                "id": "1286",
                "name": "Ciclopirox Nail Lacquer"
            }, {"id": "1302", "name": "Cilostazol"}, {"id": "1318", "name": "Ciloxan ointment"}, {
                "id": "1333",
                "name": "Cimzia"
            }, {"id": "1349", "name": "Cimzia (prefilled syringe)"}, {"id": "1363", "name": "Cinryze"}, {
                "id": "1377",
                "name": "Cipro"
            }, {"id": "1434", "name": "Cipro HC"}, {"id": "1392", "name": "Ciprodex"}, {
                "id": "1406",
                "name": "Ciprofloxacin"
            }, {"id": "1420", "name": "Ciprofloxacin (Ciloxan)"}, {"id": "1448", "name": "Citalopram"}, {
                "id": "1462",
                "name": "Citalopram Solution"
            }, {"id": "1476", "name": "CitraNatal 90 DHA"}, {"id": "1490", "name": "CitraNatal Assure"}, {
                "id": "1505",
                "name": "CitraNatal B-Calm"
            }, {"id": "1517", "name": "CitraNatal DHA"}, {"id": "1531", "name": "CitraNatal Harmony"}, {
                "id": "1543",
                "name": "Citranatal Rx"
            }, {"id": "1554", "name": "Claravis"}, {"id": "1565", "name": "Clarifoam EF"}, {
                "id": "1575",
                "name": "Clarinex"
            }, {"id": "1594", "name": "Clarinex RediTabs"}, {"id": "1585", "name": "Clarinex-D "}, {
                "id": "1602",
                "name": "Clarithromycin"
            }, {"id": "1610", "name": "Clarithromycin (Biaxin XL)"}, {
                "id": "1618",
                "name": "Cleocin T Gel"
            }, {"id": "1626", "name": "Climara"}, {"id": "1632", "name": "Climara Pro"}, {
                "id": "1638",
                "name": "Clindacin-P"
            }, {"id": "1644", "name": "Clindagel"}, {"id": "1650", "name": "Clindamax Gel"}, {
                "id": "1655",
                "name": "Clindamax Lotion"
            }, {"id": "1660", "name": "Clobetasol"}, {"id": "1665", "name": "Clobex"}, {
                "id": "1670",
                "name": "Clobex Spray"
            }, {"id": "1675", "name": "Cloderm"}, {"id": "1680", "name": "Clomid"}, {
                "id": "1685",
                "name": "Clonazepam"
            }, {"id": "1690", "name": "Clopidogrel"}, {"id": "1694", "name": "Clotrimazole Lozenge"}, {
                "id": "1698",
                "name": "Clozapine"
            }, {"id": "1702", "name": "Clozaril"}, {"id": "1706", "name": "Coartem"}, {
                "id": "1710",
                "name": "Colazal"
            }, {"id": "1714", "name": "Colcrys"}, {"id": "1718", "name": "Colestid"}, {
                "id": "1722",
                "name": "Colestipol"
            }, {"id": "1726", "name": "Coly-mycin S"}, {"id": "1730", "name": "Colyte"}, {
                "id": "1734",
                "name": "Combigan"
            }, {"id": "1738", "name": "Combipatch"}, {"id": "1742", "name": "Combivent Respimat"}, {
                "id": "1746",
                "name": "Combivir"
            }, {"id": "1750", "name": "Cometriq"}, {"id": "1754", "name": "Complera"}, {
                "id": "1758",
                "name": "Comtan"
            }, {"id": "1762", "name": "Concerta"}, {"id": "1766", "name": "Condylox"}, {
                "id": "1770",
                "name": "Condylox Gel"
            }, {"id": "1774", "name": "Constulose"}, {"id": "1778", "name": "Contour"}, {
                "id": "1782",
                "name": "Contour Next EZ"
            }, {"id": "1786", "name": "Contour Next Test Strips"}, {
                "id": "1790",
                "name": "Contour Test Strips"
            }, {"id": "1794", "name": "Contrave"}, {"id": "1798", "name": "Copaxone 20mg"}, {
                "id": "1801",
                "name": "Copaxone 40mg"
            }, {"id": "1804", "name": "Copegus"}, {"id": "1807", "name": "Cordarone"}, {
                "id": "1810",
                "name": "Coreg"
            }, {"id": "1813", "name": "Coreg CR"}, {"id": "1816", "name": "Corgard"}, {
                "id": "1819",
                "name": "Corifact"
            }, {"id": "1821", "name": "Cormax"}, {"id": "1823", "name": "Cortenema"}, {
                "id": "1825",
                "name": "Cortifoam"
            }, {"id": "1827", "name": "Cortisporin Otic"}, {"id": "1828", "name": "Cosopt"}, {
                "id": "1830",
                "name": "Cosopt PF"
            }, {"id": "1832", "name": "Coumadin"}, {"id": "1834", "name": "Cozaar"}, {
                "id": "1836",
                "name": "Creon"
            }, {"id": "1838", "name": "Crestor"}, {"id": "1840", "name": "Crinone"}, {
                "id": "1842",
                "name": "Crixivan"
            }, {"id": "1844", "name": "Cromolyn (Crolom)"}, {"id": "1846", "name": "Cromolyn Nebulizer"}, {
                "id": "1848",
                "name": "Cubicin"
            }, {"id": "1850", "name": "Cuprimine"}, {"id": "1852", "name": "Cutivate Cream"}, {
                "id": "1854",
                "name": "Cutivate Lotion"
            }, {"id": "1856", "name": "Cuvposa"}, {"id": "1858", "name": "Cyanocobalamin"}, {
                "id": "1860",
                "name": "Cyclessa"
            }, {"id": "1862", "name": "Cyclobenzaprine"}, {"id": "1864", "name": "Cycloset"}, {
                "id": "1866",
                "name": "Cyclosporine"
            }, {"id": "1868", "name": "Cymbalta"}, {"id": "1870", "name": "Cytomel"}, {
                "id": "1872",
                "name": "Cytotec"
            }, {"id": "9", "name": "Dacogen"}, {"id": "17", "name": "Daliresp"}, {
                "id": "26",
                "name": "Danazol"
            }, {"id": "42", "name": "Daypro"}, {"id": "61", "name": "Daytrana"}, {
                "id": "62",
                "name": "Delatestryl"
            }, {"id": "81", "name": "Delzicol"}, {"id": "101", "name": "Denavir Cream"}, {
                "id": "122",
                "name": "Depakene"
            }, {"id": "144", "name": "Depakote"}, {"id": "167", "name": "Depakote ER"}, {
                "id": "191",
                "name": "Depen"
            }, {"id": "216", "name": "Deplin 15"}, {"id": "242", "name": "Deplin 7.5"}, {
                "id": "269",
                "name": "Depo-Provera"
            }, {"id": "293", "name": "Depo-Provera Contraceptive"}, {
                "id": "317",
                "name": "Depo-subq provera 104"
            }, {"id": "341", "name": "Depo-Testosterone"}, {"id": "363", "name": "Desipramine"}, {
                "id": "385",
                "name": "Desloratadine"
            }, {"id": "407", "name": "Desonate"}, {"id": "430", "name": "Desonide"}, {
                "id": "452",
                "name": "Desvenlafaxine FUMARATE ER"
            }, {"id": "475", "name": "Detrol"}, {"id": "497", "name": "Detrol LA"}, {
                "id": "520",
                "name": "Dexamethasone\/Tobramycin"
            }, {"id": "541", "name": "Dexcom G4 Platinum Pediatric Receiver"}, {
                "id": "562",
                "name": "Dexcom G4 Platinum Receiver"
            }, {"id": "583", "name": "Dexcom G4 Platinum Sensor"}, {
                "id": "604",
                "name": "Dexcom G4 Platinum Transmitter"
            }, {"id": "625", "name": "Dexedrine"}, {"id": "646", "name": "Dexilant"}, {
                "id": "667",
                "name": "Dexmethylphenidate"
            }, {"id": "688", "name": "Dexmethylphenidate ER"}, {"id": "709", "name": "Diabeta"}, {
                "id": "729",
                "name": "Diamox Sequels"
            }, {"id": "749", "name": "Diastat"}, {"id": "769", "name": "Diazepam"}, {
                "id": "789",
                "name": "Diclegis"
            }, {"id": "808", "name": "Diclofenac ER"}, {"id": "846", "name": "Diclofenac Solution"}, {
                "id": "827",
                "name": "Diclofenac\/Misoprostol"
            }, {"id": "865", "name": "Dicyclomine"}, {"id": "884", "name": "Didrex"}, {
                "id": "902",
                "name": "diethylpropion"
            }, {"id": "920", "name": "Diethylpropion ER"}, {"id": "938", "name": "Differin Cream 0.1%"}, {
                "id": "955",
                "name": "Differin Gel 0.1%"
            }, {"id": "972", "name": "Differin Gel 0.3%"}, {"id": "989", "name": "Differin Lotion 0.1%"}, {
                "id": "1007",
                "name": "Dificid"
            }, {"id": "1025", "name": "Diflucan"}, {"id": "1042", "name": "Digoxin"}, {
                "id": "1059",
                "name": "Dilacor XR"
            }, {"id": "1075", "name": "Dilantin"}, {"id": "1091", "name": "Dilantin Infatabs"}, {
                "id": "1107",
                "name": "Dilantin Suspension"
            }, {"id": "1123", "name": "Dilatrate SR"}, {"id": "1139", "name": "Dilaudid"}, {
                "id": "1155",
                "name": "Diovan"
            }, {"id": "1171", "name": "Diovan HCT"}, {"id": "1187", "name": "Dipentum"}, {
                "id": "1203",
                "name": "Diprolene"
            }, {"id": "1219", "name": "Diprolene AF"}, {"id": "1237", "name": "Dipyridamole"}, {
                "id": "1254",
                "name": "Disopyramide"
            }, {"id": "1271", "name": "Ditropan XL"}, {"id": "1287", "name": "Divalproex"}, {
                "id": "1303",
                "name": "Divalproex ER"
            }, {"id": "1319", "name": "Divigel"}, {"id": "1334", "name": "Docefrez"}, {
                "id": "1335",
                "name": "Donepezil"
            }, {"id": "1350", "name": "Donepezil 23"}, {"id": "1364", "name": "Donepezil ODT"}, {
                "id": "1378",
                "name": "Doribax"
            }, {"id": "1393", "name": "Doryx"}, {"id": "1407", "name": "Dorzolamide"}, {
                "id": "1421",
                "name": "Dorzolamide \/ Timolol"
            }, {"id": "1435", "name": "Dovonex Cream"}, {"id": "1449", "name": "Doxazosin"}, {
                "id": "1463",
                "name": "Doxepin"
            }, {"id": "1477", "name": "Doxil"}, {"id": "1491", "name": "Duac "}, {
                "id": "1506",
                "name": "Duavee"
            }, {"id": "1518", "name": "Duetact"}, {"id": "1532", "name": "Duexis"}, {
                "id": "1544",
                "name": "Dulera"
            }, {"id": "1555", "name": "Duloxetine"}, {"id": "1566", "name": "Duoneb"}, {
                "id": "1576",
                "name": "Duragesic"
            }, {"id": "1586", "name": "Durezol"}, {"id": "1595", "name": "Dutoprol"}, {
                "id": "1603",
                "name": "Dyazide"
            }, {"id": "1611", "name": "Dymista"}, {"id": "1619", "name": "Dynacin"}, {
                "id": "3",
                "name": "Econazole"
            }, {"id": "11", "name": "Ecoza"}, {"id": "20", "name": "Edarbi"}, {
                "id": "36",
                "name": "Edarbyclor"
            }, {"id": "53", "name": "Edluar"}, {"id": "75", "name": "Edurant"}, {
                "id": "95",
                "name": "Effexor XR"
            }, {"id": "116", "name": "Effient"}, {"id": "138", "name": "Efudex"}, {
                "id": "161",
                "name": "Eight(8)-Mop"
            }, {"id": "185", "name": "Elestat"}, {"id": "210", "name": "Elestrin"}, {
                "id": "236",
                "name": "Eletone"
            }, {"id": "262", "name": "Elidel"}, {"id": "287", "name": "Eligard"}, {
                "id": "311",
                "name": "Eliphos"
            }, {"id": "335", "name": "Eliquis"}, {"id": "357", "name": "Ella"}, {
                "id": "379",
                "name": "Ellence"
            }, {"id": "401", "name": "Elocon Cream"}, {"id": "424", "name": "Eloctate"}, {
                "id": "446",
                "name": "Eloxatin"
            }, {"id": "468", "name": "Emadine"}, {"id": "491", "name": "Emcyt"}, {
                "id": "514",
                "name": "Emend"
            }, {"id": "535", "name": "Emsam"}, {"id": "556", "name": "Emtriva (FTC)"}, {
                "id": "577",
                "name": "Enablex"
            }, {"id": "598", "name": "Enalapril"}, {"id": "619", "name": "Enalapril\/HCTZ"}, {
                "id": "640",
                "name": "Enbrel"
            }, {"id": "661", "name": "Endometrin"}, {"id": "682", "name": "Enjuvia"}, {
                "id": "703",
                "name": "Enoxaparin"
            }, {"id": "723", "name": "Entecavir"}, {"id": "743", "name": "Entereg"}, {
                "id": "763",
                "name": "Entocort EC"
            }, {"id": "783", "name": "Entyvio"}, {"id": "802", "name": "Enulose"}, {
                "id": "821",
                "name": "Epaned"
            }, {"id": "840", "name": "Epanova"}, {"id": "859", "name": "Epiduo"}, {
                "id": "878",
                "name": "EpiPen"
            }, {"id": "896", "name": "EpiPen Jr"}, {"id": "914", "name": "Epiquin Micro"}, {
                "id": "933",
                "name": "Epitol"
            }, {"id": "950", "name": "Epivir (3TC)"}, {"id": "967", "name": "Epivir-HBV"}, {
                "id": "984",
                "name": "Eplerenone"
            }, {"id": "1001", "name": "Epogen"}, {"id": "1020", "name": "Epoprostenol"}, {
                "id": "1037",
                "name": "Eprosartan"
            }, {"id": "1054", "name": "Epzicom"}, {"id": "1071", "name": "Equetro"}, {
                "id": "1087",
                "name": "Erbitux"
            }, {"id": "1103", "name": "Erivedge"}, {"id": "1119", "name": "Ertaczo"}, {
                "id": "1135",
                "name": "Erwinaze"
            }, {"id": "1151", "name": "Esbriet"}, {"id": "1167", "name": "Escitalopram Solution"}, {
                "id": "1183",
                "name": "Esomeprazole STRONTIUM"
            }, {"id": "1199", "name": "Estrace"}, {"id": "1215", "name": "Estrace Cream"}, {
                "id": "1232",
                "name": "Estradiol"
            }, {"id": "1250", "name": "Estradiol transdermal"}, {
                "id": "1233",
                "name": "Estradiol\/norgestimate"
            }, {"id": "1266", "name": "Estrasorb"}, {"id": "1267", "name": "Estring"}, {
                "id": "1283",
                "name": "EstroGel"
            }, {"id": "1299", "name": "Estropipate"}, {"id": "1315", "name": "Estrostep Fe"}, {
                "id": "1330",
                "name": "Eszopiclone"
            }, {"id": "1346", "name": "Etidronate"}, {"id": "1360", "name": "Euflexxa"}, {
                "id": "1374",
                "name": "Evamist"
            }, {"id": "1388", "name": "Evista"}, {"id": "1403", "name": "Evoclin"}, {
                "id": "1417",
                "name": "Evoxac"
            }, {"id": "1431", "name": "Evzio"}, {"id": "1445", "name": "Exalgo"}, {
                "id": "1459",
                "name": "Exelderm"
            }, {"id": "1473", "name": "Exelon"}, {"id": "1487", "name": "Exelon Patch"}, {
                "id": "1501",
                "name": "Exemestane"
            }, {"id": "1514", "name": "Exforge"}, {"id": "1528", "name": "Exforge HCT"}, {
                "id": "1539",
                "name": "Exjade"
            }, {"id": "1540", "name": "Extavia"}, {"id": "1551", "name": "Extina"}, {
                "id": "1562",
                "name": "Eylea"
            }, {"id": "6", "name": "Fabior"}, {"id": "14", "name": "Factive"}, {
                "id": "23",
                "name": "FaLessa Kit"
            }, {"id": "39", "name": "Famciclovir"}, {"id": "57", "name": "Famvir"}, {
                "id": "78",
                "name": "Fanapt"
            }, {"id": "98", "name": "Fareston"}, {"id": "119", "name": "Farxiga"}, {
                "id": "141",
                "name": "Faslodex"
            }, {"id": "164", "name": "FazaClo"}, {"id": "188", "name": "Feiba NF"}, {
                "id": "213",
                "name": "Felbatol"
            }, {"id": "239", "name": "Feldene"}, {"id": "266", "name": "Felodipine"}, {
                "id": "290",
                "name": "Femara"
            }, {"id": "314", "name": "Femcon Fe"}, {"id": "338", "name": "FemHRT"}, {
                "id": "360",
                "name": "Femring"
            }, {"id": "382", "name": "Fenofibrate Caps"}, {"id": "404", "name": "Fenofibric Acid"}, {
                "id": "427",
                "name": "Fenoglide"
            }, {"id": "449", "name": "Fenoprofen"}, {"id": "472", "name": "Fentanyl Transdermal"}, {
                "id": "494",
                "name": "Fentanyl Transmucosal"
            }, {"id": "517", "name": "Fentora"}, {"id": "538", "name": "FeRiva"}, {
                "id": "559",
                "name": "FeRiva FA"
            }, {"id": "580", "name": "Ferralet 90"}, {"id": "601", "name": "Ferriprox"}, {
                "id": "622",
                "name": "Fetzima"
            }, {"id": "643", "name": "Fibricor"}, {"id": "664", "name": "Finacea"}, {
                "id": "685",
                "name": "Finasteride (Proscar)"
            }, {"id": "706", "name": "Fioricet"}, {"id": "726", "name": "Firazyr"}, {
                "id": "746",
                "name": "Firmagon"
            }, {"id": "766", "name": "Flebogamma DIF"}, {"id": "786", "name": "Flector Patch"}, {
                "id": "862",
                "name": "Flo-Pred"
            }, {"id": "805", "name": "Flolan"}, {"id": "824", "name": "Flomax"}, {
                "id": "843",
                "name": "Flonase"
            }, {"id": "881", "name": "Flovent Diskus"}, {"id": "899", "name": "Flovent HFA"}, {
                "id": "917",
                "name": "Fluarix"
            }, {"id": "935", "name": "Fluconazole"}, {"id": "952", "name": "Flumadine"}, {
                "id": "969",
                "name": "Fluocinonide"
            }, {"id": "986", "name": "Fluorometholone Susp"}, {"id": "1004", "name": "Fluoroplex"}, {
                "id": "1022",
                "name": "Fluorouracil"
            }, {"id": "1039", "name": "Fluoxetine"}, {"id": "1056", "name": "Fluoxetine Tablets 60mg"}, {
                "id": "1072",
                "name": "Flurazepam"
            }, {"id": "1088", "name": "Flurbiprofen"}, {"id": "1104", "name": "Flurbiprofen (Ocufen)"}, {
                "id": "1120",
                "name": "Flutamide"
            }, {"id": "1136", "name": "Fluticasone (Flonase)"}, {
                "id": "1152",
                "name": "Fluticasone (topical)"
            }, {"id": "1168", "name": "Fluvastatin"}, {"id": "1184", "name": "Fluvoxamine"}, {
                "id": "1200",
                "name": "Fluvoxamine SR"
            }, {"id": "1216", "name": "Fluzone"}, {"id": "1234", "name": "Fluzone HD"}, {
                "id": "1251",
                "name": "Fluzone IntraDermal"
            }, {"id": "1268", "name": "FML Forte"}, {"id": "1284", "name": "FML Ointment"}, {
                "id": "1300",
                "name": "Focalin"
            }, {"id": "1316", "name": "Focalin XR"}, {"id": "1331", "name": "Follistim AQ"}, {
                "id": "1347",
                "name": "Folotyn"
            }, {"id": "1361", "name": "Foradil"}, {"id": "1375", "name": "Forfivo XL"}, {
                "id": "1389",
                "name": "Fortamet"
            }, {"id": "1404", "name": "Forteo"}, {"id": "1418", "name": "Fortesta"}, {
                "id": "1432",
                "name": "Fortical"
            }, {"id": "1446", "name": "Fosamax"}, {"id": "1460", "name": "Fosamax Plus D"}, {
                "id": "1474",
                "name": "Fosphenytoin"
            }, {"id": "1488", "name": "Fosrenol"}, {"id": "1502", "name": "Fragmin"}, {
                "id": "1503",
                "name": "FreeStyle InsuLinx Test Strips"
            }, {"id": "1515", "name": "FreeStyle Lite"}, {
                "id": "1529",
                "name": "FreeStyle Lite Test Strips"
            }, {"id": "1541", "name": "Freestyle Test Strips"}, {"id": "1552", "name": "Frova"}, {
                "id": "1563",
                "name": "Fulyzaq"
            }, {"id": "1573", "name": "Fusilev"}, {"id": "1583", "name": "Fuzeon"}, {
                "id": "1592",
                "name": "FYCOMPA"
            }, {"id": "5", "name": "Gabapentin"}, {"id": "13", "name": "Gabapentin Solution"}, {
                "id": "22",
                "name": "Gabitril"
            }, {"id": "38", "name": "Galantamine"}, {"id": "55", "name": "Galantamine ER"}, {
                "id": "56",
                "name": "Galzin"
            }, {"id": "77", "name": "Gammagard Liquid"}, {"id": "97", "name": "Gamunex-C"}, {
                "id": "118",
                "name": "Ganciclovir"
            }, {"id": "140", "name": "Ganirelix"}, {"id": "163", "name": "Gardasil"}, {
                "id": "187",
                "name": "Gattex"
            }, {"id": "212", "name": "Gazyva"}, {"id": "265", "name": "Gel-One"}, {
                "id": "238",
                "name": "Gelclair"
            }, {"id": "264", "name": "Gelnique"}, {"id": "289", "name": "Gemfibrozil"}, {
                "id": "313",
                "name": "Gemzar"
            }, {"id": "337", "name": "Generess Fe"}, {"id": "359", "name": "Generlac"}, {
                "id": "381",
                "name": "Gengraf"
            }, {"id": "403", "name": "Genotropin"}, {"id": "426", "name": "Genotropin Miniquick"}, {
                "id": "448",
                "name": "Gentamicin Solution"
            }, {"id": "471", "name": "Geodon"}, {"id": "493", "name": "Gianvi"}, {
                "id": "516",
                "name": "Giazo"
            }, {"id": "537", "name": "Gilenya"}, {"id": "558", "name": "Gilotrif"}, {
                "id": "579",
                "name": "Glassia"
            }, {"id": "600", "name": "Gleevec"}, {"id": "621", "name": "Glimepiride"}, {
                "id": "642",
                "name": "Glipizide"
            }, {"id": "663", "name": "Glipizide XL"}, {"id": "705", "name": "GlucaGen Hypo-Kit 2-Pack"}, {
                "id": "684",
                "name": "GlucaGen HypoKit"
            }, {"id": "725", "name": "Glucagon Emergency Kit"}, {
                "id": "745",
                "name": "Glucocard 01 Test Strips"
            }, {"id": "765", "name": "Glucocard Expression Test Strips"}, {
                "id": "785",
                "name": "Glucocard Vital Test Strips"
            }, {"id": "804", "name": "Glucophage"}, {"id": "823", "name": "Glucophage XR"}, {
                "id": "842",
                "name": "Glucotrol"
            }, {"id": "861", "name": "Glucotrol XL"}, {"id": "880", "name": "Glucovance"}, {
                "id": "898",
                "name": "Glumetza"
            }, {"id": "916", "name": "Glyburide"}, {"id": "934", "name": "Glyburide Micronized"}, {
                "id": "951",
                "name": "Glynase"
            }, {"id": "968", "name": "Glyset"}, {"id": "985", "name": "Golytely"}, {
                "id": "1002",
                "name": "Gonal-F"
            }, {"id": "1003", "name": "Gralise"}, {"id": "1021", "name": "Granisetron"}, {
                "id": "1038",
                "name": "Granix"
            }, {"id": "1055", "name": "Grastek"}, {"id": "336", "name": "H.P. Acthar Gel"}, {
                "id": "4",
                "name": "Halaven"
            }, {"id": "12", "name": "Halflytely Kit"}, {"id": "21", "name": "Halobetasol"}, {
                "id": "37",
                "name": "Halog Cream"
            }, {"id": "54", "name": "Harvoni"}, {"id": "76", "name": "Hecoria"}, {
                "id": "96",
                "name": "Hectorol"
            }, {"id": "117", "name": "Hectorol IV"}, {"id": "139", "name": "Helixate FS"}, {
                "id": "162",
                "name": "Hemofil M"
            }, {"id": "186", "name": "Hepsera"}, {"id": "211", "name": "Herceptin"}, {
                "id": "237",
                "name": "Hetlioz"
            }, {"id": "263", "name": "Hizentra"}, {"id": "288", "name": "Homatropine \/ Hydrocodone"}, {
                "id": "312",
                "name": "Horizant"
            }, {"id": "358", "name": "Humalog KwikPen"}, {
                "id": "380",
                "name": "Humalog Mix 50\/50 KwikPen"
            }, {"id": "402", "name": "Humalog Mix 50\/50 vial"}, {
                "id": "425",
                "name": "Humalog Mix 75\/25 KwikPen"
            }, {"id": "447", "name": "Humalog Mix 75\/25 vial"}, {"id": "469", "name": "Humalog vial"}, {
                "id": "470",
                "name": "Humate-P"
            }, {"id": "492", "name": "Humatrope"}, {"id": "515", "name": "Humatrope Cartridge"}, {
                "id": "536",
                "name": "Humira"
            }, {"id": "557", "name": "Humulin 70\/30 Kwikpen"}, {
                "id": "578",
                "name": "Humulin 70\/30 Pen"
            }, {"id": "599", "name": "Humulin 70\/30 vial"}, {"id": "620", "name": "Humulin N Kwikpen"}, {
                "id": "641",
                "name": "Humulin N Pen"
            }, {"id": "662", "name": "Humulin N vial"}, {"id": "683", "name": "Humulin R U-500"}, {
                "id": "704",
                "name": "Humulin R vial"
            }, {"id": "724", "name": "Hyalgan"}, {"id": "744", "name": "Hycamtin"}, {
                "id": "764",
                "name": "Hycamtin IV"
            }, {"id": "784", "name": "Hydrocodone\/Apap"}, {
                "id": "803",
                "name": "Hydrocodone\/Ibuprofen"
            }, {"id": "822", "name": "Hydrocortisone\/neomycin\/polymyxinB (otics)"}, {
                "id": "841",
                "name": "Hydromorphone"
            }, {"id": "860", "name": "Hydromorphone ER"}, {"id": "879", "name": "Hydroxychloroquine"}, {
                "id": "897",
                "name": "Hyophen"
            }, {"id": "915", "name": "Hyzaar"}, {"id": "18", "name": "Ibandronate"}, {
                "id": "27",
                "name": "iBG Star"
            }, {"id": "43", "name": "Iclusig"}, {"id": "63", "name": "Ifex"}, {
                "id": "82",
                "name": "Ilaris"
            }, {"id": "102", "name": "Ilevro"}, {"id": "123", "name": "Imbruvica"}, {
                "id": "145",
                "name": "Imiquimod"
            }, {"id": "168", "name": "Imitrex"}, {"id": "192", "name": "Imitrex Nasal Spray"}, {
                "id": "217",
                "name": "Imitrex STATdose "
            }, {"id": "243", "name": "Imuran"}, {"id": "270", "name": "Incivek"}, {
                "id": "294",
                "name": "Increlex"
            }, {"id": "318", "name": "Incruse Ellipta"}, {"id": "342", "name": "Inderal LA"}, {
                "id": "364",
                "name": "Indomethacin"
            }, {"id": "386", "name": "Inlyta"}, {"id": "408", "name": "Innopran XL"}, {
                "id": "431",
                "name": "Inspra"
            }, {"id": "453", "name": "Intelence"}, {"id": "476", "name": "Intermezzo"}, {
                "id": "498",
                "name": "Intron A"
            }, {"id": "521", "name": "Intuniv"}, {"id": "542", "name": "Invanz"}, {
                "id": "563",
                "name": "Invega"
            }, {"id": "584", "name": "Invega Sustenna"}, {"id": "605", "name": "Invirase"}, {
                "id": "626",
                "name": "Invokamet"
            }, {"id": "647", "name": "Invokana"}, {"id": "668", "name": "Ipratropium Nebulizer"}, {
                "id": "689",
                "name": "Irbesartan "
            }, {"id": "710", "name": "Irbesartan\/HCTZ"}, {"id": "730", "name": "Isentress"}, {
                "id": "750",
                "name": "Isordil"
            }, {"id": "770", "name": "Isosorbide dinitrate SR"}, {"id": "790", "name": "Isradipine"}, {
                "id": "809",
                "name": "Istalol"
            }, {"id": "828", "name": "Istodax"}, {"id": "847", "name": "Itraconazole"}, {
                "id": "866",
                "name": "Ixempra"
            }, {"id": "28", "name": "Jakafi"}, {"id": "44", "name": "Jalyn"}, {
                "id": "64",
                "name": "Jantoven"
            }, {"id": "83", "name": "Janumet"}, {"id": "103", "name": "Janumet XR"}, {
                "id": "124",
                "name": "Januvia"
            }, {"id": "146", "name": "Jardiance"}, {"id": "169", "name": "Jentadueto"}, {
                "id": "193",
                "name": "Jevtana"
            }, {"id": "218", "name": "Jublia"}, {"id": "244", "name": "Juxtapid"}, {
                "id": "29",
                "name": "Kadcyla"
            }, {"id": "45", "name": "Kadian"}, {"id": "65", "name": "Kalbitor"}, {
                "id": "84",
                "name": "Kaletra"
            }, {"id": "104", "name": "Kalydeco"}, {"id": "125", "name": "Kapvay"}, {
                "id": "147",
                "name": "Kazano"
            }, {"id": "170", "name": "Kenalog"}, {"id": "194", "name": "Keppra"}, {
                "id": "219",
                "name": "Keppra Solution"
            }, {"id": "245", "name": "Keppra XR"}, {"id": "271", "name": "Kerlone"}, {
                "id": "295",
                "name": "Kerydin"
            }, {"id": "319", "name": "Ketek"}, {"id": "320", "name": "Ketoconazole"}, {
                "id": "343",
                "name": "Ketoprofen ER"
            }, {"id": "365", "name": "Ketorolac"}, {"id": "387", "name": "Ketorolac (Acular\/LS)"}, {
                "id": "409",
                "name": "Keytruda"
            }, {"id": "432", "name": "Khedezla"}, {"id": "454", "name": "Kineret"}, {
                "id": "477",
                "name": "Klaron"
            }, {"id": "499", "name": "Klonopin"}, {"id": "522", "name": "Koate DVI"}, {
                "id": "543",
                "name": "Kogenate FS"
            }, {"id": "564", "name": "Kombiglyze XR"}, {"id": "585", "name": "Korlym"}, {
                "id": "606",
                "name": "Kristalose"
            }, {"id": "627", "name": "Krystexxa"}, {"id": "648", "name": "Kuvan"}, {
                "id": "669",
                "name": "Kynamro"
            }, {"id": "690", "name": "Kyprolis"}, {"id": "30", "name": "Labetalol"}, {
                "id": "46",
                "name": "Lacrisert"
            }, {"id": "66", "name": "Lactulose"}, {"id": "85", "name": "Lamictal"}, {
                "id": "105",
                "name": "Lamictal ODT"
            }, {"id": "126", "name": "Lamictal XR"}, {"id": "148", "name": "Lamisil (oral)"}, {
                "id": "171",
                "name": "Lamivudine"
            }, {"id": "195", "name": "Lamivudine\/Zidovudine"}, {"id": "220", "name": "Lamotrigine"}, {
                "id": "246",
                "name": "Lamotrigine XR"
            }, {"id": "272", "name": "Lanoxin"}, {"id": "296", "name": "Lanoxin (new strengths)"}, {
                "id": "321",
                "name": "Lansoprazole"
            }, {"id": "344", "name": "Lantus Solostar"}, {"id": "366", "name": "Lantus vial"}, {
                "id": "388",
                "name": "Lastacaft"
            }, {"id": "410", "name": "Latanoprost"}, {"id": "433", "name": "Latuda"}, {
                "id": "455",
                "name": "Lazanda"
            }, {"id": "478", "name": "Leflunomide"}, {"id": "500", "name": "Lescol"}, {
                "id": "523",
                "name": "Lescol XL"
            }, {"id": "544", "name": "Letairis"}, {"id": "565", "name": "Letrozole"}, {
                "id": "586",
                "name": "Leukeran"
            }, {"id": "607", "name": "Leukine"}, {"id": "628", "name": "Levalbuterol Nebulizer"}, {
                "id": "649",
                "name": "Levaquin"
            }, {"id": "670", "name": "Levatol"}, {"id": "691", "name": "Levemir FlexPen"}, {
                "id": "711",
                "name": "Levemir FlexTouch Pen"
            }, {"id": "731", "name": "Levemir vial"}, {"id": "751", "name": "Levetiracetam"}, {
                "id": "771",
                "name": "Levitra"
            }, {"id": "791", "name": "Levobunolol"}, {"id": "810", "name": "Levocetirizine"}, {
                "id": "829",
                "name": "Levofloxacin"
            }, {"id": "848", "name": "Levothyroxine"}, {"id": "867", "name": "Levoxyl"}, {
                "id": "885",
                "name": "Levulan Kerastick"
            }, {"id": "903", "name": "Lexapro"}, {"id": "921", "name": "Lexapro Solution"}, {
                "id": "939",
                "name": "Lexiva"
            }, {"id": "956", "name": "Lialda"}, {"id": "973", "name": "Lidoderm"}, {
                "id": "990",
                "name": "Lindane Shampoo"
            }, {"id": "1008", "name": "Linzess"}, {"id": "1026", "name": "Liothyronine"}, {
                "id": "1043",
                "name": "Lipitor"
            }, {"id": "1060", "name": "Lipofen"}, {"id": "1076", "name": "Liptruzet"}, {
                "id": "1092",
                "name": "Lithobid"
            }, {"id": "1108", "name": "Lithostat"}, {"id": "1124", "name": "Livalo"}, {
                "id": "1204",
                "name": "Lo Loestrin Fe"
            }, {"id": "1140", "name": "Locoid Lipocream"}, {"id": "1156", "name": "Locoid Lotion"}, {
                "id": "1172",
                "name": "Loestrin Fe 1\/20"
            }, {"id": "1188", "name": "Lofibra"}, {"id": "1220", "name": "Lomedia 24 FE"}, {
                "id": "1238",
                "name": "Lomotil"
            }, {"id": "1255", "name": "Lomustine"}, {"id": "1272", "name": "Loperamide"}, {
                "id": "1288",
                "name": "Lopid"
            }, {"id": "1304", "name": "Lopressor"}, {"id": "1320", "name": "Lopressor HCT"}, {
                "id": "1336",
                "name": "Loprox Gel"
            }, {"id": "1351", "name": "Loprox Shampoo"}, {"id": "1365", "name": "Lorazepam"}, {
                "id": "1379",
                "name": "Loryna"
            }, {"id": "1394", "name": "Lorzone"}, {"id": "1408", "name": "Losartan"}, {
                "id": "1422",
                "name": "Losartan\/HCTZ"
            }, {"id": "1436", "name": "LoSeasonique"}, {"id": "1450", "name": "Lotemax Gel"}, {
                "id": "1464",
                "name": "Lotemax Ointment"
            }, {"id": "1478", "name": "Lotemax Suspension"}, {"id": "1492", "name": "Lotensin"}, {
                "id": "1507",
                "name": "Lotensin HCT"
            }, {"id": "1519", "name": "Lotrel"}, {"id": "1533", "name": "Lotronex"}, {
                "id": "1545",
                "name": "Lovastatin"
            }, {"id": "1556", "name": "Lovaza"}, {"id": "1567", "name": "Lovenox"}, {
                "id": "1577",
                "name": "Lucentis"
            }, {"id": "1587", "name": "Lumigan"}, {"id": "1596", "name": "Lunesta"}, {
                "id": "1604",
                "name": "Lupron Depot"
            }, {"id": "1612", "name": "Luvox CR"}, {"id": "1620", "name": "Luxiq"}, {
                "id": "1627",
                "name": "LUZU Cream"
            }, {"id": "1633", "name": "Lycelle"}, {"id": "1639", "name": "Lyrica"}, {
                "id": "1645",
                "name": "Lysodren"
            }, {"id": "31", "name": "Macugen"}, {"id": "47", "name": "Malathion Lotion"}, {
                "id": "67",
                "name": "Marplan"
            }, {"id": "86", "name": "Matulane"}, {"id": "106", "name": "Mavik"}, {
                "id": "127",
                "name": "Maxalt"
            }, {"id": "149", "name": "Maxalt-MLT"}, {"id": "172", "name": "Maxidex"}, {
                "id": "196",
                "name": "Maxitrol"
            }, {"id": "221", "name": "Medroxyprogesterone"}, {
                "id": "247",
                "name": "Medroxyprogesterone Injection"
            }, {"id": "273", "name": "Mekinist"}, {"id": "297", "name": "Meloxicam"}, {
                "id": "322",
                "name": "Menest"
            }, {"id": "345", "name": "Menopur"}, {"id": "367", "name": "Menostar"}, {
                "id": "389",
                "name": "Mentax"
            }, {"id": "411", "name": "Mesalamine"}, {"id": "434", "name": "Metadate CD"}, {
                "id": "456",
                "name": "Metadate ER"
            }, {"id": "479", "name": "Metanx"}, {"id": "501", "name": "Metaxalone"}, {
                "id": "524",
                "name": "Metformin"
            }, {"id": "545", "name": "Metformin ER"}, {"id": "566", "name": "Metformin\/glipizide"}, {
                "id": "587",
                "name": "Metformin\/glyburide"
            }, {"id": "608", "name": "Methadone"}, {"id": "629", "name": "Methotrexate"}, {
                "id": "650",
                "name": "Methotrexate Injection"
            }, {"id": "671", "name": "methscopolamine"}, {"id": "692", "name": "Methylin Solution"}, {
                "id": "712",
                "name": "Methylphenidate"
            }, {"id": "732", "name": "Methylphenidate ER"}, {"id": "752", "name": "Methylphenidate SR"}, {
                "id": "772",
                "name": "Metipranolol"
            }, {"id": "792", "name": "Metoprolol"}, {"id": "830", "name": "Metoprolol XL"}, {
                "id": "811",
                "name": "Metoprolol\/HCTZ"
            }, {"id": "849", "name": "Metozolv ODT"}, {"id": "868", "name": "Metrogel 1%"}, {
                "id": "886",
                "name": "Metrogel 1% Pump"
            }, {"id": "904", "name": "Metronidazole Gel 0.75%"}, {
                "id": "922",
                "name": "Metronidazole Gel 1%"
            }, {"id": "940", "name": "Mevacor"}, {"id": "957", "name": "Miacalcin"}, {
                "id": "974",
                "name": "Micardis"
            }, {"id": "991", "name": "Micardis HCT"}, {"id": "1009", "name": "Migranal"}, {
                "id": "1027",
                "name": "Minastrin 24 Fe"
            }, {"id": "1044", "name": "Minipress"}, {"id": "1061", "name": "Minitran"}, {
                "id": "1077",
                "name": "Minivelle"
            }, {"id": "1093", "name": "Minocin"}, {"id": "1109", "name": "Minocycline"}, {
                "id": "1125",
                "name": "Minocycline ER"
            }, {"id": "1141", "name": "Mirapex"}, {"id": "1157", "name": "Mirapex ER"}, {
                "id": "1173",
                "name": "Mircette"
            }, {"id": "1189", "name": "Mirena"}, {"id": "1205", "name": "Mirtazapine"}, {
                "id": "1221",
                "name": "Mirtazapine Soltab"
            }, {"id": "1239", "name": "Mirvaso"}, {"id": "1256", "name": "Misoprostol"}, {
                "id": "1273",
                "name": "Mitigare"
            }, {"id": "1289", "name": "Mitoxantrone"}, {"id": "1305", "name": "Mobic"}, {
                "id": "1321",
                "name": "Modafinil"
            }, {"id": "1337", "name": "Modicon 28"}, {"id": "1352", "name": "moexipril"}, {
                "id": "1366",
                "name": "moexipril\/HCTZ"
            }, {"id": "1380", "name": "Monoclate-P"}, {"id": "1395", "name": "Monodox"}, {
                "id": "1409",
                "name": "Mononine"
            }, {"id": "1423", "name": "Montelukast"}, {"id": "1437", "name": "Monurol"}, {
                "id": "1451",
                "name": "Morphine ER"
            }, {"id": "1465", "name": "Morphine Sulfate ER (Avinza)"}, {
                "id": "1479",
                "name": "Morphine Sulfate ER (Kadian)"
            }, {"id": "1493", "name": "MoviPrep"}, {"id": "1508", "name": "Moxatag"}, {
                "id": "1520",
                "name": "Moxeza"
            }, {"id": "1521", "name": "Mozobil"}, {"id": "1534", "name": "MS Contin"}, {
                "id": "1546",
                "name": "Mugard"
            }, {"id": "1557", "name": "Multaq"}, {"id": "1568", "name": "Mupirocin"}, {
                "id": "1578",
                "name": "Mustargen"
            }, {"id": "1588", "name": "Mycophenolate Mofetil"}, {
                "id": "1597",
                "name": "Mycophenolic acid"
            }, {"id": "1605", "name": "Myfortic"}, {"id": "1613", "name": "Myleran"}, {
                "id": "1621",
                "name": "Myrbetriq"
            }, {"id": "32", "name": "Nabumetone"}, {"id": "48", "name": "Nadolol"}, {
                "id": "68",
                "name": "nadolol\/bendroflumethiazide"
            }, {"id": "87", "name": "Naftin 1%"}, {"id": "107", "name": "Naftin 2%"}, {
                "id": "128",
                "name": "Naglazyme"
            }, {"id": "150", "name": "Nalfon"}, {"id": "173", "name": "Naltrexone"}, {
                "id": "197",
                "name": "Namenda"
            }, {"id": "222", "name": "Namenda XR"}, {"id": "248", "name": "Naprelan"}, {
                "id": "274",
                "name": "Naprosyn-EC"
            }, {"id": "298", "name": "Naratriptan"}, {"id": "323", "name": "Nardil"}, {
                "id": "346",
                "name": "Nascobal"
            }, {"id": "368", "name": "Nasonex"}, {"id": "390", "name": "Natacyn"}, {
                "id": "412",
                "name": "Natazia"
            }, {"id": "435", "name": "Nateglinide"}, {"id": "457", "name": "Natroba"}, {
                "id": "480",
                "name": "Necon 1\/35"
            }, {"id": "502", "name": "Neoral"}, {"id": "525", "name": "Nesina"}, {
                "id": "546",
                "name": "Neulasta"
            }, {"id": "567", "name": "Neupogen"}, {"id": "588", "name": "Neupro"}, {
                "id": "609",
                "name": "Neurontin"
            }, {"id": "630", "name": "Neurontin Solution"}, {"id": "651", "name": "Nevanac"}, {
                "id": "672",
                "name": "Nevirapine"
            }, {"id": "693", "name": "Nexavar"}, {"id": "713", "name": "Nexium"}, {
                "id": "733",
                "name": "Nexium Granules for Oral Suspension"
            }, {"id": "753", "name": "Nexplanon"}, {"id": "773", "name": "Niaspan"}, {
                "id": "793",
                "name": "Nicardipine"
            }, {"id": "812", "name": "Nicotrol Inhaler"}, {"id": "831", "name": "Nicotrol NS"}, {
                "id": "850",
                "name": "Nifedipine"
            }, {"id": "869", "name": "Nifedipine ER"}, {"id": "887", "name": "Nilandron"}, {
                "id": "905",
                "name": "Nimodipine"
            }, {"id": "923", "name": "Niravam"}, {"id": "924", "name": "Nitro-Dur"}, {
                "id": "941",
                "name": "Nitroglycerin transdermal"
            }, {"id": "958", "name": "Nitrolingual Pumpspray"}, {"id": "975", "name": "Nitrostat"}, {
                "id": "992",
                "name": "Norco"
            }, {"id": "1010", "name": "Norditropin FlexPro"}, {
                "id": "1028",
                "name": "Norditropin Nordiflex"
            }, {"id": "1045", "name": "Norethindrone"}, {"id": "1062", "name": "Noritate"}, {
                "id": "1078",
                "name": "Norpace"
            }, {"id": "1094", "name": "Norpace CR"}, {"id": "1110", "name": "Norpramin"}, {
                "id": "1126",
                "name": "Norvasc"
            }, {"id": "1142", "name": "Norvir"}, {"id": "1158", "name": "Nova Max Test Strips"}, {
                "id": "1174",
                "name": "NovoFine Autocover"
            }, {"id": "1190", "name": "NovoFine Pen Needles"}, {
                "id": "1206",
                "name": "Novolin 70\/30 vial"
            }, {"id": "1222", "name": "Novolin N vial"}, {"id": "1240", "name": "Novolin R vial"}, {
                "id": "1257",
                "name": "NovoLog FlexPen"
            }, {"id": "1274", "name": "NovoLog Mix 70\/30 FlexPen"}, {
                "id": "1290",
                "name": "Novolog Mix 70\/30 vial"
            }, {"id": "1306", "name": "Novolog vial"}, {"id": "1322", "name": "NovoSeven RT"}, {
                "id": "1338",
                "name": "Noxafil Suspension"
            }, {"id": "1353", "name": "Noxafil Tablets"}, {"id": "1367", "name": "Nplate"}, {
                "id": "1381",
                "name": "Nucynta"
            }, {"id": "1396", "name": "Nucynta ER"}, {"id": "1410", "name": "Nuedexta"}, {
                "id": "1424",
                "name": "Nulojix"
            }, {"id": "1438", "name": "Nulytely"}, {"id": "1452", "name": "Nutropin AQ"}, {
                "id": "1466",
                "name": "NuvaRing"
            }, {"id": "1480", "name": "Nuvigil"}, {"id": "1494", "name": "Nystatin"}, {
                "id": "33",
                "name": "Ocella"
            }, {"id": "49", "name": "Octagam"}, {"id": "69", "name": "Octreotide"}, {
                "id": "88",
                "name": "Ocufen"
            }, {"id": "108", "name": "Ocuflox"}, {"id": "129", "name": "Ofev"}, {
                "id": "151",
                "name": "Ofloxacin (Ocuflox)"
            }, {"id": "174", "name": "Olanzapine"}, {"id": "198", "name": "Olanzapine ODT"}, {
                "id": "223",
                "name": "Oleptro"
            }, {"id": "249", "name": "Olux"}, {"id": "275", "name": "Olux-E"}, {
                "id": "299",
                "name": "Olysio"
            }, {"id": "300", "name": "Omeclamox-Pak"}, {"id": "324", "name": "Omega-3-acid Ethyl Esters"}, {
                "id": "347",
                "name": "Omeprazole"
            }, {"id": "369", "name": "Omeprazole\/Sodium bicarbonate"}, {"id": "391", "name": "Omnaris"}, {
                "id": "413",
                "name": "Omnipred "
            }, {"id": "436", "name": "Omnitrope Cartridge"}, {"id": "458", "name": "Omnitrope Vial"}, {
                "id": "481",
                "name": "Oncaspar"
            }, {"id": "503", "name": "Ondansetron"}, {"id": "526", "name": "Ondansetron ODT"}, {
                "id": "547",
                "name": "OneTouch Test Strips"
            }, {"id": "568", "name": "OneTouch Ultra 2"}, {
                "id": "589",
                "name": "OneTouch Ultra Blue Test Strips"
            }, {"id": "610", "name": "OneTouch UltraMini"}, {"id": "631", "name": "OneTouch UltraSmart"}, {
                "id": "652",
                "name": "OneTouch Verio Test Strips"
            }, {"id": "673", "name": "Onfi"}, {"id": "694", "name": "Onglyza"}, {
                "id": "714",
                "name": "Onmel"
            }, {"id": "734", "name": "Opana"}, {"id": "754", "name": "Opana ER"}, {
                "id": "774",
                "name": "Opsumit"
            }, {"id": "794", "name": "Optipranolol"}, {"id": "813", "name": "Optivar"}, {
                "id": "832",
                "name": "Oracea"
            }, {"id": "851", "name": "Oralair"}, {"id": "870", "name": "Orapred ODT"}, {
                "id": "888",
                "name": "Oravig"
            }, {"id": "906", "name": "Orbivan"}, {"id": "925", "name": "Orbivan CF"}, {
                "id": "942",
                "name": "Orencia"
            }, {"id": "959", "name": "Orencia SC"}, {"id": "976", "name": "Orenitram"}, {
                "id": "1046",
                "name": "Ortho Evra (3)"
            }, {"id": "1063", "name": "Ortho Micronor"}, {"id": "1111", "name": "Ortho Tri-Cyclen"}, {
                "id": "1127",
                "name": "Ortho Tri-Cyclen Lo"
            }, {"id": "993", "name": "Ortho-Cept"}, {"id": "1011", "name": "Ortho-Cyclen"}, {
                "id": "1029",
                "name": "Ortho-Est"
            }, {"id": "1079", "name": "Ortho-Novum 1\/35"}, {
                "id": "1095",
                "name": "Ortho-Novum 7\/7\/7-28"
            }, {"id": "1143", "name": "Orthovisc"}, {"id": "1159", "name": "Oseni"}, {
                "id": "1175",
                "name": "Osmoprep"
            }, {"id": "1191", "name": "Osphena"}, {"id": "1207", "name": "Otezla"}, {
                "id": "1223",
                "name": "Otezla Starter Pack "
            }, {"id": "1241", "name": "Otic Care"}, {"id": "1258", "name": "Otrexup"}, {
                "id": "1275",
                "name": "Ovace Plus Cream"
            }, {"id": "1291", "name": "Ovace Plus Shampoo"}, {"id": "1307", "name": "Ovace Plus Wash"}, {
                "id": "1323",
                "name": "Ovace Wash"
            }, {"id": "1339", "name": "Ovide"}, {"id": "1354", "name": "Oxaprozin"}, {
                "id": "1368",
                "name": "Oxcarbazepine"
            }, {"id": "1382", "name": "Oxistat Cream"}, {"id": "1397", "name": "Oxtellar XR"}, {
                "id": "1411",
                "name": "Oxybutynin"
            }, {"id": "1425", "name": "Oxybutynin ER"}, {"id": "1467", "name": "Oxycodone \/Ibuprofen"}, {
                "id": "1481",
                "name": "Oxycodone Solution"
            }, {"id": "1439", "name": "Oxycodone\/acetaminophen"}, {
                "id": "1453",
                "name": "Oxycodone\/Aspirin"
            }, {"id": "1495", "name": "OxyContin"}, {"id": "1509", "name": "Oxymorphone ER"}, {
                "id": "1522",
                "name": "Oxytrol"
            }, {"id": "34", "name": "Pacerone"}, {"id": "50", "name": "Pamine"}, {
                "id": "70",
                "name": "Pancreaze"
            }, {"id": "89", "name": "Pancrelipase"}, {"id": "109", "name": "Pandel "}, {
                "id": "130",
                "name": "Panretin"
            }, {"id": "152", "name": "Pantoprazole"}, {"id": "175", "name": "ParaGard"}, {
                "id": "199",
                "name": "Parcopa"
            }, {"id": "224", "name": "Parnate"}, {"id": "250", "name": "Paroxetine"}, {
                "id": "276",
                "name": "Paroxetine CR"
            }, {"id": "301", "name": "Pataday"}, {"id": "325", "name": "Patanase"}, {
                "id": "348",
                "name": "Patanol"
            }, {"id": "370", "name": "Paxil"}, {"id": "392", "name": "Paxil CR"}, {
                "id": "414",
                "name": "Paxil Oral Suspension"
            }, {"id": "415", "name": "Peganone"}, {"id": "437", "name": "Pegasys"}, {
                "id": "459",
                "name": "PegIntron"
            }, {"id": "482", "name": "PegIntron Redipen"}, {"id": "504", "name": "Penlac"}, {
                "id": "527",
                "name": "Pennsaid 1.5%"
            }, {"id": "548", "name": "Pennsaid 2%"}, {"id": "569", "name": "Pentasa"}, {
                "id": "590",
                "name": "Pentoxifylline"
            }, {"id": "611", "name": "Percocet"}, {"id": "632", "name": "Percodan"}, {
                "id": "653",
                "name": "Perforomist"
            }, {"id": "674", "name": "Perjeta"}, {"id": "695", "name": "Permethrin Cream"}, {
                "id": "715",
                "name": "Persantine"
            }, {"id": "735", "name": "Pertzye"}, {"id": "755", "name": "Pexeva"}, {
                "id": "775",
                "name": "phendimetrazine"
            }, {"id": "795", "name": "phendimetrazine ER"}, {"id": "814", "name": "phentermine"}, {
                "id": "833",
                "name": "Phenytoin"
            }, {"id": "852", "name": "Phoslo Caps"}, {"id": "871", "name": "Phoslyra"}, {
                "id": "889",
                "name": "Phospholine Iodide"
            }, {"id": "907", "name": "Picato"}, {"id": "926", "name": "Pioglitazone"}, {
                "id": "943",
                "name": "Pioglitazone\/glimepiride"
            }, {"id": "960", "name": "Pioglitazone\/metformin"}, {"id": "977", "name": "Piroxicam"}, {
                "id": "994",
                "name": "Plaquenil"
            }, {"id": "1012", "name": "Plavix"}, {"id": "1030", "name": "Plegridy"}, {
                "id": "1047",
                "name": "Plegridy Starter Pack"
            }, {"id": "1064", "name": "Pletal"}, {"id": "1080", "name": "Pneumovax 23"}, {
                "id": "1096",
                "name": "Podofilox"
            }, {"id": "1112", "name": "Polyethylene Glycol "}, {
                "id": "1128",
                "name": "Polymyxin B\/Trimethoprim"
            }, {"id": "1144", "name": "Polytrim"}, {"id": "1160", "name": "Pomalyst"}, {
                "id": "1176",
                "name": "Potassium Citrate ER 15mEq"
            }, {"id": "1192", "name": "Potiga"}, {"id": "1208", "name": "Pradaxa"}, {
                "id": "1224",
                "name": "Pramipexole"
            }, {"id": "1242", "name": "Pramosone"}, {"id": "1259", "name": "PrandiMet"}, {
                "id": "1276",
                "name": "Prandin"
            }, {"id": "1292", "name": "Prascion"}, {"id": "1308", "name": "Pravachol"}, {
                "id": "1324",
                "name": "Pravastatin"
            }, {"id": "1340", "name": "Prazosin"}, {"id": "1355", "name": "Precision Xtra"}, {
                "id": "1369",
                "name": "Precision Xtra Test Strips"
            }, {"id": "1383", "name": "Precose"}, {"id": "1398", "name": "Pred Forte"}, {
                "id": "1426",
                "name": "Pred Mild"
            }, {"id": "1412", "name": "Pred-G Suspension"}, {"id": "1440", "name": "Prednicarbate"}, {
                "id": "1454",
                "name": "Prednisolone Acetate"
            }, {"id": "1468", "name": "Prednisolone Sodium Phosphate 25mg\/5ml"}, {
                "id": "1482",
                "name": "Prefest"
            }, {"id": "1496", "name": "Pregnyl"}, {"id": "1510", "name": "Premarin"}, {
                "id": "1523",
                "name": "Premarin Vaginal Cream"
            }, {"id": "1535", "name": "Premphase"}, {"id": "1547", "name": "Prempro"}, {
                "id": "1558",
                "name": "Prenate Enhance"
            }, {"id": "1569", "name": "Prenate Mini"}, {"id": "1579", "name": "Prenate Restore"}, {
                "id": "1589",
                "name": "Prepopik"
            }, {"id": "1598", "name": "Presto Test Strips"}, {"id": "1606", "name": "Prevacid Capsules"}, {
                "id": "1614",
                "name": "Prevacid SoluTab"
            }, {"id": "1622", "name": "Prevnar 13"}, {"id": "1628", "name": "Prevpac"}, {
                "id": "1634",
                "name": "Prezista"
            }, {"id": "1640", "name": "Prilosec"}, {"id": "1646", "name": "Prinivil"}, {
                "id": "1651",
                "name": "Prinzide"
            }, {"id": "1656", "name": "Pristiq"}, {"id": "1661", "name": "Privigen"}, {
                "id": "1666",
                "name": "ProAir HFA"
            }, {"id": "1671", "name": "Probenecid"}, {"id": "1676", "name": "Probenecid\/Colchicine"}, {
                "id": "1681",
                "name": "Procardia"
            }, {"id": "1686", "name": "Procardia XL"}, {"id": "1691", "name": "ProCentra"}, {
                "id": "1695",
                "name": "Procrit"
            }, {"id": "1699", "name": "Procysbi"}, {
                "id": "1703",
                "name": "Prodigy No Coding Test Strips"
            }, {"id": "1707", "name": "Profilnine SD"}, {"id": "1711", "name": "Prograf"}, {
                "id": "1715",
                "name": "Prolastin-C"
            }, {"id": "1719", "name": "Prolensa"}, {"id": "1723", "name": "Proleukin"}, {
                "id": "1727",
                "name": "Prolia"
            }, {"id": "1731", "name": "Promacta"}, {"id": "1735", "name": "Promethazine with Codeine"}, {
                "id": "1739",
                "name": "Prometrium"
            }, {"id": "1743", "name": "Propranolol (Inderal LA)"}, {"id": "1747", "name": "ProQuad"}, {
                "id": "1751",
                "name": "Proscar"
            }, {"id": "1755", "name": "Protonix"}, {
                "id": "1759",
                "name": "Protonix Granules for Suspension"
            }, {"id": "1763", "name": "Protopic"}, {"id": "1767", "name": "Protriptyline"}, {
                "id": "1771",
                "name": "Provenge"
            }, {"id": "1775", "name": "Proventil HFA"}, {"id": "1779", "name": "Provera"}, {
                "id": "1783",
                "name": "Provigil"
            }, {"id": "1787", "name": "Prozac"}, {"id": "1791", "name": "Prozac Weekly"}, {
                "id": "1795",
                "name": "Prudoxin"
            }, {"id": "1799", "name": "Pulmicort Flexhaler"}, {
                "id": "1802",
                "name": "Pulmicort Respules 0.25mg & 0.5mg"
            }, {"id": "1805", "name": "Pulmicort Respules 1mg"}, {"id": "1808", "name": "Pulmozyme"}, {
                "id": "1811",
                "name": "Pylera"
            }, {"id": "51", "name": "QNASL"}, {"id": "71", "name": "Qsymia"}, {
                "id": "90",
                "name": "Quartette"
            }, {"id": "110", "name": "Qudexy XR"}, {"id": "131", "name": "Questran Powder"}, {
                "id": "153",
                "name": "Quetiapine Fumarate"
            }, {"id": "176", "name": "Quillivant XR"}, {"id": "200", "name": "Quinapril"}, {
                "id": "225",
                "name": "Quinapril\/HCTZ"
            }, {"id": "251", "name": "Quinaretic"}, {"id": "277", "name": "QVAR"}, {
                "id": "72",
                "name": "Rabeprazole "
            }, {"id": "91", "name": "Ragwitek"}, {"id": "111", "name": "Raloxifene"}, {
                "id": "132",
                "name": "Ranexa"
            }, {"id": "154", "name": "Rapaflo"}, {"id": "177", "name": "Rapamune"}, {
                "id": "201",
                "name": "Rayos"
            }, {"id": "226", "name": "Razadyne"}, {"id": "252", "name": "Razadyne ER"}, {
                "id": "278",
                "name": "Rebetol"
            }, {"id": "302", "name": "Rebif"}, {"id": "326", "name": "Reclast"}, {
                "id": "349",
                "name": "Recombinate"
            }, {"id": "371", "name": "Rectiv"}, {"id": "393", "name": "Regimex"}, {
                "id": "416",
                "name": "Regranex"
            }, {"id": "438", "name": "Relenza"}, {"id": "460", "name": "Relistor"}, {
                "id": "483",
                "name": "Relpax"
            }, {"id": "505", "name": "Remeron"}, {"id": "528", "name": "Remeron Soltab"}, {
                "id": "549",
                "name": "Remicade"
            }, {"id": "570", "name": "Remodulin"}, {"id": "591", "name": "Renagel"}, {
                "id": "612",
                "name": "Renvela"
            }, {"id": "633", "name": "Repaglinide"}, {"id": "654", "name": "Reprexain"}, {
                "id": "675",
                "name": "Repronex"
            }, {"id": "696", "name": "Requip"}, {"id": "716", "name": "Requip XL"}, {
                "id": "736",
                "name": "Rescriptor"
            }, {"id": "756", "name": "Restasis"}, {"id": "776", "name": "Restoril"}, {
                "id": "796",
                "name": "Retin-A Cream"
            }, {"id": "815", "name": "Retin-A Gel"}, {"id": "834", "name": "Retin-A Micro"}, {
                "id": "853",
                "name": "Retin-A Micro 0.08%"
            }, {"id": "872", "name": "Retrovir (ZDV)"}, {"id": "890", "name": "Revatio"}, {
                "id": "908",
                "name": "Revia"
            }, {"id": "927", "name": "Revlimid"}, {"id": "944", "name": "Reyataz"}, {
                "id": "961",
                "name": "Rezira"
            }, {"id": "978", "name": "Rheumatrex"}, {"id": "995", "name": "Rhinocort Aqua"}, {
                "id": "1013",
                "name": "Ribavirin"
            }, {"id": "1031", "name": "Ridaura"}, {"id": "1048", "name": "Rimantadine"}, {
                "id": "1065",
                "name": "Risedronate 150 mg"
            }, {"id": "1081", "name": "Risperdal"}, {"id": "1097", "name": "Risperdal Consta"}, {
                "id": "1113",
                "name": "Risperdal M-Tab"
            }, {"id": "1129", "name": "Risperidone"}, {"id": "1145", "name": "Ritalin"}, {
                "id": "1161",
                "name": "Ritalin-LA"
            }, {"id": "1177", "name": "Rituxan"}, {"id": "1193", "name": "Rivastigmine"}, {
                "id": "1209",
                "name": "Rixubis"
            }, {"id": "1225", "name": "Rizatriptan"}, {"id": "1226", "name": "Rizatriptan ODT"}, {
                "id": "1243",
                "name": "Rocaltrol"
            }, {"id": "1244", "name": "Ropinirole"}, {"id": "1260", "name": "Rowasa Kit"}, {
                "id": "1277",
                "name": "Rozerem"
            }, {"id": "1293", "name": "Rythmol"}, {"id": "1309", "name": "Rythmol SR"}, {
                "id": "73",
                "name": "Sabril"
            }, {"id": "92", "name": "Safyral"}, {"id": "112", "name": "Saizen"}, {
                "id": "133",
                "name": "Samsca"
            }, {"id": "155", "name": "Sancuso"}, {"id": "178", "name": "Sandimmune"}, {
                "id": "202",
                "name": "Sandostatin"
            }, {"id": "227", "name": "Sandostatin LAR Depot"}, {"id": "253", "name": "Santyl Ointment"}, {
                "id": "279",
                "name": "Saphris"
            }, {"id": "303", "name": "Sarafem"}, {"id": "327", "name": "Savella"}, {
                "id": "350",
                "name": "Seasonique"
            }, {"id": "372", "name": "Selegiline"}, {"id": "394", "name": "Selzentry"}, {
                "id": "417",
                "name": "Semprex-D"
            }, {"id": "439", "name": "Sensipar"}, {"id": "461", "name": "Serevent Diskus"}, {
                "id": "484",
                "name": "Serophene"
            }, {"id": "506", "name": "Seroquel"}, {"id": "507", "name": "Seroquel XR"}, {
                "id": "529",
                "name": "Serostim"
            }, {"id": "550", "name": "Sertraline"}, {"id": "571", "name": "Sertraline Oral Concentrate"}, {
                "id": "592",
                "name": "Signifor"
            }, {"id": "613", "name": "Sildenafil"}, {"id": "634", "name": "Silenor"}, {
                "id": "655",
                "name": "Silvadene"
            }, {"id": "676", "name": "Simbrinza"}, {"id": "697", "name": "Simcor"}, {
                "id": "717",
                "name": "Simponi"
            }, {"id": "737", "name": "Simulect"}, {"id": "757", "name": "Simvastatin"}, {
                "id": "777",
                "name": "Sinemet"
            }, {"id": "797", "name": "Sinemet CR"}, {"id": "816", "name": "Singulair"}, {
                "id": "835",
                "name": "Sirolimus"
            }, {"id": "854", "name": "Sivextro"}, {"id": "873", "name": "Skelaxin"}, {
                "id": "891",
                "name": "Sklice"
            }, {"id": "909", "name": "Skyla"}, {"id": "928", "name": "Solaraze Gel"}, {
                "id": "945",
                "name": "Soliris"
            }, {"id": "962", "name": "Solodyn"}, {"id": "979", "name": "Soltamox"}, {
                "id": "996",
                "name": "Soma"
            }, {"id": "1014", "name": "Somatuline Depot"}, {"id": "1032", "name": "Somavert"}, {
                "id": "1049",
                "name": "Sonata"
            }, {"id": "1066", "name": "Soriatane"}, {"id": "1082", "name": "Sorilux"}, {
                "id": "1098",
                "name": "Sotalol"
            }, {"id": "1114", "name": "Sovaldi"}, {"id": "1130", "name": "Spectracef"}, {
                "id": "1146",
                "name": "Spinosad"
            }, {"id": "1162", "name": "Spiriva"}, {"id": "1178", "name": "Sporanox"}, {
                "id": "1194",
                "name": "Sprix"
            }, {"id": "1210", "name": "Sprycel"}, {"id": "1227", "name": "Stalevo"}, {
                "id": "1245",
                "name": "Starlix"
            }, {"id": "1261", "name": "Stavudine"}, {"id": "1278", "name": "Stavzor"}, {
                "id": "1294",
                "name": "Staxyn"
            }, {"id": "1310", "name": "Stelara"}, {"id": "1325", "name": "Stendra"}, {
                "id": "1341",
                "name": "Stivarga"
            }, {"id": "1356", "name": "Strattera"}, {"id": "1370", "name": "Striant"}, {
                "id": "1384",
                "name": "Stribild"
            }, {"id": "1399", "name": "Striverdi Respimat"}, {"id": "1413", "name": "Suboxone Film"}, {
                "id": "1427",
                "name": "Subsys"
            }, {"id": "1441", "name": "Suclear"}, {"id": "1455", "name": "Sucralfate"}, {
                "id": "1469",
                "name": "Sular"
            }, {"id": "1483", "name": "Sulfasalazine"}, {"id": "1497", "name": "Sulfasalazine SR"}, {
                "id": "1511",
                "name": "Sumatriptan"
            }, {"id": "1524", "name": "Sumatriptan (nasal spray)"}, {
                "id": "1536",
                "name": "Sumatriptan(statdose pen)"
            }, {"id": "1548", "name": "Sumavel DosePro"}, {"id": "1559", "name": "Sunitinib"}, {
                "id": "1570",
                "name": "Supartz"
            }, {"id": "1580", "name": "Supprelin LA"}, {"id": "1590", "name": "Suprax"}, {
                "id": "1599",
                "name": "Suprax Suspension"
            }, {"id": "1607", "name": "Suprenza"}, {"id": "1615", "name": "Suprep Kit"}, {
                "id": "1623",
                "name": "Sustiva"
            }, {"id": "1629", "name": "Sutent"}, {"id": "1635", "name": "Sylatron"}, {
                "id": "1641",
                "name": "Symbicort"
            }, {"id": "1647", "name": "Symbyax"}, {"id": "1652", "name": "SymlinPen"}, {
                "id": "1657",
                "name": "Synarel"
            }, {"id": "1662", "name": "Synera"}, {"id": "1667", "name": "Synribo"}, {
                "id": "1672",
                "name": "Synthroid"
            }, {"id": "1677", "name": "Synvisc"}, {"id": "1682", "name": "Synvisc-One"}, {
                "id": "93",
                "name": "Tabloid"
            }, {"id": "113", "name": "Taclonex Ointment"}, {"id": "134", "name": "Taclonex Suspension"}, {
                "id": "156",
                "name": "Tacrolimus"
            }, {"id": "179", "name": "Tafinlar"}, {"id": "203", "name": "Tamiflu"}, {
                "id": "228",
                "name": "Tamsulosin"
            }, {"id": "254", "name": "Tanzeum"}, {"id": "280", "name": "Tarceva"}, {
                "id": "304",
                "name": "Targretin"
            }, {"id": "328", "name": "Targretin Gel"}, {"id": "351", "name": "Tarka"}, {
                "id": "373",
                "name": "Tasigna"
            }, {"id": "395", "name": "Tasmar"}, {"id": "418", "name": "Taxotere"}, {
                "id": "440",
                "name": "Tazorac Cream"
            }, {"id": "462", "name": "Tazorac Gel"}, {"id": "485", "name": "Tecfidera"}, {
                "id": "508",
                "name": "Teflaro"
            }, {"id": "530", "name": "Tegretol"}, {"id": "551", "name": "Tegretol XR"}, {
                "id": "572",
                "name": "Tekamlo"
            }, {"id": "593", "name": "Tekturna"}, {"id": "614", "name": "Tekturna HCT"}, {
                "id": "635",
                "name": "Temazepam"
            }, {"id": "656", "name": "Temodar"}, {"id": "677", "name": "Temovate Cream"}, {
                "id": "698",
                "name": "Temovate E"
            }, {"id": "718", "name": "Temozolomide"}, {"id": "738", "name": "Tenivac"}, {
                "id": "758",
                "name": "Tenoretic"
            }, {"id": "778", "name": "Tenormin"}, {"id": "798", "name": "Terbinafine"}, {
                "id": "817",
                "name": "Tessalon Perle"
            }, {"id": "836", "name": "Testim"}, {"id": "855", "name": "Testopel Pellets"}, {
                "id": "874",
                "name": "Testosterone Cypionate"
            }, {"id": "892", "name": "Testosterone Enanthate"}, {
                "id": "910",
                "name": "Tetanus Diphtheria Toxoid Adsorbed"
            }, {"id": "946", "name": "Tev-Tropin"}, {"id": "929", "name": "Teveten HCT"}, {
                "id": "963",
                "name": "Texacort"
            }, {"id": "980", "name": "Thalomid"}, {"id": "997", "name": "Thiola"}, {
                "id": "1015",
                "name": "Tiazac"
            }, {"id": "1033", "name": "Ticlopidine"}, {"id": "1050", "name": "Tikosyn"}, {
                "id": "1067",
                "name": "Timolol"
            }, {"id": "1083", "name": "Timoptic Ocudose"}, {"id": "1099", "name": "Tindamax"}, {
                "id": "1115",
                "name": "Tinidazole"
            }, {"id": "1131", "name": "Tirosint"}, {"id": "1147", "name": "Tivicay"}, {
                "id": "1163",
                "name": "Tizanidine"
            }, {"id": "1179", "name": "Tobi"}, {"id": "1195", "name": "Tobi Podhaler"}, {
                "id": "1211",
                "name": "Tobradex Ointment"
            }, {"id": "1228", "name": "Tobradex ST"}, {"id": "1246", "name": "TobraDex Suspension "}, {
                "id": "1262",
                "name": "Tobramycin Nebulizer"
            }, {"id": "1279", "name": "Tobrex Ointment"}, {"id": "1295", "name": "Tofranil"}, {
                "id": "1311",
                "name": "Tolazamide"
            }, {"id": "1326", "name": "Tolbutamide"}, {"id": "1342", "name": "Tolterodine"}, {
                "id": "1357",
                "name": "Tolterodine ER"
            }, {"id": "1371", "name": "Topamax"}, {"id": "1385", "name": "Topicort Cream"}, {
                "id": "1400",
                "name": "Topicort Gel"
            }, {"id": "1414", "name": "Topicort Spray"}, {"id": "1428", "name": "Topiramate"}, {
                "id": "1442",
                "name": "Topiramate ER"
            }, {"id": "1456", "name": "Toprol-XL"}, {"id": "1470", "name": "Torisel"}, {
                "id": "1484",
                "name": "Toviaz"
            }, {"id": "1498", "name": "Tracleer"}, {"id": "1512", "name": "Tradjenta"}, {
                "id": "1525",
                "name": "Tramadol"
            }, {"id": "1537", "name": "Trandate"}, {"id": "1549", "name": "Trandolapril"}, {
                "id": "1560",
                "name": "Transderm-Scop"
            }, {"id": "1571", "name": "Tranylcypromine"}, {"id": "1581", "name": "Travatan Z"}, {
                "id": "1591",
                "name": "Travoprost"
            }, {"id": "1600", "name": "Trazodone"}, {"id": "1608", "name": "Treanda"}, {
                "id": "1616",
                "name": "Trelstar"
            }, {"id": "1630", "name": "Tretin-X"}, {"id": "1636", "name": "Tretin-X Kit"}, {
                "id": "1624",
                "name": "Tretinoin"
            }, {"id": "1642", "name": "Trexall"}, {"id": "1648", "name": "Treximet"}, {
                "id": "1688",
                "name": "Tri-Luma "
            }, {"id": "1696", "name": "Tri-Norinyl"}, {"id": "1704", "name": "Tri-Sprintec"}, {
                "id": "1653",
                "name": "Triamcinolone (Nasal)"
            }, {"id": "1658", "name": "Tribenzor"}, {"id": "1663", "name": "TriCor"}, {
                "id": "1668",
                "name": "Trifluridine"
            }, {"id": "1673", "name": "Triglide"}, {"id": "1678", "name": "Trileptal"}, {
                "id": "1683",
                "name": "Trileptal Suspension"
            }, {"id": "1687", "name": "Trilipix"}, {"id": "1692", "name": "TriLyte"}, {
                "id": "1700",
                "name": "Trisenox"
            }, {"id": "1708", "name": "Triumeq"}, {"id": "1712", "name": "Trivora-28"}, {
                "id": "1716",
                "name": "Trizivir"
            }, {"id": "1720", "name": "Trokendi XR"}, {"id": "1724", "name": "Trospium"}, {
                "id": "1728",
                "name": "Trospium ER"
            }, {"id": "1732", "name": "TRUEtest Test Strips"}, {"id": "1736", "name": "TRUEtrack"}, {
                "id": "1740",
                "name": "TRUEtrack Test Strips"
            }, {"id": "1744", "name": "Trulicity"}, {"id": "1748", "name": "Trusopt"}, {
                "id": "1752",
                "name": "Truvada"
            }, {"id": "1756", "name": "Tudorza Pressair"}, {"id": "1760", "name": "TussiCaps"}, {
                "id": "1764",
                "name": "Tussigon"
            }, {"id": "1768", "name": "Tussionex"}, {"id": "1772", "name": "Twynsta"}, {
                "id": "1776",
                "name": "Tygacil"
            }, {"id": "1780", "name": "Tykerb"}, {"id": "1784", "name": "Tylenol w\/Codeine"}, {
                "id": "1788",
                "name": "Tysabri"
            }, {"id": "1792", "name": "Tyvaso"}, {"id": "1796", "name": "Tyzeka"}, {
                "id": "114",
                "name": "Uceris"
            }, {"id": "135", "name": "Ulesfia"}, {"id": "157", "name": "Uloric"}, {
                "id": "180",
                "name": "Ultracet"
            }, {"id": "204", "name": "Ultram"}, {"id": "229", "name": "Ultram ER"}, {
                "id": "255",
                "name": "Ultravate"
            }, {"id": "281", "name": "Ultresa"}, {"id": "305", "name": "Unifine Pentips"}, {
                "id": "329",
                "name": "Uniretic"
            }, {"id": "352", "name": "Unithroid"}, {"id": "374", "name": "Univasc"}, {
                "id": "396",
                "name": "Uribel"
            }, {"id": "419", "name": "Urocit-K 15"}, {"id": "441", "name": "Urocit-K 5 & 10"}, {
                "id": "463",
                "name": "Uroxatral"
            }, {"id": "509", "name": "URSO Forte"}, {"id": "486", "name": "Ursodiol"}, {
                "id": "136",
                "name": "Vagifem"
            }, {"id": "158", "name": "Valacyclovir"}, {"id": "181", "name": "Valchlor"}, {
                "id": "205",
                "name": "Valcyte"
            }, {"id": "230", "name": "Valium"}, {"id": "256", "name": "Valproic acid"}, {
                "id": "282",
                "name": "Valsartan\/HCTZ"
            }, {"id": "306", "name": "Valstar"}, {"id": "330", "name": "Valtrex"}, {
                "id": "353",
                "name": "Vancocin"
            }, {"id": "375", "name": "Vancomycin"}, {"id": "397", "name": "Vanos"}, {
                "id": "420",
                "name": "Vantas"
            }, {"id": "442", "name": "Vascepa"}, {"id": "464", "name": "Vaseretic"}, {
                "id": "487",
                "name": "Vasotec"
            }, {"id": "510", "name": "Vectibix"}, {"id": "531", "name": "Vectical"}, {
                "id": "552",
                "name": "Velcade"
            }, {"id": "573", "name": "Veletri"}, {"id": "594", "name": "Velphoro"}, {
                "id": "615",
                "name": "Veltin"
            }, {"id": "636", "name": "Venlafaxine"}, {"id": "657", "name": "Venlafaxine ER"}, {
                "id": "678",
                "name": "Ventavis"
            }, {"id": "699", "name": "Ventolin HFA"}, {"id": "719", "name": "Veramyst"}, {
                "id": "739",
                "name": "Verdeso"
            }, {"id": "759", "name": "Veregen"}, {"id": "779", "name": "Verelan"}, {
                "id": "799",
                "name": "Verelan PM"
            }, {"id": "818", "name": "VESIcare"}, {"id": "837", "name": "Vexol"}, {
                "id": "856",
                "name": "Vfend"
            }, {"id": "875", "name": "Viagra"}, {"id": "893", "name": "Vibativ"}, {
                "id": "911",
                "name": "Vibramycin"
            }, {"id": "930", "name": "Vicodin"}, {"id": "947", "name": "Vicoprofen"}, {
                "id": "964",
                "name": "Victoza"
            }, {"id": "981", "name": "Victrelis"}, {"id": "998", "name": "Vidaza"}, {
                "id": "1016",
                "name": "Videx EC"
            }, {"id": "1034", "name": "Vigamox"}, {"id": "1051", "name": "Viibryd"}, {
                "id": "1068",
                "name": "Vimizim"
            }, {"id": "1084", "name": "Vimovo"}, {"id": "1100", "name": "Vimpat"}, {
                "id": "1116",
                "name": "Vimpat Injection"
            }, {"id": "1132", "name": "Vimpat Solution"}, {
                "id": "1148",
                "name": "Vinblastine Injection"
            }, {"id": "1164", "name": "Vincasar PFS"}, {"id": "1180", "name": "Viokace"}, {
                "id": "1196",
                "name": "Viracept"
            }, {"id": "1212", "name": "Viramune"}, {"id": "1229", "name": "Viramune XR"}, {
                "id": "1247",
                "name": "Virazole"
            }, {"id": "1263", "name": "Viread"}, {"id": "1280", "name": "Viroptic"}, {
                "id": "1296",
                "name": "Visicol"
            }, {"id": "1312", "name": "Vitafol-OB"}, {"id": "1327", "name": "Vivactil"}, {
                "id": "1343",
                "name": "Vivelle-Dot"
            }, {"id": "1358", "name": "Vivitrol"}, {"id": "1372", "name": "Voltaren Gel"}, {
                "id": "1386",
                "name": "Voltaren XR"
            }, {"id": "1401", "name": "Voriconazole"}, {"id": "1415", "name": "Vospire ER"}, {
                "id": "1429",
                "name": "Votrient"
            }, {"id": "1443", "name": "Vumon"}, {"id": "1457", "name": "Vusion"}, {
                "id": "1471",
                "name": "Vytorin"
            }, {"id": "1485", "name": "Vytorin 10\/80mg"}, {"id": "1499", "name": "Vyvanse"}, {
                "id": "159",
                "name": "Warfarin"
            }, {"id": "182", "name": "Welchol"}, {"id": "206", "name": "Welchol Suspension"}, {
                "id": "231",
                "name": "Wellbutrin"
            }, {"id": "257", "name": "Wellbutrin SR"}, {"id": "283", "name": "Wellbutrin XL"}, {
                "id": "307",
                "name": "Westcort"
            }, {"id": "331", "name": "Wilate"}, {"id": "183", "name": "Xalatan"}, {
                "id": "207",
                "name": "Xalkori"
            }, {"id": "232", "name": "Xanax"}, {"id": "258", "name": "Xanax XR"}, {
                "id": "284",
                "name": "Xarelto 10"
            }, {"id": "308", "name": "Xarelto 15 & 20"}, {"id": "332", "name": "Xartemis XR"}, {
                "id": "354",
                "name": "Xeljanz"
            }, {"id": "376", "name": "Xeloda"}, {"id": "398", "name": "Xenazine"}, {
                "id": "421",
                "name": "Xenical"
            }, {"id": "443", "name": "Xerese"}, {"id": "465", "name": "Xgeva"}, {
                "id": "488",
                "name": "Xiaflex"
            }, {"id": "511", "name": "Xifaxan 200mg"}, {"id": "532", "name": "Xifaxan 550mg"}, {
                "id": "553",
                "name": "Xodol"
            }, {"id": "574", "name": "Xofigo"}, {"id": "595", "name": "Xolair"}, {
                "id": "616",
                "name": "Xolegel"
            }, {"id": "637", "name": "Xopenex"}, {"id": "658", "name": "Xopenex HFA"}, {
                "id": "679",
                "name": "Xtandi"
            }, {"id": "700", "name": "Xulane"}, {"id": "720", "name": "Xyntha"}, {
                "id": "740",
                "name": "Xyrem"
            }, {"id": "760", "name": "Xyzal"}, {"id": "780", "name": "Xyzal Solution"}, {
                "id": "208",
                "name": "Yasmin"
            }, {"id": "233", "name": "Yaz"}, {"id": "259", "name": "Yervoy"}, {
                "id": "234",
                "name": "Zafirlukast"
            }, {"id": "260", "name": "Zaleplon"}, {"id": "285", "name": "Zaltrap"}, {
                "id": "309",
                "name": "Zanaflex Capsules"
            }, {"id": "333", "name": "Zanaflex Tablet"}, {"id": "355", "name": "Zarah"}, {
                "id": "377",
                "name": "Zarontin"
            }, {"id": "399", "name": "Zavesca"}, {"id": "422", "name": "Zebeta"}, {
                "id": "444",
                "name": "Zegerid"
            }, {"id": "466", "name": "Zegerid Powder for Oral Suspension"}, {
                "id": "489",
                "name": "Zelapar"
            }, {"id": "512", "name": "Zelboraf"}, {"id": "533", "name": "Zemaira"}, {
                "id": "554",
                "name": "Zemplar"
            }, {"id": "575", "name": "Zemplar IV"}, {"id": "596", "name": "Zenpep"}, {
                "id": "617",
                "name": "Zerit (d4T)"
            }, {"id": "638", "name": "Zestoretic"}, {"id": "659", "name": "Zestril"}, {
                "id": "680",
                "name": "Zetia"
            }, {"id": "701", "name": "Zetonna"}, {"id": "721", "name": "Zevalin"}, {
                "id": "741",
                "name": "Ziac"
            }, {"id": "761", "name": "Ziagen"}, {"id": "781", "name": "Ziana"}, {
                "id": "800",
                "name": "Zidovudine"
            }, {"id": "819", "name": "Zidovudine\/lamivudine\/abacavir"}, {
                "id": "838",
                "name": "Zioptan"
            }, {"id": "857", "name": "Ziprasidone"}, {"id": "876", "name": "Zipsor"}, {
                "id": "894",
                "name": "Zirgan"
            }, {"id": "912", "name": "Zithromax"}, {"id": "931", "name": "Zithromax Suspension"}, {
                "id": "948",
                "name": "Zmax"
            }, {"id": "965", "name": "Zocor"}, {"id": "982", "name": "Zofran"}, {
                "id": "999",
                "name": "Zofran ODT"
            }, {"id": "1017", "name": "Zohydro ER"}, {"id": "1018", "name": "Zoladex"}, {
                "id": "1035",
                "name": "Zolinza"
            }, {"id": "1052", "name": "Zolmitriptan"}, {"id": "1069", "name": "Zolmitriptan ODT"}, {
                "id": "1085",
                "name": "Zoloft"
            }, {"id": "1101", "name": "Zoloft Oral Concentrate"}, {"id": "1117", "name": "Zolpidem"}, {
                "id": "1133",
                "name": "Zolpidem ER"
            }, {"id": "1149", "name": "Zolpimist"}, {"id": "1165", "name": "Zometa"}, {
                "id": "1181",
                "name": "Zomig"
            }, {"id": "1197", "name": "Zomig Nasal Spray"}, {"id": "1213", "name": "Zomig-ZMT"}, {
                "id": "1230",
                "name": "Zonalon"
            }, {"id": "1248", "name": "Zonegran"}, {"id": "1264", "name": "Zonisamide"}, {
                "id": "1281",
                "name": "Zontivity"
            }, {"id": "1297", "name": "Zorbtive"}, {"id": "1313", "name": "Zortress"}, {
                "id": "1328",
                "name": "Zorvolex"
            }, {"id": "1344", "name": "Zostavax"}, {"id": "1359", "name": "Zovirax"}, {
                "id": "1373",
                "name": "Zovirax Cream"
            }, {"id": "1387", "name": "Zubsolv"}, {"id": "1402", "name": "Zuplenz"}, {
                "id": "1416",
                "name": "Zutripro"
            }, {"id": "1430", "name": "Zyban"}, {"id": "1444", "name": "Zyclara Pump"}, {
                "id": "1458",
                "name": "Zydelig"
            }, {"id": "1472", "name": "Zyflo CR"}, {"id": "1486", "name": "Zykadia"}, {
                "id": "1500",
                "name": "Zylet"
            }, {"id": "1513", "name": "Zyloprim"}, {"id": "1526", "name": "Zymaxid"}, {
                "id": "1527",
                "name": "Zyprexa"
            }, {"id": "1538", "name": "Zyprexa Relprevv"}, {"id": "1550", "name": "Zyprexa Zydis"}, {
                "id": "1561",
                "name": "Zytiga"
            }, {"id": "1572", "name": "Zyvox"}, {"id": "1582", "name": "Zyvox IV"}];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByFirstalphabet: findByFirstalphabet
    };

}());