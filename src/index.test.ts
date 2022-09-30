import { cli } from "./utils/cli";
import messages from "./constants/messages";
export const BASE_SCRIPT = "./dist/src/index";
describe('e2e', () => {
  it(`Meu script deve existir na base ${BASE_SCRIPT}`, async () => {
    const result = await cli('');
    expect(result.error).toBeNull();
  })

  it("se não não passarmos nehum argumento, deve mostra texto de help", async () => {
    const result = await cli('');
    expect(result.stderr).toContain(messages.help);
  });
})

