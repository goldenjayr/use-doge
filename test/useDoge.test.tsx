import { renderHook } from '@testing-library/react-hooks';
import useDoge from '../'

describe('useDoge', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });
})

describe('useDoge',  () => {
  it('should get dogecoin', async () => {
    const { result } = renderHook(() => useDoge('DOGE'))
    // await waitForNextUpdate()
    // expect(fetch).toHaveBeenCalled()
    console.log("🚀 ~ file: useDoge.test.tsx ~ line 10 ~ it ~ result", result.current)
    // expect(result.current).toEqual({

    // })
  });
});
