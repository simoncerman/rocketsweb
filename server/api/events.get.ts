import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pckuttdrdjwouycfyisb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const runtimeConfig = useRuntimeConfig().public;
const supabase = createClient(supabaseUrl, runtimeConfig.supabase.key)

export default defineEventHandler(async (event) => {    
    const {data, error} = await supabase.from('starfox-events')
    .select('*')
    .order('id', { ascending: true })

    if(error) { 
        console.log(error)
        return {
            statusCode: 500,
            body: "Error fetching data from database"
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
})