export const projectsData = [
    {
        title: 'Baños',
        category: 'banos',
        categoryId: 'GqwIxfr',
        icon: '/bano.webp',
        description: 'Descubre nuestra experiencia en la creación de baños funcionales y elegantes. Transformamos espacios de aseo en oasis de relajación y comodidad, cuidando cada detalle.',
    },

    {
        title: 'Interiores',
        category: 'interiores',
        categoryId: 'UzVvKsd',
        icon: '/parquet.webp',
        description: 'Explora nuestros proyectos de diseño de interiores que fusionan estilo y funcionalidad. Creamos ambientes acogedores y estéticamente atractivos.',
    },

    {
        title: 'Cocinas',
        category: 'cocinas',
        categoryId: 'x6oiPPc',
        icon: '/cocina.webp',
        description: 'Sumérgete en nuestras innovadoras cocinas. Diseñamos espacios culinarios que hacen que cocinar sea un placer y que se adaptan a tu estilo de vida.',
    },

    {
        title: 'Iluminación Led',
        category: 'iluminacion',
        categoryId: 'ckakE6K',
        icon:'/instalacion-electrica.webp',
        description: 'Experimenta la magia de la iluminación LED en nuestros proyectos. Transformamos espacios con tecnología eficiente que resalta la belleza de tu entorno y ahorra energía.',
    }
]

export const findProject = (category: string) => {
    const project = projectsData.filter(project => project.category === category);
    return project[0]
}
