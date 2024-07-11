import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip"
import { TripDetailsPage } from "./pages/trip-details"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />
  },
])

export function App() {
  return <RouterProvider router={router} />
}

/*
Tailwind usa medidas relativas do CSS
1 - Se pegar o Valor normal e Dividir por 4, tera o valor do Tailwind.
2 - "Ctrl + D" faz com que seja possivel selecionar mais de uma Linha.
3 - Usa como biblioteca a Lucide React.
5 - No React sempre que quiser referenciar uma Função do JavaScript no HTML usa-se chaves "{}".
6 - Se em uma condicional usar o && no lugar do ? acaba não precisando mais do Else.
7 - Usando o cochetes "[]" no Tailwind é possível utilizar valores de fora dele que seriam normais.
8 - inset-0 
*/


