import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pckuttdrdjwouycfyisb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const runtimeConfig = useRuntimeConfig().public;
const supabase = createClient(supabaseUrl, runtimeConfig.supabase.key)

export default defineEventHandler(async (event) => {    
    const data = await supabase.from('starfox-events')
    .select('*')
    .order('id', { ascending: false })
    return {
        statusCode: 200,
        body: JSON.stringify(data.data)
    }
})