export type User = {
    id: string,
    created_at: string, 
    updated_at: string,
    geoip: any,
    ip: string,
    email: string,
    name: string,
    status: 'unregistered' |  'applied' | 'verified' 
}