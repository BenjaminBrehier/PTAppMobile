import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import HC_exporting from "highcharts/modules/exporting";
import expor from "highcharts/modules/export-data";
import {format} from 'date-fns';
HC_exporting(HighCharts);
expor(HighCharts);


declare var require: any;
var info: string;
var colors: string[] = ['#34a8c2', '#bc4444', '#ffcc66', '#444'];
var humidite: string;
var temp: string;
var lumiere: string;

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
    HighCharts.chart('lineChartTemp', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Température'
      },
      xAxis: {
        categories: ['0', '5 min', '10 min', '15 min', '20 min'],
        tickmarkPlacement: 'on'
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Temps (en heure)',
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
      series: [{
        type: undefined,
        name: 'Humidité (en %)',
        data: [34, 31, 50, 45, 10],
      }, {
        type: undefined,
        name: 'Température (en °c)',
        data: [14, 15, 16, 15, 18]
      },
      {
        type: undefined,
        name: 'Luminescence (en lux)',
        data: [9, 43, 32, 23, 18]
      }],
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
