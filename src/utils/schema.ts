// utils/schema.ts
export function generateBreadcrumbJSON(items: Array<{name: string, url: string}>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': items.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
                '@id': item.url,
                'name': item.name
            }
        }))
    };
}


export function generateWebsiteJSON(description:string, name:string, url:string){
    return {
        '@context': 'https://schema.org',
        '@type': "WebPage",
        'description': description,
        'name': name,
        'url' : url,
        'mainEntity': {
            '@type': 'Organization',
            'name': 'Pixium Digital',
            // 'description': description
        }
      }
}

