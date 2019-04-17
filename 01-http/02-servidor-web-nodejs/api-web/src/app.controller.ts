
import {Controller, Delete, Get, HttpCode, Post, Put, Headers,Param,Request, Response} from '@nestjs/common';

import { AppService } from './app.service';
import {Body} from "@nestjs/common/decorators/http/route-params.decorator";


//http://192.168.1.10:3000/segmentoInicial
//http://192.168.1.10:3000/mascotas/crear
//http://192.168.1.10:3000/mascotas/borrar
//@Controller(va a recibir como parametro el segmentoInicial)

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Controller(va a recibir como parametro el segmentoAccion)
  @Get('/hello-world')// METODO HTTP
  helloHello(): string {
    return 'Hello World';
  }

  @Post('/hola-mundo') // METODO HTTP
  holaMundo(){
    return 'Hola mundo en post';
  }

  @Put('/salut-monde') // METODO HTTP
  saluldMonde(){
    return 'Salut monde';
  }

  @Delete('/hallo-welt') // METODO HTTP
  halloWelt(){
    return 'Hallo welt';
  }

  @Get('/adivina')// METODO HTTP
  adivina(@Headers() headers): string {
    console.log('Headers: ', headers);
    const numeroRandomico = Math.round(Math.random() * 10);



/*
    //js->ts
    let nombre ='Leonardo'; //string
    let edad=29; //number
    let sueldo=1.20; /number
    let casado=false; //boolean
    let hijos=null; // null
    const alas=undefined; //undefined
*/
    const numeroDeCabecera= Number(headers.numero) ;
    if(numeroDeCabecera==numeroRandomico){
      return 'ok';
    }else{
      return ':(';
    }

    return 'Ok';
  }

  @Get('/ciudad/:idCiudad')
  ciudad(@Param() parametrosRuta){
    switch(parametrosRuta.idCiudad.toLowerCase()){
      case 'quito':
        return 'Que fueff';
      case 'guayaquil':
        return 'Que mah ñaños';
      default:
        return 'Buenas tardes';

    }
  }

  @Post('/registroComida')
  registroComida(@Body() parametrosCuerpo,
                 @Response() response) {
    if (parametrosCuerpo.nombre && parametrosCuerpo.cantidad) {
      const cantidad = Number(parametrosCuerpo.cantidad);
      if (cantidad > 1) {
        response.set('Premio', 'Guatita');
        return response.send({mensaje: 'Registro Creado'});
      } else {
        return response.status(400)
            .send({mensaje: 'Erro, no envia nombre o cantidad', error: 400});
      }


    }
  }

  @Get('/semilla')
  semilla(@Request() request){
    console.log(request.cookies);
    const noHayCookies=!request.cookies;
    const cookies=request.cookies;
    if(cookies.micookie){
      return 'ok'
    }else{
      return ':('
    }

  }

  /*
  *Segmento inicial: /api
  *1) Segmento accion:GET 'hello-world' -> 'hello-world'
  *2) Segmento accion:POST 'hola mundo' -> 'hola mundo'
  *3) Segmento accion:PUT 'salut-mond' ->
  *4) Segmento accion:DELETE 'hallo-Welt' ->
  */

//diferencia entre archivo json (notacion de objetos JS) y uno JS


}

/*
@NombreDecoradorClase()
class usuario{
  @Atributo()
  atributoPublico; //public
  private atributoPrivado;
  protected atributoProtegido;
  constructor(@Parametro atributoPublico,
              @OtroParametro atributoPrivado,
              @OtrooParametro atributoProtegido){
    this.atributoPublico=atributoPublico;
    this.atributoPrivado=atributoPrivado;
    this.atributoProtegido=atributoProtegido;
  }

  @MetodoA()
  public metodoPublico(@ParametroA() a){}
  @MetodoB()
  private metodoPrivado(){}
  protected metodoProtegido(){}

}
*/


const json=[
  {
    llave: 'valor',
    "key": "value",
    "nombre":"Leonardo",
    "edad":23,
    "sueldo":10.21,
    "casado": false,
    "hijos": null,
    "mascotas": ["cachetas",
      1,
      23.2,
      false,
      null,
      {
        "nombre": "cachetas"
      },
    ],
  },
]
;



let objeto:any={
  propiedad:'valor',
  propiedad2:'valor2'
};
objeto.propiedad//valor
objeto.propiedad2//valor2

//Agregar propiedades a un objeto
objeto.propiedadTres='valor3';
objeto['propiedadTres']='valor3';
delete objeto.propiedadTres; //->destruir
objeto.propiedadTres=undefined;
//Eliminar una propiedad
