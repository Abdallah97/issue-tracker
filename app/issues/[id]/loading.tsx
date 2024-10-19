import IssuesStatusBadge from '@/app/components/IssuesStatusBadge'
import { Box, Card, Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
    const issue = 1;
  return (
    <Box className='max-w-xl'>
      
        <Skeleton />
 
      <Flex gap={"4"} mt="3" mb="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="2">
      <Skeleton count={3} />
      </Card>
    </Box>
  )
}

export default loading