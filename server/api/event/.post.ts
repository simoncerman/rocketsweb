import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pckuttdrdjwouycfyisb.supabase.co'
const runtimeConfig = useRuntimeConfig().public;
const supabase = createClient(supabaseUrl, runtimeConfig.supabase.key)

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { data, error } = await supabase
    // const user = useSupabaseUser(event)
    // if(!user) {
    //     return {
    //         statusCode: 401,
    //         body: "Unauthorized"
    //     }
    // }

    await supabase.from('starfox-events')
    .insert([
        {
            title: body.title,
            description: body.description,
            date: body.date,
            project: 'starfox'
        }
    ])
    if(error) { 
        console.log(error) 
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }  
})