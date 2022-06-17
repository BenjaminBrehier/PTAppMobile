import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import HC_exporting from "highcharts/modules/exporting";
import expor from "highcharts/modules/export-data";
import { format } from 'date-fns';
HC_exporting(HighCharts);
expor(HighCharts);


var json = {
   "HUMIDITE": {
      "1280": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i102:42,3"
      },
      "41728": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_d205:40,1"
      },
      "1281": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i126:41,7"
      },
      "41729": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i102:42,9"
      },
      "41730": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i126:41,3"
      },
      "43045": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i110:42,3"
      },
      "43046": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_d002:33,4"
      },
      "41511": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i110:39,3"
      },
      "43047": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i215:55,9"
      },
      "41512": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_d002:44,4"
      },
      "43048": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i013:38,5"
      },
      "41513": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i215:37,9"
      },
      "43049": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i214:55,1"
      },
      "41514": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i013:39,5"
      },
      "43050": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i114:40,1"
      },
      "41515": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i214:42,1"
      },
      "43051": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_d205:38,7"
      },
      "41516": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i114:40,1"
      },
      "43052": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i102:45,3"
      },
      "41517": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_d205:41,7"
      },
      "43053": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "HUMIDITE_i126:40,7"
      },
      "41518": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i102:38,3"
      },
      "41774": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-10-10 10:16:03",
         "data_val": "HUMIDITE_i110:45,3"
      },
      "41519": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "HUMIDITE_i126:39,7"
      },
      "41775": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-11-13 11:16:03",
         "data_val": "HUMIDITE_d002:41,4"
      },
      "41776": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-12-14 12:16:03",
         "data_val": "HUMIDITE_i215:42,9"
      },
      "41777": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-15 13:16:03",
         "data_val": "HUMIDITE_i013:35,5"
      },
      "41778": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-16 14:16:03",
         "data_val": "HUMIDITE_i214:51,1"
      },
      "41779": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-17 15:16:03",
         "data_val": "HUMIDITE_i114:45,1"
      },
      "41780": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-18 16:16:03",
         "data_val": "HUMIDITE_d205:45,7"
      },
      "41781": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-19 17:16:03",
         "data_val": "HUMIDITE_i102:42,3"
      },
      "41782": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-20 18:16:03",
         "data_val": "HUMIDITE_i126:41,7"
      },
      "41822": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-10-10 10:16:03",
         "data_val": "HUMIDITE_i110:45,3"
      },
      "41823": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-11-13 11:16:03",
         "data_val": "HUMIDITE_d002:41,4"
      },
      "41824": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-12-14 12:16:03",
         "data_val": "HUMIDITE_i215:42,9"
      },
      "41825": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-15 13:16:03",
         "data_val": "HUMIDITE_i013:35,5"
      },
      "41826": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-16 14:16:03",
         "data_val": "HUMIDITE_i214:51,1"
      },
      "41827": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-17 15:16:03",
         "data_val": "HUMIDITE_i114:45,1"
      },
      "41828": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-18 16:16:03",
         "data_val": "HUMIDITE_d205:45,7"
      },
      "41829": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-19 17:16:03",
         "data_val": "HUMIDITE_i102:42,3"
      },
      "41830": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-20 18:16:03",
         "data_val": "HUMIDITE_i126:41,7"
      },
      "42683": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i110:36,3"
      },
      "42684": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_d002:41,8"
      },
      "42685": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i215:40,0"
      },
      "42686": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i013:42,4"
      },
      "42431": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i110:38,4"
      },
      "42687": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i214:37,8"
      },
      "42432": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_d002:42,2"
      },
      "42688": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i114:41,3"
      },
      "42433": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i215:39,3"
      },
      "42689": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_d205:39,4"
      },
      "42434": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i013:45,3"
      },
      "42690": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i102:41,4"
      },
      "42435": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i214:35,4"
      },
      "42691": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "HUMIDITE_i126:42,9"
      },
      "42436": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i114:43,8"
      },
      "42437": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_d205:41,5"
      },
      "42438": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i102:43,1"
      },
      "42439": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "HUMIDITE_i126:42,3"
      },
      "1759": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i110:45,3"
      },
      "1760": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_d002:41,4"
      },
      "1761": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i215:42,9"
      },
      "1762": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i013:35,5"
      },
      "1763": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i214:51,1"
      },
      "1764": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i114:45,1"
      },
      "1765": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_d205:45,7"
      },
      "1766": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i102:42,3"
      },
      "1767": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "HUMIDITE_i126:41,7"
      },
      "42229": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i110:40,6"
      },
      "42230": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_d002:43,8"
      },
      "42231": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i215:37,8"
      },
      "42232": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i013:39,6"
      },
      "1273": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i110:45,3"
      },
      "42233": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i214:37,5"
      },
      "1274": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_d002:41,4"
      },
      "41722": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i110:40,6"
      },
      "42234": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i114:41,9"
      },
      "1275": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i215:42,9"
      },
      "41723": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_d002:39,9"
      },
      "42235": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_d205:42,4"
      },
      "1276": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i013:35,5"
      },
      "41724": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i215:39,2"
      },
      "42236": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i102:43,4"
      },
      "1277": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i214:51,1"
      },
      "41725": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i013:40,1"
      },
      "42237": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "HUMIDITE_i126:39,4"
      },
      "1278": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_i114:45,1"
      },
      "41726": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i214:39,1"
      },
      "1279": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-13 11:06:12",
         "data_val": "HUMIDITE_d205:45,7"
      },
      "41727": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "HUMIDITE_i114:43,6"
      }
   },
   "PRESENCE": {
      "43036": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i110:19"
      },
      "43037": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_d002:24"
      },
      "41502": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i110:15"
      },
      "43038": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i215:10"
      },
      "41503": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_d002:24"
      },
      "43039": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i013:3"
      },
      "41504": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i215:0"
      },
      "43040": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i214:29"
      },
      "41505": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i013:0"
      },
      "43041": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i114:15"
      },
      "41506": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i214:7"
      },
      "43042": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_d205:16"
      },
      "41507": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i114:5"
      },
      "43043": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i102:20"
      },
      "41508": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_d205:32"
      },
      "43044": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "PRESENCE_i126:13"
      },
      "41509": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i102:14"
      },
      "41765": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-01 01:16:03",
         "data_val": "PRESENCE_i110:12"
      },
      "41510": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "PRESENCE_i126:2"
      },
      "41766": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-02 02:16:03",
         "data_val": "PRESENCE_d002:22"
      },
      "41767": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-03 03:16:03",
         "data_val": "PRESENCE_i215:3"
      },
      "41768": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-04 04:16:03",
         "data_val": "PRESENCE_i013:0"
      },
      "41769": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-05 05:16:03",
         "data_val": "PRESENCE_i214:41"
      },
      "41770": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-06 06:16:03",
         "data_val": "PRESENCE_i114:12"
      },
      "41771": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-07 07:16:03",
         "data_val": "PRESENCE_d205:20"
      },
      "41772": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-08 08:16:03",
         "data_val": "PRESENCE_i102:25"
      },
      "301": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-06-13 10:28:27",
         "data_val": "PRESENCE_PARKING:20"
      },
      "41773": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-09 09:16:03",
         "data_val": "PRESENCE_i126:16"
      },
      "1332": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_i110:12"
      },
      "1333": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_d002:22"
      },
      "1334": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_i215:3"
      },
      "1335": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_i013:0"
      },
      "1336": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_i214:41"
      },
      "42040": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-01 00:16:03",
         "data_val": "PRESENCE_PARKING:17"
      },
      "1337": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_i114:12"
      },
      "42041": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-02 23:16:03",
         "data_val": "PRESENCE_PARKING:22"
      },
      "1338": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-13 11:08:09",
         "data_val": "PRESENCE_d205:20"
      },
      "42042": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-03 22:16:03",
         "data_val": "PRESENCE_PARKING:13"
      },
      "1339": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-13 11:08:10",
         "data_val": "PRESENCE_i102:25"
      },
      "42043": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-04 21:16:03",
         "data_val": "PRESENCE_PARKING:25"
      },
      "1340": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-13 11:08:10",
         "data_val": "PRESENCE_i126:16"
      },
      "42044": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-05 20:16:03",
         "data_val": "PRESENCE_PARKING:12"
      },
      "42045": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-06 19:16:03",
         "data_val": "PRESENCE_PARKING:25"
      },
      "42046": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-07 18:16:03",
         "data_val": "PRESENCE_PARKING:40"
      },
      "42047": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-08 17:16:03",
         "data_val": "PRESENCE_PARKING:45"
      },
      "42048": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-09 16:16:03",
         "data_val": "PRESENCE_PARKING:60"
      },
      "42049": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-10 15:16:03",
         "data_val": "PRESENCE_PARKING:52"
      },
      "42050": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-11 14:16:03",
         "data_val": "PRESENCE_PARKING:52"
      },
      "42051": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-12 13:16:03",
         "data_val": "PRESENCE_PARKING:43"
      },
      "42052": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-13 12:16:03",
         "data_val": "PRESENCE_PARKING:48"
      },
      "42053": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-14 11:16:03",
         "data_val": "PRESENCE_PARKING:39"
      },
      "42054": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-15 10:16:03",
         "data_val": "PRESENCE_PARKING:31"
      },
      "42055": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-16 09:16:03",
         "data_val": "PRESENCE_PARKING:16"
      },
      "42056": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-17 08:16:03",
         "data_val": "PRESENCE_PARKING:22"
      },
      "42057": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-18 07:16:03",
         "data_val": "PRESENCE_PARKING:25"
      },
      "42058": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-19 06:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42059": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-01-20 05:16:03",
         "data_val": "PRESENCE_PARKING:25"
      },
      "41813": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-01 01:16:03",
         "data_val": "PRESENCE_i110:12"
      },
      "41814": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-02 02:16:03",
         "data_val": "PRESENCE_d002:22"
      },
      "41815": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-03 03:16:03",
         "data_val": "PRESENCE_i215:3"
      },
      "41816": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-04 04:16:03",
         "data_val": "PRESENCE_i013:0"
      },
      "41817": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-05 05:16:03",
         "data_val": "PRESENCE_i214:41"
      },
      "41818": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-06 06:16:03",
         "data_val": "PRESENCE_i114:12"
      },
      "41819": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-07 07:16:03",
         "data_val": "PRESENCE_d205:20"
      },
      "41820": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-08 08:16:03",
         "data_val": "PRESENCE_i102:25"
      },
      "41821": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-09 09:16:03",
         "data_val": "PRESENCE_i126:16"
      },
      "42110": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-01 00:16:03",
         "data_val": "PRESENCE_PARKING:16"
      },
      "42111": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-02 23:16:03",
         "data_val": "PRESENCE_PARKING:30"
      },
      "42112": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-03 22:16:03",
         "data_val": "PRESENCE_PARKING:36"
      },
      "42113": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-04 21:16:03",
         "data_val": "PRESENCE_PARKING:42"
      },
      "42114": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-05 20:16:03",
         "data_val": "PRESENCE_PARKING:35"
      },
      "42115": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-06 19:16:03",
         "data_val": "PRESENCE_PARKING:29"
      },
      "42116": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-07 18:16:03",
         "data_val": "PRESENCE_PARKING:25"
      },
      "42117": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-08 17:16:03",
         "data_val": "PRESENCE_PARKING:30"
      },
      "42118": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-09 16:16:03",
         "data_val": "PRESENCE_PARKING:21"
      },
      "42119": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-10 15:16:03",
         "data_val": "PRESENCE_PARKING:13"
      },
      "42120": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-11 14:16:03",
         "data_val": "PRESENCE_PARKING:11"
      },
      "42121": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-12 13:16:03",
         "data_val": "PRESENCE_PARKING:12"
      },
      "42122": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-13 12:16:03",
         "data_val": "PRESENCE_PARKING:16"
      },
      "42123": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-14 11:16:03",
         "data_val": "PRESENCE_PARKING:14"
      },
      "42124": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-15 10:16:03",
         "data_val": "PRESENCE_PARKING:15"
      },
      "42125": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-16 09:16:03",
         "data_val": "PRESENCE_PARKING:16"
      },
      "42126": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-17 08:16:03",
         "data_val": "PRESENCE_PARKING:17"
      },
      "42127": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-18 07:16:03",
         "data_val": "PRESENCE_PARKING:18"
      },
      "42128": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-19 06:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42129": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-02-20 05:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42155": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-01 00:16:03",
         "data_val": "PRESENCE_PARKING:0"
      },
      "42156": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-02 23:16:03",
         "data_val": "PRESENCE_PARKING:20"
      },
      "42157": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-03 22:16:03",
         "data_val": "PRESENCE_PARKING:24"
      },
      "42158": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-04 21:16:03",
         "data_val": "PRESENCE_PARKING:35"
      },
      "42159": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-05 20:16:03",
         "data_val": "PRESENCE_PARKING:30"
      },
      "42160": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-06 19:16:03",
         "data_val": "PRESENCE_PARKING:24"
      },
      "42161": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-07 18:16:03",
         "data_val": "PRESENCE_PARKING:7"
      },
      "42162": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-08 17:16:03",
         "data_val": "PRESENCE_PARKING:14"
      },
      "42674": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i110:17"
      },
      "42163": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-09 16:16:03",
         "data_val": "PRESENCE_PARKING:9"
      },
      "42675": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_d002:3"
      },
      "1716": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i110:12"
      },
      "42164": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-10 15:16:03",
         "data_val": "PRESENCE_PARKING:12"
      },
      "42676": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i215:0"
      },
      "1717": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_d002:22"
      },
      "42165": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-11 14:16:03",
         "data_val": "PRESENCE_PARKING:21"
      },
      "42677": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i013:21"
      },
      "1718": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i215:3"
      },
      "42166": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-12 13:16:03",
         "data_val": "PRESENCE_PARKING:27"
      },
      "42422": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i110:4"
      },
      "42678": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i214:4"
      },
      "1719": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i013:0"
      },
      "42167": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-13 12:16:03",
         "data_val": "PRESENCE_PARKING:18"
      },
      "42423": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_d002:31"
      },
      "42679": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i114:17"
      },
      "1720": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i214:41"
      },
      "42168": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-14 11:16:03",
         "data_val": "PRESENCE_PARKING:21"
      },
      "42424": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i215:12"
      },
      "42680": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_d205:31"
      },
      "1721": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i114:12"
      },
      "42169": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-15 10:16:03",
         "data_val": "PRESENCE_PARKING:15"
      },
      "42425": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i013:0"
      },
      "42681": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i102:20"
      },
      "1722": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_d205:20"
      },
      "42170": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-16 09:16:03",
         "data_val": "PRESENCE_PARKING:7"
      },
      "42426": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i214:21"
      },
      "42682": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "PRESENCE_i126:14"
      },
      "1723": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i102:25"
      },
      "42171": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-17 08:16:03",
         "data_val": "PRESENCE_PARKING:17"
      },
      "42427": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i114:0"
      },
      "1724": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i126:16"
      },
      "42172": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-18 07:16:03",
         "data_val": "PRESENCE_PARKING:7"
      },
      "42428": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_d205:40"
      },
      "42173": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-19 06:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42429": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i102:34"
      },
      "42174": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-03-20 05:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42430": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "PRESENCE_i126:12"
      },
      "1750": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i110:12"
      },
      "1751": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_d002:22"
      },
      "1752": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i215:3"
      },
      "42200": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-01 00:16:03",
         "data_val": "PRESENCE_PARKING:17"
      },
      "1753": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i013:0"
      },
      "42201": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-02 23:16:03",
         "data_val": "PRESENCE_PARKING:23"
      },
      "1754": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i214:41"
      },
      "42202": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-03 22:16:03",
         "data_val": "PRESENCE_PARKING:30"
      },
      "1755": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i114:12"
      },
      "42203": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-04 21:16:03",
         "data_val": "PRESENCE_PARKING:24"
      },
      "1756": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_d205:20"
      },
      "42204": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-05 20:16:03",
         "data_val": "PRESENCE_PARKING:5"
      },
      "1757": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i102:25"
      },
      "42205": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-06 19:16:03",
         "data_val": "PRESENCE_PARKING:16"
      },
      "1758": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "PRESENCE_i126:16"
      },
      "42206": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-07 18:16:03",
         "data_val": "PRESENCE_PARKING:7"
      },
      "42207": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-08 17:16:03",
         "data_val": "PRESENCE_PARKING:24"
      },
      "42208": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-09 16:16:03",
         "data_val": "PRESENCE_PARKING:13"
      },
      "42209": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-10 15:16:03",
         "data_val": "PRESENCE_PARKING:10"
      },
      "42210": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-11 14:16:03",
         "data_val": "PRESENCE_PARKING:24"
      },
      "42211": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-12 13:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42212": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-13 12:16:03",
         "data_val": "PRESENCE_PARKING:13"
      },
      "42213": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-14 11:16:03",
         "data_val": "PRESENCE_PARKING:14"
      },
      "42214": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-15 10:16:03",
         "data_val": "PRESENCE_PARKING:15"
      },
      "42215": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-16 09:16:03",
         "data_val": "PRESENCE_PARKING:23"
      },
      "42216": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-17 08:16:03",
         "data_val": "PRESENCE_PARKING:21"
      },
      "42217": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-18 07:16:03",
         "data_val": "PRESENCE_PARKING:18"
      },
      "42218": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-19 06:16:03",
         "data_val": "PRESENCE_PARKING:19"
      },
      "42219": {
         "nom_capt": "Presence",
         "nom_noeud": "parking",
         "date_ajout": "2022-04-20 05:16:03",
         "data_val": "PRESENCE_PARKING:16"
      },
      "42220": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i110:21"
      },
      "42221": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_d002:12"
      },
      "42222": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i215:21"
      },
      "42223": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i013:31"
      },
      "42224": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i214:17"
      },
      "41713": {
         "nom_capt": "Presence",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i110:3"
      },
      "42225": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i114:32"
      },
      "41714": {
         "nom_capt": "Presence",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_d002:15"
      },
      "42226": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_d205:0"
      },
      "41715": {
         "nom_capt": "Presence",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i215:6"
      },
      "42227": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i102:7"
      },
      "41716": {
         "nom_capt": "Presence",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i013:24"
      },
      "42228": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "PRESENCE_i126:26"
      },
      "41717": {
         "nom_capt": "Presence",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i214:31"
      },
      "41718": {
         "nom_capt": "Presence",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i114:7"
      },
      "41719": {
         "nom_capt": "Presence",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_d205:24"
      },
      "41720": {
         "nom_capt": "Presence",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i102:14"
      },
      "41721": {
         "nom_capt": "Presence",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "PRESENCE_i126:22"
      }
   },
   "TEMPERATURE": {
      "42240": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i215:20"
      },
      "42241": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i013:18"
      },
      "42242": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i214:19"
      },
      "41731": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i110:15"
      },
      "42243": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i114:17"
      },
      "41732": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_d002:20"
      },
      "42244": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_d205:21"
      },
      "41733": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i215:16"
      },
      "42245": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i102:20"
      },
      "41734": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i013:21"
      },
      "42246": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i126:22"
      },
      "41735": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i214:24"
      },
      "41736": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i114:23"
      },
      "41737": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_d205:19"
      },
      "41738": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i102:17"
      },
      "41739": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-15 16:16:03",
         "data_val": "TEMPERATURE_i126:20"
      },
      "43054": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i110:23"
      },
      "43055": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_d002:20"
      },
      "41520": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i110:20"
      },
      "43056": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i215:19"
      },
      "41521": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_d002:21"
      },
      "43057": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i013:24"
      },
      "41522": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i215:19"
      },
      "43058": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i214:22"
      },
      "41523": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i013:25"
      },
      "43059": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i114:25"
      },
      "41524": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i214:18"
      },
      "43060": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_d205:21"
      },
      "41525": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i114:20"
      },
      "43061": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i102:25"
      },
      "41526": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_d205:19"
      },
      "43062": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 13:16:03",
         "data_val": "TEMPERATURE_i126:26"
      },
      "41527": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i102:21"
      },
      "41783": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-21 19:16:03",
         "data_val": "TEMPERATURE_i110:22"
      },
      "41528": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-01 12:16:03",
         "data_val": "TEMPERATURE_i126:17"
      },
      "41784": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-01-22 20:16:03",
         "data_val": "TEMPERATURE_d002:19"
      },
      "1081": {
         "nom_capt": "Temperature",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_d002:21"
      },
      "41785": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-02-23 21:16:03",
         "data_val": "TEMPERATURE_i215:14"
      },
      "1082": {
         "nom_capt": "Temperature",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_i215:19"
      },
      "41786": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-03-24 22:16:03",
         "data_val": "TEMPERATURE_i013:27"
      },
      "1083": {
         "nom_capt": "Temperature",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_i013:28"
      },
      "41787": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-04-25 23:16:03",
         "data_val": "TEMPERATURE_i214:25"
      },
      "1084": {
         "nom_capt": "Temperature",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_i214:22"
      },
      "1085": {
         "nom_capt": "Temperature",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_i114:23"
      },
      "1086": {
         "nom_capt": "Temperature",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_d205:15"
      },
      "1087": {
         "nom_capt": "Temperature",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_i102:25"
      },
      "1088": {
         "nom_capt": "Temperature",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-13 10:59:04",
         "data_val": "TEMPERATURE_i126:20"
      },
      "41831": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-21 19:16:03",
         "data_val": "TEMPERATURE_i110:22"
      },
      "41832": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-01-22 20:16:03",
         "data_val": "TEMPERATURE_d002:19"
      },
      "41833": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-02-23 21:16:03",
         "data_val": "TEMPERATURE_i215:14"
      },
      "41834": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-03-24 22:16:03",
         "data_val": "TEMPERATURE_i013:27"
      },
      "41835": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-04-25 23:16:03",
         "data_val": "TEMPERATURE_i214:25"
      },
      "41836": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-26 00:16:03",
         "data_val": "TEMPERATURE_i114:22"
      },
      "41837": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-27 01:16:03",
         "data_val": "TEMPERATURE_d205:23"
      },
      "41838": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-07-28 02:16:03",
         "data_val": "TEMPERATURE_i102:24"
      },
      "41839": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-08-29 03:16:03",
         "data_val": "TEMPERATURE_i126:21"
      },
      "42692": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i110:21"
      },
      "42693": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_d002:17"
      },
      "42694": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i215:21"
      },
      "42695": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i013:23"
      },
      "42440": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i110:19"
      },
      "42696": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i214:16"
      },
      "42441": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_d002:18"
      },
      "42697": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i114:22"
      },
      "42442": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i215:24"
      },
      "42698": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_d205:11"
      },
      "42443": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i013:20"
      },
      "42699": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i102:21"
      },
      "42444": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i214:15"
      },
      "42700": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-04-21 12:16:03",
         "data_val": "TEMPERATURE_i126:23"
      },
      "42445": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i114:21"
      },
      "42446": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_d205:23"
      },
      "42447": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i102:24"
      },
      "42448": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-05-07 15:16:03",
         "data_val": "TEMPERATURE_i126:19"
      },
      "977": {
         "nom_capt": "Temperature",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-13 10:55:25",
         "data_val": "TEMPERATURE_i110:25"
      },
      "1768": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i110:22"
      },
      "41704": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-22 12:16:03",
         "data_val": "TEMPERATURE_i110:16"
      },
      "1769": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_d002:19"
      },
      "41705": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-21 12:16:03",
         "data_val": "TEMPERATURE_d002:20"
      },
      "1770": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i215:14"
      },
      "41706": {
         "nom_capt": "Humidite",
         "nom_noeud": "i215",
         "date_ajout": "2022-06-23 12:16:03",
         "data_val": "TEMPERATURE_i215:16"
      },
      "1771": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i013:27"
      },
      "41707": {
         "nom_capt": "Humidite",
         "nom_noeud": "i013",
         "date_ajout": "2022-06-10 12:16:03",
         "data_val": "TEMPERATURE_i013:23"
      },
      "1772": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i214:25"
      },
      "41708": {
         "nom_capt": "Humidite",
         "nom_noeud": "i214",
         "date_ajout": "2022-06-24 12:16:03",
         "data_val": "TEMPERATURE_i214:25"
      },
      "1773": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i114:22"
      },
      "41709": {
         "nom_capt": "Humidite",
         "nom_noeud": "i114",
         "date_ajout": "2022-06-14 12:16:03",
         "data_val": "TEMPERATURE_i114:25"
      },
      "1774": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_d205:23"
      },
      "41710": {
         "nom_capt": "Humidite",
         "nom_noeud": "d205",
         "date_ajout": "2022-06-10 12:16:03",
         "data_val": "TEMPERATURE_d205:20"
      },
      "1775": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i102:24"
      },
      "41711": {
         "nom_capt": "Humidite",
         "nom_noeud": "i102",
         "date_ajout": "2022-06-17 12:16:03",
         "data_val": "TEMPERATURE_i102:21"
      },
      "1776": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-12 12:16:03",
         "data_val": "TEMPERATURE_i126:21"
      },
      "41712": {
         "nom_capt": "Humidite",
         "nom_noeud": "i126",
         "date_ajout": "2022-06-11 12:16:03",
         "data_val": "TEMPERATURE_i126:20"
      },
      "42238": {
         "nom_capt": "Humidite",
         "nom_noeud": "i110",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_i110:20"
      },
      "42239": {
         "nom_capt": "Humidite",
         "nom_noeud": "d002",
         "date_ajout": "2022-05-22 08:16:03",
         "data_val": "TEMPERATURE_d002:23"
      }
   }
}

declare var require: any;
var colors: string[] = ['#1069ce', '#f2fd1f', '#54a102', '#2f8590', '#cc35f2', '#ff3451', '#a0abac', '#730689', '#221e8f', '#cc776d', '#340520', '#594ffc'];
var labels: string[] = []

//Print content of json
var capteurs = []
var map = new Map();
for (var i in json.HUMIDITE) {      //parsing du du json obtenu
   for (var j in json.HUMIDITE[i]) {
      var dateAndVal = []
      dateAndVal.push(json.HUMIDITE[i].date_ajout)
      var valeur = json.HUMIDITE[i].data_val.split(":")     //On découpe "data_val": "TEMPERATURE_i126:41.7
      dateAndVal.push(valeur[1].replace(',', '.'))       //On récupère la valeur

      if (map.has(json.HUMIDITE[i].nom_noeud)) {    //Si le nom capteur est déjà dans la map
         map.set(json.HUMIDITE[i].nom_noeud, map.get(json.HUMIDITE[i].nom_noeud) + "|" + dateAndVal)   //i126 : 2022-06-13 11:06:12,41.7|2022-06-13 11:06:12,41.7
      } else {
         map.set(json.HUMIDITE[i].nom_noeud, dateAndVal)
      }
   }
}

//Print content of the map humidite
for (var [nom, value] of map) {
   // console.log(nom + " : " + value);      //i126 : 2022-06-13 11:06:12,41.7|2022-06-13 11:06:12,41.7
   var valueSplitted = value.split("|")
   var dates = []
   var datas = []
   for (var i in valueSplitted) {
      var tab = valueSplitted[i].split(",")
      var d = tab[0].split(" ")           //On ne conserve pas l'heure'
      dates.push(d[0])
      datas.push(parseInt(tab[1]))
   }
   capteurs.push({             //Ajout du capteur au graph
      type: undefined,
      name: nom,
      data: datas,
   })
}

labels = dates

@Component({
   selector: 'app-home',
   templateUrl: 'tab1.page.html',
   styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
   today = format(new Date(), 'dd/MM/yyyy hh:mm:ss');
   ionViewDidEnter() {
      this.lineChart();
   }

   lineChart() {
      HighCharts.chart('lineChartHumidite', {
         chart: {
            type: 'line'
         },
         title: {
            text: 'Humidité'
         },
         xAxis: {
            categories: labels,
            tickmarkPlacement: 'on'
         },
         yAxis: {
            min: 0,
            title: {
               text: 'Humidité (en %)',
               align: 'high'
            },
         },
         plotOptions: {
            bar: {
               dataLabels: {
                  enabled: true
               }
            }
         },
         colors: colors,
         series: capteurs,
         exporting: {
            pdfFont: {
               normal: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Regular.ttf',
               bold: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Bold.ttf',
               bolditalic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-BoldItalic.ttf',
               italic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Italic.ttf'

            },
            chartOptions: {
               plotOptions: {
                  series: {
                     dataLabels: {
                        enabled: true
                     }
                  }
               }
            },
            fallbackToExportServer: false
         }
      });
      HighCharts.chart('lineChartTemperature', {
         chart: {
            type: 'line'
         },
         title: {
            text: 'Humidité'
         },
         xAxis: {
            categories: labels,
            tickmarkPlacement: 'on'
         },
         yAxis: {
            min: 0,
            title: {
               text: 'Humidité (en %)',
               align: 'high'
            },
         },
         plotOptions: {
            bar: {
               dataLabels: {
                  enabled: true
               }
            }
         },
         colors: colors,
         series: capteurs,
         exporting: {
            pdfFont: {
               normal: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Regular.ttf',
               bold: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Bold.ttf',
               bolditalic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-BoldItalic.ttf',
               italic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Italic.ttf'

            },
            chartOptions: {
               plotOptions: {
                  series: {
                     dataLabels: {
                        enabled: true
                     }
                  }
               }
            },
            fallbackToExportServer: false
         }
      });
   }
   
}
