import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import HC_exporting from "highcharts/modules/exporting";
import expor from "highcharts/modules/export-data";
import { format } from 'date-fns';
HC_exporting(HighCharts);
expor(HighCharts);

declare var require: any;
var colors: string[] = ['#1069ce', '#f2fd1f', '#54a102', '#2f8590', '#cc35f2', '#ff3451', '#a0abac', '#730689', '#221e8f', '#cc776d', '#340520', '#594ffc'];

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
      //Requete pour récupérer les données de la base (ici du fichier)
      let result = fetch("http://localhost:8888/truc.txt", {
         method: "GET",
      }).then(function (response) {
         return response.text()
      }).then(function (text) {
         var json = JSON.parse(text)
         console.log(json);
         var tab = []
         //On boucle sur chaque groupe de données (Humidité, Température, etc...)
         for (var key in json) {
            var labels: string[] = []
            var salles = new Map();
            //On place dans une array toutes les dates et initialise chaque salle dans la map avec un tableau de null de la même taille que labels
            for (var i in json[key]) {
               if (!labels.includes(json[key][i].date_ajout)) {
                  labels.push(json[key][i].date_ajout)
               }
               if (!salles.has(json[key][i].nom_noeud)) {
                  salles.set(json[key][i].nom_noeud, [])
               }
            }
            labels.sort();
            //On met à null tous les cases pour chaque date dans la map
            for (var [nom, value] of salles) {
               for (var i in labels) {
                  salles.get(nom).push(null)
               }
            }
   
            //On remplit la map avec les données et laisse null si pas de données pour cette date et cette salle
            for (var i in json[key]) {
               var valeur = json[key][i].data_val.split(":")      //On découpe "data_val": "TEMPERATURE_i126:41,7"
               valeur[1] = valeur[1].replace(',', '.')
               salles.get(json[key][i].nom_noeud)[labels.indexOf(json[key][i].date_ajout)] = valeur[1]
            }

            var capteurs = []
            for (var [nom, value] of salles) {
               var datas = []
               for (var i in value) {
                  datas.push(parseFloat(value[i]))
               }
   
                //Ajout du capteur au graphe
               capteurs.push({            
                  type: undefined,
                  name: nom,
                  data: datas,
               })
            }

            if (key == 'HUMIDITE') {
               tab[key] = {
                  min: 0,
                  title: {
                     text: 'Humidité (en %)',
                     align: 'high'
                  },
               }
            }
            if (key == 'TEMPERATURE') {
               tab[key] = {
                  min: 0,
                  title: {
                     text: 'Temperature (en °C)',
                     align: 'high'
                  },
               }
            }
            if (key == 'PRESENCE') {
               tab[key] = {
                  min: 0,
                  title: {
                     text: 'Presence (en nombre)',
                     align: 'high'
                  },
               }
            }
            HighCharts.chart('lineChart' + key, {
               chart: {
                  type: 'line'
               },
               title: {
                  text: key
               },
               xAxis: {
                  type: "datetime",
                  categories: labels,
                  labels: {
                     enabled: true // disable labels
                  }
               },
               yAxis: tab[key],
               plotOptions: {
                  series: {
                     connectNulls: true,
                  },
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
         return json
      }).catch(function (error) {
         console.log(error)
      })
   }
}