import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { getAllCategory, getAllProducts } from "@/services/product"


export const ProductsTab = async () => {

    // Lista os produtos
    const products = await getAllProducts()
    // Lista as categorias
    const categories = await getAllCategory()
    const primeiro = categories[0]

    console.log(categories)
    console.log(products)

    return (
        // Pegando o primeiro ítem da categoria para deixar como default
        // Depois listando todas as categorias para colocar na barra principal
        // Por fim listando todos os produtos
        <Tabs defaultValue={primeiro.name}>
            <TabsList className="flex">
                {categories.map(item => (
                    <TabsTrigger
                        key={item.id}
                        value={item.name}
                        className="flex-1"
                    >
                        {item.category}
                    </TabsTrigger>
                ))}
            </TabsList>


        </Tabs>
    )
}