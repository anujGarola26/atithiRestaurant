import React from 'react'
import Layout from '../components/layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my : 15, textAlign: "center", p: 2, "& h4" : {
        fontSize: "3rem",
        fontWeight:"900",
        my: 2,
      }, "& p": {
        textAlign: "justify",
        fontSize: "1rem",
      },
      "@media (max-width : 600px)": {
        mt:0,
        "& h4" : {
            fontSize: "1rem",
        },
        "& p": {
            fontSize: ".8rem",
        },
      },
     }}>
        <Typography variant='h4'>
            Welcome to Atithi Cafe
        </Typography>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore dicta, sint cum natus quo! Quis nobis natus ex provident atque, ut fugit deserunt delectus! Perspiciatis ipsam exercitationem enim quibusdam tenetur fugiat reiciendis consectetur, amet repellendus sequi ullam quidem, iste laboriosam, ratione doloremque deserunt. Illo eos blanditiis dolorum eaque voluptates sequi laudantium, illum itaque eum quae, unde earum quam repellat aliquid corrupti maiores quia, pariatur officia esse. Enim quis mollitia laborum reiciendis, necessitatibus illum neque commodi atque excepturi aliquam placeat odio voluptates aut dignissimos numquam voluptate nostrum reprehenderit explicabo doloremque, consequuntur provident optio laboriosam, facilis eos. Animi magnam quis tenetur.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias est eaque commodi quisquam magni, animi libero voluptates dolores incidunt nemo modi soluta ducimus aliquam doloremque repudiandae quod perspiciatis harum. Laudantium magni iure iste consequuntur nostrum maxime, facilis debitis neque est repellat veniam? Vel error, dolores inventore, natus ad accusantium obcaecati, rem harum voluptatem deleniti quo! Qui magni officia veritatis!
        </p>
      </Box>
    </Layout>
  )
}

export default About
