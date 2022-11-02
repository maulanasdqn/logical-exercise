const mapUsers = u => ({ data : u.map(x => x), count: u.length})
export const mapArticles = a => ({ data : a.map(x => x), count: a.length}) 

export default mapUsers
