import { Container, Grid, GridCol, Stack } from "@mantine/core";
import { AttackHistory } from "./attack-history";
import { AttackLogForm } from "./attack-log-form";
import { CompanyInfo } from "./company-info";
import { Header } from "./header";
import { PersonInfo } from "./person-info";

const AttackLog = () => {
	return (
		<Container size="xl" py="lg">
			<Header />

			<Grid mt="xl" gutter="lg">
				<GridCol span={{ base: 12, lg: 6 }}>
					<Stack gap="lg">
						<CompanyInfo />
						<PersonInfo />
						<AttackLogForm />
					</Stack>
				</GridCol>

				<GridCol span={{ base: 12, lg: 6 }}>
					<AttackHistory />
				</GridCol>
			</Grid>
		</Container>
	);
};

export default AttackLog;
