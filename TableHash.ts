class Producto {
    private codigo: string;
    private nombre: string;
    private precioCosto: number;
    private precioVenta: number;

    constructor(codigo: string, nombre: string, precioCosto: number, precioVenta: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioCosto = precioCosto;
        this.precioVenta = precioVenta;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecioCosto(): number {
        return this.precioCosto;
    }

    public getPrecioVenta(): number {
        return this.precioVenta;
    }

    public toString(): string {
        return `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio Costo: ${this.precioCosto}, Precio Venta: ${this.precioVenta}`;
    }
}

class HashTable1 {
    private size: number;
    private data: (Producto | undefined)[];

    constructor(size: number) {
        this.size = size;
        this.data = new Array(size);
    }

    private hash(key: string): number {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    public insert(producto: Producto): void {
        let index: number = this.hash(producto.getCodigo());
        if (this.data[index] !== undefined) {
            console.log(`Colisión detectada en el índice ${index}. Sobrescribiendo el producto.`);
        }
        this.data[index] = producto;
    }

    public search(codigo: string): Producto | undefined {
        let index: number = this.hash(codigo);
        return this.data[index];
    }

    public print(): void {
        let all_data: string = "";
        for (const key of this.data) {
            all_data += key + " "
        }
        console.log(all_data)
    }
}

// main
let hashtable: HashTable1 = new HashTable1(10)

// Creamos algunos productos
let producto1 = new Producto("P001", "Pepto-Bismol", 50.00, 65.00);
let producto2 = new Producto("P002", "Ibuprofeno", 30.00, 45.00);
let producto3 = new Producto("P003", "Aspirina", 25.00, 35.00);

// Insertamos los productos en la tabla hash
hashtable.insert(producto1);
hashtable.insert(producto2);
hashtable.insert(producto3);
console.log("")
// Mostramos todos los productos
hashtable.print();
console.log("")
// Buscar un producto
let codigoABuscar: string = "P002";
let productoEncontrado = hashtable.search(codigoABuscar);
if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado.toString());
} else {
    console.log("Producto no encontrado.");
}
