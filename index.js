/* IMPORTACIONES */
import puppeteer from "puppeteer";

/* FUNCIONES */
const capturaDePantalla = async () => {
    const navegador = await puppeteer.launch({
        /* Evita que se abra la ventana del navegador */
        headless: 'false',
        /* Hace mas lento */
        slowMo: 200
    });
    const page = await navegador.newPage();
    await page.goto('https://leivaentradas.com');
    await page.screenshot({path: 'example.png'})


    await navegador.close();
}

const clickPage = async () => {
    const navegador = await puppeteer.launch({
        /* Evita que se abra la ventana del navegador */
        headless: 'false',
    });
    const page = await navegador.newPage();
    await page.goto('https://quotes.toscrape.com');

    await page.click('a[href="/login"');
    await page.screenshot({path: 'example.png'});

    await navegador.close();
}

const recuperarInformacion = async () =>  {
    /* iniciar el navegador */
    const navegador = await puppeteer.launch({
        /* Evita que se abra la ventana del navegador */
        headless: 'false',
    });
    const page = await navegador.newPage();
    await page.goto('https://leivaentradas.com');

    /* proceso */
    const estadoDeBoletos = await page.evaluate(() => {
        const buttons = document.querySelectorAll('.btn');
        return buttons[63].textContent;
    });

    if(estadoDeBoletos == 'Próximamente') console.log('Aun estan proximos');
    else console.log('Los boletos ya estan a la venta');

    /* cierra navegador */
    await navegador.close();
}


/* EVENTOS */

//capturaDePantalla()

//clickPage();

//recuperarInformacion();



