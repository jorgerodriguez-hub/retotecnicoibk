import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";


export const UsersPage = () => {

    const { users, nextPage, prevPage } = useUsers();

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))
                }
            </tbody>
        </table>

        <div>
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
        </div>

    </>
  )
}