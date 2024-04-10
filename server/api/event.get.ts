import { SupabaseClient } from "@supabase/supabase-js"
// use supabase client to get data from event table

export default defineEventHandler(async (event) => {
    // return as response the event object
    const data = await SupabaseClient.from('event').select('*')
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
})