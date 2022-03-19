import "./home.css";
import ejemplo1 from '../assets/1.png'
import ejemplo1detalle from '../assets/1detalle.png'
import ejemplodetalle2 from '../assets/1detalle2.png'
import ejemplo2 from '../assets/2.png'
import ejemplo3 from '../assets/3.png'
import ejemplo4 from '../assets/4.png'

export function Home() {

    return (
    <div>
        <div className="home__title">
            <p className="home__title-p">
            <strong>
            Guia practica de React-Router-Dom V6
            </strong>
            </p>
        </div>
        <div className="home__subtitle">
            <h3><strong>En noviembre del 2021, React Router Dom 6 lanzo su version final. Esta introduce un numero de cambios que no funcionan con la version anterior. </strong></h3>
        </div>
        <div>
           <u><h3><strong>Vamos a repasar estos cambios creando un proyecto:</strong></h3></u>
        </div>
        <br/ >
        <div className="home__img-1">
            <h3>Archivo index.js</h3>
            <img src={ejemplo1} alt="ejemplo 1" />
            <h4>Lo primero que vemos, es que utilizamos como padre a <strong>"BrowserRouter"</strong>,
            que dentro debe anidar a <strong>"Routes"</strong>, como padre de las demas <strong>"Route"</strong> individuales que querramos crear.
            </h4>
            <div />
            <h4>En los imports, podemos ver que hacemos un <a href="https://www.w3schools.com/react/react_es6_destructuring.asp" target="blank">destructuring</a> de react-router-dom, donde traemos 
            sus nuevas funciones (BrowserRouter, Routes, Route y Navigate en esta ocasión)</h4>

            <img src={ejemplo1detalle} alt="ejemplo 1 detalle" />

            <div />

            <h4>Viendo más a detalle en la implementación, podemos ver como se genera la estructura</h4>
            <img src={ejemplodetalle2} alt="ejemplo 2 detalle" />
            <h4>Configurarlo es bastante simple, solo debemos declarar el <strong>path</strong> y seguido de ello el <strong>element</strong> que queremos servir allí. <br /> 
            <u>Dato a tener en cuenta:</u> cuando tenemos un <strong>Route</strong> anidado dentro de otro <strong>Route</strong>, no es necesario
            darle un <u>path</u>, a menos que sea una ruta <strong>dinamica</strong> como vemos en el ejemplo. Con reemplazarlo con <strong>index</strong> queda solucionado.</h4>
            <div />
            <h4 style={{backgroundColor: "#AAAD"}}> Ahora vamos a ver el archivo <strong>Layout</strong> que es nuestro navbar global.</h4>
            <img src={ejemplo2} alt="layout" />
            <h4>Aquí podemos ver que se importa desde <strong>react-router-dom</strong> lo siguiente: <strong>Link y Outlet</strong>.</h4> <br />
            <h4><strong>Link</strong> nos servira para hacer nuestra barra de navegación tal como vemos, en coherencia con lo que creamos en el archivo <strong>index.js</strong>, y <strong>Outlet</strong> va a ser el encargado de reenderizar debajo de esta navbar el contenido correspondiente a la ruta solicitada.</h4>
            <h4>Ahora, lo unico que nos faltaría es crear los componentes de cada sección de nuestra aplicación como normalmente lo hacemos en React</h4>
            <img src={ejemplo3} alt="about" />
            <br />
            <h4>Para finalizar, veremos unos ultimos cambios dentro de un componente: </h4>
            <img src={ejemplo4} alt="users" />
            <h4>Aquí podemos ver que llamamos desde <strong>react-router</strong> a <strong>useParams</strong> y <strong>useNavigate</strong> (Que habíamos importado a nuestro archivo <u>index</u> al principio)</h4>
            <h4><strong>useParams</strong> es un <u>hook</u> que nos dejara trabajar con objetos provenientes de otro archivo (en este caso "users") utilizando la sintaxis mostrada arriba.</h4>
            <h4>Luego, <strong>useNavigate</strong> nos permitira controlar el redireccionamiento de un usuario al tomar cierta acción en la aplicacion, tal como muestra <u>handleDelete</u>, que es una funcion que
            elimina un usuario y por lo tanto, para evitar errores como el "404", podemos direccionar automaticamente hacía el path de nuestra aplicacion que corresponda.</h4>
        </div>
    </div>

    )
}