import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pckuttdrdjwouycfyisb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const runtimeConfig = useRuntimeConfig().public;
const supabase = createClient(supabaseUrl, runtimeConfig.supabase.key)

// this will update the event data in the database
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event);
    const user = useSupabaseUser(event)
    if(!user) {
        return {
            statusCode: 401,
            body: "Unauthorized"
        }
    }

    // this will delete the event data in the database
    const {data, error} = await supabase.from('starfox-events')
    .delete()
    .eq('id', id)

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