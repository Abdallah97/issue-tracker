import Skeleton from "@/app/components/Skeleton";
import { Box, Card, Flex } from "@radix-ui/themes";

function loading() {
  const issue = 1;
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap={"4"} mt="3" mb="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="2">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}

export default loading;
