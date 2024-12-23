// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: "Gris",
    marca: "Fiat",
    modelo: "Mobi",
    motor:false,
    encenderAuto(){
        this.motor = true;
    },
    apagarAuto(){
        this.motor = false;
    }
}

document.write(`<br> color: ${auto.color}`);
document.write(`<br> marca: ${auto.marca}`);
document.write(`<br> modelo: ${auto.modelo}`);
document.write(`<br> Estado del auto: ${auto.motor ? `Encendido` : `Apagado`}`);

auto.encenderAuto();
document.write(`<br>Estado del auto: ${auto.motor ? `Encendido` : `Apagado`}`)

auto.apagarAuto();
document.write(`<br>Estado del auto: ${auto.motor ? `Encendido` : `Apagado`}`);