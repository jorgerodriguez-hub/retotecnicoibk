
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Person = {
        age: 35,
        firstName: 'Fernando',
        lastName: 'Herrera',
        address: {
            country: 'Canada',
            houseNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
        </>
    )
}
