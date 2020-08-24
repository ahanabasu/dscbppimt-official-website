import React from 'react'
import Layout from '../components/layout'
import { Container, Grid, Typography } from '@material-ui/core'
import blogs from '../components/helper/blogsHelper'
import { BlogCard } from '../components/card'

function Blogs() {
    return (
        <Layout>
                <Container style={{marginBottom : '2em'}}>
                <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Blogs</Typography>
                    <Grid container spacing={2}>
                    {blogs.map(event => (
                        <Grid item xs={12} sm={6} md={12}>
                        <BlogCard 
                        Image={event.image}
                        title={event.title} 
                        speaker={event.speaker} 
                        discription={event.discription} 
                        platform={event.platform}
                        />
                        </Grid>
                    ))}
                    </Grid>
                </Container>  
        </Layout>
    )
}

export default Blogs

