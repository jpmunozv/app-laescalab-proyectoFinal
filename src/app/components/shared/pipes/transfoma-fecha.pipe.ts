import { Pipe, PipeTransform } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Pipe({
  name: 'transfomaFecha'
})
export class TransfomaFechaPipe implements PipeTransform {

  transform(value: any): any {
    var meses = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre",
      "Noviembre", "Diciembre"
    ]

    var varDia = value.slice(8,10)
    var varAnio = value.split('-',1)

    var varMes = parseInt(value.slice(5,7))-1
    var varMesFinal = meses[varMes]
  
    var fechaFormateada  = varDia + " de " + varMesFinal + " del " + varAnio
    return fechaFormateada;

  }

}
