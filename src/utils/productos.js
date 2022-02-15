import ubi from '../assets/image/uapAcLite.jpg';
import cap from '../assets/image/capXl.png';
import archer from '../assets/image/archer.jpg';
import mercusys from '../assets/image/mw301.jpg';
import latitude from '../assets/image/latitud7420.jpg';
import moni from '../assets/image/monisamsung.jpg';
import samsung from '../assets/image/f24t35.jpg';
import hpPav from '../assets/image/hpPavilion.jpg';
import hpNot from '../assets/image/250g8.jpg';
import ideaPad from '../assets/image/ideapad.webp';
import lenovoV from '../assets/image/v50s.jpg';
import monDell from '../assets/image/E2420H.jpg';
import dellOpt from '../assets/image/3070.jpg';
import ecotank from '../assets/image/ecotank.jpg';
import brother from '../assets/image/hl1212w.png';
import hpLaser from '../assets/image/137fnw.jpg';
import mer from '../assets/image/mw325.jpg';
import lbem5 from '../assets/image/lbem5.jpg';
import archerC from '../assets/image/archerc20.jpg';
import epsonpp from '../assets/image/epsonpp50.jpg';

// const productos =[];
const productos = [   //arrays de productos
    {
        id:1,
        imagen:`${ubi}`,
        categoria:'conectividad',
        marca:'ubiquiti',
        modelo:'UAP-AC-Lite',
        precio:13000,
        stock:10,
        detalle1:'Dimensions: 160 x 160 x 31.45 mm',
        detalle2:'Networking : (1) 10/100/1000 Ethernet Port',
        detalle3:'Antennas : (2) Dual-Band Antennas, 3 dBi Each',
        detalle4:'Power Supply : 24V, 0.5A Gigabit PoE Adapter',
        detalle5:'Wi-Fi Standards : 802.11 a/b/g/n/r/k/v/ac',
        detalle6:'Mounting : Wall/Ceiling (Kits Included)',
        anio:2021,
    },
    {
        id:2,
        imagen:`${cap}`,
        categoria:'conectividad',
        marca:'mikrotik',
        modelo:'cAP XL ac',
        precio:15000,
        stock:5,
        detalle1:'Wireless 2.4 GHz standards : 802.11b/g/n',
        detalle2:'Wireless 5 GHz standards : 802.11a/n/ac',
        detalle3:'AC speed : AC1200',
        detalle4:'10/100/1000 Ethernet ports : 2',
        detalle5:'PoE-out ports : Ether2',
        detalle6:'Operating System : RouterOS',
        anio:2022,
    },
    {
        id:3,
        imagen:`${archer}`,
        categoria:'conectividad',
        marca:'tp-Link',
        modelo:'Archer AX10',
        precio:8200,
        stock:15,
        detalle1:'Wi-Fi 6 : IEEE 802.11ax/ac/n/a (5GHz) - IEEE 802.11n/b/g (2.4GHz)',
        detalle2:'Velocidad WiFi : AX1500 (5 GHz: 1201 Mbps (802.11ax) - 2.4 GHz: 300 Mbps (802.11n))',
        detalle3:'Modos de trabajo : Router Mode - Access Point Mode',
        detalle4:'Puertos ethernet : (1) Gigabit WAN Port - (4) Gigabit LAN Ports',
        detalle5:'Dimensiones (Al x An x Pr) : 260.2 mm x 135.0 mm x 38.6 mm',
        detalle6:'Servidor VPN : OpenVPN - PPTP',
        anio:2022,
    },
    {
        id:4,
        imagen:`${mercusys}`,
        categoria:'conectividad',
        marca:'mercusys',
        modelo:'MW301R',
        precio:1300,
        stock:50,
        detalle1:'Wireless Standards : IEEE 802.11n, IEEE 802.11g, IEEE 802.11b',
        detalle2:'Frequency : 2.4 - 2.4835GHz',
        detalle3:'Wireless Functions : WDS bridge',
        detalle4:'Antenna Type : (2) 5dBi fixed omni directional antennas',
        detalle5:'Interfaces : (2) 10/100Mbps LAN ports / (1) 10/100Mbps WAN port',
        detalle6:'Dimensions (W X D X H) : 114 mm x 94 mm x 26 mm',
        anio:2020,
    },
    {
        id:5,
        imagen:`${latitude}`,
        categoria:'notebook',
        marca:'dell',
        modelo:'Latitude 7420',
        precio:350000,
        stock:6,
        detalle1:'Procesador : Intel Core i5-1135G7',
        detalle2:'Memoria : 8GB (LPDDR4x-SDRAM)',
        detalle3:'Disco : 256GB SSD ',
        detalle4:'Pantalla : 14"',
        detalle5:'Peso : 1.22 kg',
        detalle6:'Sistema Operativo : Windows 10 Professional',
        anio:2022,
    },
    {
        id:6,
        imagen:`${moni}`,
        categoria:'monitores',
        marca:'samsung',
        modelo:'A330N',
        precio:24000,
        stock:25,
        detalle1:'Pantalla : 19" (LED)',
        detalle2:'Resolución Max : 1366 x 768 pixels',
        detalle3:'Tasa de Refresco : 60 Hz',
        detalle4:'Tiempo de respuesta : 5 Ms',
        detalle5:'Entradas / Salidas : D-SUB VGA (15 pines) - HDMI',
        detalle6:'Dimensiones con Base : 44.07 x 26.92 x 3.00 / Peso : 1.8 kg',
        anio:2022,
    },
    {
        id:7,
        imagen:`${samsung}`,
        categoria:'monitores',
        marca:'samsung',
        modelo:'F24T35',
        precio:29500,
        stock:12,
        detalle1:'Pantalla : 23.8" (W-LED)',
        detalle2:'Resolución Max : 1920 x 1080 pixels',
        detalle3:'Brillo / Luminosidad : 250 cd/m2',
        detalle4:'Contraste estático : 1000:1',
        detalle5:'Tasa de Refresco : 48 Hz - 75 Hz',
        detalle6:'Dimensiones : 539.2 mm x 322.8 mm x 39.4 mm / Peso : 2.4 kg',
        anio:2020,
    },
    {
        id:8,
        imagen:`${hpPav}`,
        categoria:'desktop',
        marca:'hp Pavilion',
        modelo:'Tg01-1160xt',
        precio:281000,
        stock:4,
        detalle1:'Intel Core I7-10700 (2.9 GHz hasta 4.8 GHz, 16 MB caché L3, 8 núcleos)',
        detalle2:'Nvidia GeForce RTX 3060 (GDDR6 12 Gb dedicado)',
        detalle3:'16 GB DDR3 - 2933 SDRAM (2x8GB)',
        detalle4:'Disco Principal : 512 GB SDD',
        detalle5:'Disco Secundario : Disco duro de 1 TB',
        detalle6:'Sistema Operativo: Windows 10 Professional',
        anio:2022,
    },
    {
        id:9,
        imagen:`${hpNot}`,
        categoria:'notebook',
        marca:'hp',
        modelo:'250 G8',
        precio:75200,
        stock:16,
        detalle1:'Intel Core I3-1005G1 (4M Cache, 3.40 GHz, 2 núcleos)',
        detalle2:'4 GB DDR4-2666 MHz (1 x 4 GB)',
        detalle3:'Disco Rígido : SATA de 1 TB (5400 rpm)',
        detalle4:'Pantalla HD 15.6" (1366 x 768 pixels)',
        detalle5:'Intel UHD Graphics for 10th Gen Intel Processor',
        detalle6:'Sistema Operativo : Free Dos',
        anio:2020,
    },
    {
        id:10,
        imagen:`${ideaPad}`,
        categoria:'notebook',
        marca:'lenovo',
        modelo:'IdeaPad 15ALC6',
        precio:105750,
        stock:8,
        detalle1:'AMD Ryzen 5 5500U Hexa-Core 2.1 GHz',
        detalle2:'Memoria : 8 GB DDR4',
        detalle3:'Almacenamiento : SSD M.2 NVMe de 256 GB',
        detalle4:'Pantalla : TN de 15.6" con resolución Full HD 1920 x 1080p',
        detalle5:'Gráficos : AMD Radeon',
        detalle6:'Sistema operativo : Windows 10 Home',
        anio:2022,
    },
    {
        id:11,
        imagen:`${lenovoV}`,
        categoria:'desktop',
        marca:'lenovo',
        modelo:'V50s',
        precio:114900,
        stock:18,
        detalle1:'Intel Core i7-10700 (4.80 GHz - Gen 10 - 16 MB caché - 8 núcleos)',
        detalle2:'Memoria de 16 GB DDR4',
        detalle3:'Almacenamiento : SSD 512 GB',
        detalle4:'Gráficos UHD Intel 630',
        detalle5:'Dimensiones (Al. x An. x Pr.) :  100 mm x 304 mm x 270 mm',
        detalle6:'Windows 10 Professional',
        anio:2018,
    },
    {
        id:12,
        imagen:`${monDell}`,
        categoria:'monitores',
        marca:'dell',
        modelo:'E2420H',
        precio:25300,
        stock:24,
        detalle1:'Pantalla de 23.8" (IPS, W-LED)',
        detalle2:'Resolución : 1920 x 1080 pixels',
        detalle3:'Brillo / Luminosidad : 250 cd/m2',
        detalle4:'Contraste estático: 1000:1',
        detalle5:'Frecuencia de actualización : 60 Hz',
        detalle6:'Peso : 3.25 kg',
        anio:2019,
    },
    {
        id:13,
        imagen:`${dellOpt}`,
        categoria:'desktop',
        marca:'dell',
        modelo:'Optiplex 3070',
        precio:171300,
        stock:9,
        detalle1:'Intel Core i5-9500 (4.40 GHz - 9 Gen - 9 MB caché - 6 núcleos)',
        detalle2:'MemoriA de 8 GB DDR4 - 2666',
        detalle3:'Almacenamiento : Disco de 1 TB HDD SATA',
        detalle4:'Intel UHD Graphics 630',
        detalle5:'Grabadora de DVD - RW',
        detalle6:'Sistema Operativo : Windows 10 Professional',
        anio:2020,
    },
    {
        id:14,
        imagen:`${ecotank}`,
        categoria:'impresoras',
        marca:'epson',
        modelo:'EcoTank L3210',
        precio:35990,
        stock:14,
        detalle1:'Inyección de tinta Heat-FreeTM Micro Piezo de 4 colores (CMYK)',
        detalle2:'Resolución Máxima de Impresión : Hasta 5760 dpi x 1440 dpi',
        detalle3:'Velocidad de Impresión: Negro 33 ppm y color 15 ppm (borrador, A4/carta)',
        detalle4:'Máximo Tamaño de Copia: A4/carta - 600 dpi x 1.200 dpi',
        detalle5:'Dimensiones : Abierto (37.5 cm x 57.8 cm x 25.3 cm)',
        detalle6:'Sistemas Operativos : Windows 7/ 8/ 10 - Windows Server 2003(SP2)  Mac OS X 10.5.8 o superior',
        anio:2022,
    },
    {
        id:15,
        imagen:`${brother}`,
        categoria:'impresoras',
        marca:'brother',
        modelo:'HL-1212W',
        precio:27500,
        stock:23,
        detalle1:'Tipo de impresora : Monocromática',
        detalle2:'Tecnología : Láser',
        detalle3:'Conectividad : USB, WiFi',
        detalle4:'Interfaz de red inalámbrica : WiFi 802.11 b/g/n',
        detalle5:'Dimensiones : Sin caja (340 (An) x 238 (F) x 189 (Al) mm)',
        detalle6:'Sistemas Operativos : Mac OS X 10 7 o superior / Windows 7, 8, 10, Server(2003-2008-2012-2012 R2)',
        anio:2017,
    },
    {
        id:16,
        imagen:`${hpLaser}`,
        categoria:'impresoras',
        marca:'hp',
        modelo:'LaserJet 137fnw',
        precio:47150,
        stock:6,
        detalle1:'Impresora Láser (Blanco y Negro)',
        detalle2:'Velocidad de impresión negro : 21 - 30',
        detalle3:'Funciones : Multifunction / All-in-One',
        detalle4:'Capacidades conexión : 10/100 Base-TX - Wi-Fi 802.11b/g/n',
        detalle5:'Dimensiones mínimas (anch. x prof. x alt.) : 406 mm x 359.6 mm x 308.7 mm',
        detalle6:'Sistemas Operativos : Windows 7, 8, 10, Server 2012-2016 / Mac OS v 10.11 o superior',
        anio:2021,
    },
    {
        id:17,
        imagen:`${mer}`,
        categoria:'conectividad',
        marca:'mercusys',
        modelo:'MW325R',
        precio:1720,
        stock:34,
        detalle1:'Wireless Standards : IEEE 802.11n, IEEE 802.11g, IEEE 802.11b',
        detalle2:'Frequency : 2.4 - 2.5GHz',
        detalle3:'Wireless Functions : Enable/Disable Wireless Radio, WDS Bridge',
        detalle4:'Interfaces : (3) 10/100Mbps LAN ports - (1) 10/100Mbps WAN port',
        detalle5:'Antenna Type : (4) 5dBi fixed omni directional antennas',
        detalle6:'Dimensions (W X D X H) : 167 mm x 118 mm x 33 mm',
        anio:2020,
    },
    {
        id:18,
        imagen:`${lbem5}`,
        categoria:'conectividad',
        marca:'ubiquiti',
        modelo:'LBE-M5-23',
        precio:6750,
        stock:52,
        detalle1:'Interfaz de red : (1) puerto Ethernet 10/100',
        detalle2:'Ganancia de la antena : 23 dBi',
        detalle3:'Frecuencia operativa (MHz) : 5150 - 5875',
        detalle4:'Potencia máxima de salida : 25 dBm',
        detalle5:'Fuente de alimentación : 25 V, adaptador PoE, 0.2 A',
        detalle6:'Dimensiones : 347 mm x 260 mm x 208 mm',
        anio:2022,
    },
    {
        id:19,
        imagen:`${archerC}`,
        categoria:'conectividad',
        marca:'tp-Link',
        modelo:'Archer C20',
        precio:4750,
        stock:56,
        detalle1:'Wi-Fi 5 : IEEE 802.11ac/n/a 5 GHz - IEEE 802.11n/b/g 2.4 GHz',
        detalle2:'Velocidad WiFi : AC750 (5GHz: 433 Mbps (802.11ac) - 2.4GHz: 300 Mbps (802.11n))',
        detalle3:'Modos de trabajo : Router Mode / Access Point Mode / Range Extender Mode',
        detalle4:'Puertos ethernet : (1) 10/100 Mbps WAN Port / (4) 10/100 Mbps LAN Ports',
        detalle5:'Rango WiFi : (3) Fixed Antennas',
        detalle6:'Dimensiones (Al x An x Pr) : 230 mm x 144 mm x 35 mm',
        anio:2020,
    },
    {
        id:20,
        imagen:`${epsonpp}`,
        categoria:'impresoras',
        marca:'epson',
        modelo:'Discproducer PP-50',
        precio:55670,
        stock:7,
        detalle1:'Producción sin supervisión de hasta 100 discos',
        detalle2:'Velocidades de impresión de hasta 95 discos/hora',
        detalle3:'Máxima calidad de impresión en su clase',
        detalle4:'Operación y mantenimiento económicos',
        detalle5:'Conectividad USB o en red ',
        detalle6:'Dimensiones: Ancho (37,6 cm) / Profundidad (46,5 cm) / Altura (32,4 cm)',
        anio:2019,
    }
];

export default productos