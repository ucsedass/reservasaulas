import React from "react";
import Link from "next/link";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
const Nav = styled.nav`
  a {
    background-color: #eee; /* Grey background color */
    color: black; /* Black text color */
    display: block; /* Make the links appear below each other */
    padding: 12px; /* Add some padding */
    text-decoration: none; /* Remove underline from links */
  }

  a:hover {
    background-color: #ccc; /* Dark grey background on mouse-over */
  }
`;

const Layout = (props) => {
  return (
    <>
      <Box h="800px">
        <Grid h="100%" mt="0px" templateColumns="repeat(7, 1fr)" gap={0}>
          <GridItem colSpan={1} bg="blue.400">
            <Box textAlign="center" mt="50px">
              <Text color="white" mb={5}>
                UNIVERSIDAD CATOLICA DE SANTIAGO DEL ESTERO
              </Text>
              <center>
                <Image
                  width="80px"
                  height="100px"
                  alt="imagen"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NEhUPEA4OEBAPEA8QDw4QEBAQDxAPFRUWFhUVFRYYKCggGBolGxYVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFysdHx4tKy4rLS0rLSsrLS4rNy0rLS0tLS0rLS0tLS0tLS0tLSstLS0tLS0tLS0rLS0tLS0tK//AABEIAQoAvQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBwAEBgUBAgj/xABNEAABAwECBgsNBwMDAwUAAAACAAEDBAURBgcSITGTFjM0U1Ryc5KxstETFTI1QVFVYXSRlLPSIkNScYGD0xRiwiOh4QhC4hdFgqLB/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAgUDBv/EADYRAAEDAgIGCAUEAwEAAAAAAAEAAgMEESExBRIzQWFxMkJRUoGRobEUFSLR4ROCksFTYnLw/9oADAMBAAIRAxEAPwC+cdBRWfS1U1DFOc4yFLIZS5Tux6cz59K5TYUWS/8A7VDzp1bwu8S0fJzfMFLePQtOlp43xguGOKUle4axBy/CYA4RWW+iyYOfMiDblmvosin58vasPAuhCnBQwd1ZcldM3IrWDalnvosen1kvatLgzZFm2jFTVLUEcbTvVs8bFI7f6RkDPp/tv/VL6FMfFZuCh41pfPkSldTRxMaWC1ymtHVUk5frnK3qu/sHsvgUXvPtU2D2XwKL3n2rRKLLWqs1LgTZbC7tRRXsLvpPzfmsNhGVm2WEGXZ0MndaeEyMilynMme/Mz/2um1P4JcUuhJPG7tVJ7NS9EiYpmNfIGuFwucl7CxtiFWbCuyPRUPOmX02FFk+ioedOl3GjCtL4WHu+65O1h1j6fZb/ZPZXoqHnTLxsJ7K9Ew86ZYVl6KsKOHupSSeRuTlu2wksr0TBz5l9NhFZfomDnzLECiCp+Ch7q4GsmHWWzbCCzPRNPz5u1FgtizTJgayYGyyEb8uXNe91+lYwVes3bQ44dZlSajhEbiG7j7KrK2bWaL7wtRU2nZsRlH3qgLuZnHlOcrOWS7jfp8tyG1s2d6Ip9ZL2rh2rt83LS9ckAEU1FC6FhIxLW+y5zaQna9wByJ3cVpmtazvRFPrJe1TvrZ/oen1kvas+KKK7igg7q4HSlQN67Z2nZ4s5PY9PczO7/6kuhv1WcxsDAFNZtVSwtSf1sE8sgAZ580Liz5892U/vVmq2s+TPodUca3i2xPYpurTpGvpo4g3UFrrU0ZUyTh5fuIWowu8S0XJy/MFLePQmRhd4louTl+YKW8ehdqLZN8fdd5sn/8AtwV2BX4VQgXQhWgFgzK/AmPit3DQ8e0fnSJcQpj4rdw0PHtH50iR0psm807obOT9qYKiiixFvIc/glxS6Ek8b21Uns1L0SJ2T+CXFLoSTxu7VSezUvRImqLbDxXOTdzCWkaMKCCMK2AqSIjKCvGXoq7VmTZo4ogoYogq6Uciirtm7ZHxw6zKkKu2btkfHDrMuc+yfyPsqM6beYVm1dvm5abrkgAj2ruiblpeuSACKXYR/wDLfYLjUbR/M+6MKKKEKKKaCUcvarwD5M+h1RxreLrE9il6tOr1V4B8mfQ6o41vF1iexS9WnWZpTJi3dCdCTmFqMLfEtFycvXFLePQnjg7ZUlbZ9MEtBQVEQATx93qJWLOT53Fo3Zn/AFdWdhMPoSx/iJv4klDVtjYGkLWdDra2Of4SRgddCEm84+9N7YTD6Fsf4ib+JTYTD6Esf4ib+JMjSTR1Ui/Rmt1/RLCEx/EPvZMjFZuCh41pfPkR9hEHoSx/iJv4l2bGsyWB4gampKengabIjp5pJPtSPe9wkAszXuT33perrBOwNAtYrtR0Xw2t9V9a27sWhUUUSCeQ5/BLil0JJ43dqpPZqXokTtkHKZ287O3vZZCqwckqRjGps2zKgoYgiE5KmZ8wtdo7lm8q7QSCN+sRdVcL25hfnYGRxT62Ew+hLH+Im/iU2Ew+hLH+Im/iTvx7O6VDo7pDsvpk9thMPoSx/iJv4lNhMPoSx/iJv4lI0g3ulLPow7rJHC6ILp27CYfQtj/ETfxKbCYfQtj/ABE38St8xZ3VyOjr9b0SYEm87K7ZpN3WPO22B1mTa2Ew+hbH+Im/iXjYGwj9rvNZAuLsTEM8rkLtnvb/AEmztpVJtItMbxqnI+yhujAHA6+8bkrrWJv6ibO23S+X+8kATbzj72TZfBCGX/UeyLKkeR3N5JJ5Rkkcs7kbNE9xPfe+d8/lU2Ew+hLH+Im/iUU+kmiGMauTW+wVJdFBz3HXzJ3JVibecfeyMJj+IfeyZ2wmH0LY/wARN/EpsIg9C2P8RN/Eu/zRvdK4nQwPX9AljUyDkH9odrk8reZ1Uxr+LrE9il6tOmzsHg9CWP8AETfxJb4+4DhGgiOCngjiCqCEIJjkFgbuDXZwG67NdpStXVifVs21k9RUQpg4a17pwYvfF1Nyb9YlolncXvi6m5N+sS0SQTqiiiiEKKKKIQoooohCiiiiEKKKKIQoooohCiiiiEKIc/gl+T9CIhz+CX5P0KknQPIqRmhUG1BxB6GVlVqDag4g9DKyoh2beQ9kOzKiiii6KFEi/wDqY00H5VvTAnokX/1MaaD8q3pgQhMTAS1qWOgpwOqpwIY3YhKaMSZ8sszs75loO/lHwyl18XasNFbclm2PSzxiDvcTFlBlXi3dCzZ2z5lnRxs1D/cx6pvqXeOmkkF2rk6YNOIOCbff2i4ZS6+LtU7+UfDKXXxdqVAY06l/uYtU31IwYyap/u4NV/yuvwE3YPNcDXwjMnyTR7+UfDKXXxdq+6e06eYsiKogkK53yQkAyubS9zPozsliGH9Y/wD2U+q/5WswQtcrRhpKswATketZ2FrmuAyBv9hZc5qWSIXeukFVHOSGY2WvUUUS6YXjvcqHf2i4ZS6+LtVuo8AuKXQlzhXhfLZMdMwBG4HTU7uzxsRZTs7eds1wq8cZkdqtVXO1Rdbvv5R8MpdfF2qd/KPhlLr4u1KJsbk7/dBqm+pfTY2ajeo9UP1Jj4KXh5rmZgM2nyTb7+UfDKXXxdqnfyj4ZS6+LtSl/wDVio3qPVN9SjY16jeotU31KfgZeHmqGrYM7+SbXfyj4ZS6+LtU7+UfDKXXxdqU7Y1KneotU31L6bGjU71Dqm+pHwMvDzVfjouPkmt38o+GUuvi7UOS2qMmdmq6Z3fMzNPE7u76GbOle2M6q3uHVf8AkiwYxqqQhB44bjIQf/S8hPd5/WqS0MwY42GR3obXQkgXTIpbYpAARKqpxIRESEpo2ISZrnZ2vzOj9/KPhlLr4u1LSpxgVMJnEMcOTEZgLvHe7iBOLXvfpzIbYxqve4NV/wAqIKGYxMNh0Rv4KH6QgDiCd5TP7+UfDKXXxdqnfyj4ZS6+LtSybGFWb3T6r/lfTYwKz8FPqv8Aldfl8/YPNU+Z0/eTL7+UfDKXXxdqSv8A1EVsNQ9F3GWGXJasysiQDyb+43X3aND+5aA8P6wWcsmnuFnfa/N+qyWOuvKspbJqTBmOenqJSYW+yzk0D3MuM1NJCAXjNd4KmOe+ob2Wqwh8QU3FPqypURaE1sIfEFNxT6sqVMWhaNDsxzKpN1vBW4F0oFzYF0oFotXn5lfhTHxW7hoeNaPz5EuIEx8Vu4aHjWj8+RI6U2Tead0NnJ+1MFRRRYi3kOfwS4pdCSeN3aqT2al6JE7J/BLil0JJ43tqpPZqXokTVFth4rnJu5hLSNGFBjRhWwFzkRGXrLxlBVws6bNHFEFDFEFXSbkUVds3bI+OHWZUxVyzdsj44dZlzn2T+R9lRnTbzCs2ruiblpeuSAKPau3zctN1yQARS7CP/lvsFxqNo/mfdGFGFBFFFNBKOUqfAPkz6HVPGv4usT2KXq06uVPgHyZ9DqnjX8XWJ7FL1adZmlMmeK3dCdGTmFtcIfEFNxT6sqVMWhNbCHxBTcU+rKlTFoVKHZjmVozdbwVuBdKBc2BdKBaLVgTK/AmPit3DQ8a0fnyJcQpj4rdw0PGtL58iR0ps2805obOT9qYKiiixFvIc/glxS6Ek8b21Uns1L0SJ2T+CXFLoSTxvbVSezUvRImqLbDxXOTdzCWkaMKDGjCtgKkiIygqMoKuFmTZo4ogoYogq6UcjCrlm7ZHxw6zKmKuWbtkfHDrMuc+yfyPsqM6beYVm1dvm5abrkgAj2rt83LTdckAFNLsI/wDlvsFxqNo/mfdGFFFCFFFMhKOUqfAPkz6HVPGv4usT2KXq06uVPgHyZ9DqnjX8XWJ7FL1adZmlMmeK3dCdGTmFtcIfEFNxT6sqVMWhNbCHxBTcU+rKlTFoVKHZjmVozdbwVuBdKBc2BdKBaLVgTK/AmPit3DQ8a0vnyJcQpj4rdw0PGtL58iR0ps2805obOT9qYKiiixFvIc/glxS6Ek8b21Uns1L0SJ2T+CXFLoSTxvbVSezUvRImqLbDxXOTdzCWkaMKDGjCtgKkiIygqMoKuFmTZo4ogoYogq6UcjCrtm7ZHxw6zKkDeTz6F3bFsSpkljdoZBFiEnMgIAYRe987tn0JasniiheZHhv0nMgbuKIY3vkaGAnEZKvau3zctL1yQAXXtuxqkJpC7lIYkZkxgBGOSROTX3aHzrlM12bytpbysjR88U1PGY3h30tyIO4di5VcT2Su1gRicxxRBRRQRRhT4SDlKnwD5M+h1Txr+LrE9il6tOrlT4B8mfQ6p41/F1iexS9WnWZpTJnit3QnRk5hbXCHxBTcU+rKlTFoTYtoHksKmABIyYTvAGci8GXyNnSxisupu3NU6mXsS9HPE2OxeBid4WlK1x1rA7txXsC6UCBDZlRwefVSdivw2fUbzNq5OxaDaiHvt8x91hzRP7p8ijwJj4rdw0PGtL58iwENDPvMnMPsTAxai8VFRDILxkJV7kJs4EOVNI43s+i9nZJaTniMbbPace0JvREbgZLtIy3HimAog/1Mf4x97Kf1Mf4x5zLF/VZ3h5rcsexfU/glxS6Ek8b21Uns1L0SJzz1EbiX2x8EvK3mSdxrU0ksVK0ccsjjT07E0YEbi7Md7PdodNUk0YlBLhv3hc5GnDDeEr40YUYLKqeC1Ool7EYbMqeDVGpl7FrfEQ98eY+6pI09irsoKt97Kng0+pk7F6Nl1XBp9VJ2K7aiHvt8x91nSxvJ6J8ihCupZ1AJC80pvHCD5LkzXnIenIBvKXr0Mg0tjVUpMA08uUT3NlRkA/qT5mZdbCGzagJBgGCR4oQEI3ACISvZnM7xzXkV7v8Aolp6yMyNgZK1pcCSbi4aLZcSTbgLncubIHBpkcwkDdY4k/1b+gg9+CD7NMA046MsftTE390j5/dcy8s6rl7tGfdDc8sWynJ3K53Znzv6ndVhs2o3ibVydi7GDlgTTSs5CUQxOBERgTX3PezCz3Xvm/Rc530NPTyPJaPpNySHE3wxOLj6qrG1EkrG2dmMLED+gEC1quR6iUu6FlNJILEzuzsIk7CzXeRmZFjtYz+zOLVA/wB+2C39ptnb9b1awjsKaGVzFilCY5DZ4wJ3F3K9xJmv8+nyrmDQT7zLzD7FNI+gqaaJwLTZosb2ItgbHBwsRw8QuVQKmKV4IdmcLXB8Mj6q1VUgsLSxE5xO9z3+FGX4SbofQ6riulYdHM8nc3hk7nKJDJlAQtkXeFe/lZ7nb8kGazJ4icCiN3HyiJEL+tnZM09bE2R1O+VpIAIOsLlpuMd1wRwuLHelZ6d7mCVrCAcCLHA8OBGXiFTqfAPkz6HVPGv4usT2KXq066s9DO4EzQyXvGTXZB6bn9S5uNcHGz7GB2djCkmEwcbiEsmnzEz52f1LlpKaN+oGvBz3haWhWODZLtIxG5bS2ZHjsKnMCcDcTvMHcS8GXytn8jJZRWtU8KqdfL2pl4Q+IKbin1ZUqYtC50cETo7lgOJ3D7LRlc4a1idy68FqVPCZ9bJ2q/Dac/CJtYfauJAulAn200P+Nv8AEfZYU00nePmV2IbQm36Xnl2rf4tTeWioikJ5CIrQyiMnMiYZpGHKd873MzN+iW8KY+K3cNDxrS+fIk9JwRCNtmAY9g+yc0PI8mS7iejvPFbv+lj/AAD7mU/pY/wD7mRlFjfps7o8lt3Paq01PGwl9gfBLyN5knca1VJFFSvHLJG5U9M5PGZA5O7He7uOl055/BLil0JJ43tqpPZqXokTNJFGZQC0b9wXORxwx3hYELWquFVWvl7UUbVquFVOvl7VzY0YVq/DQ/42/wAR9lWR7u0+avtatVwqo18vavobVquE1Gul7VRZeirtpof8bf4j7LNmkffpHzXWo7bqoiaQaiVyF72Y5DMH9Ti73Oy6+EVp1BytMM8jRTgBwsBkAsN1xDcObKEspn8uhZkV1bOrhEXgmFzgJ8pmG5jiPRlg7+XztodLT0UTZGzsia4tuCLC5abHDiPUXG9UZO4tMZeQDjmcCP69sCoNp1O/zayTtXZwcwhmhkZjc5hlcBdiIncb3uZxd77tP6rnFYxk2VTk1SHnDbBb++Pwmf8AK9l82bAbzxhkFl5Y/YyXYrmJnfN+TOqzxUNTTyMswjVNxYAi2OOThY8lzY6oilYbuGI4g+4OC7eElvSyyvGDlEMJyB9kyZzJiucndrvNoXLG0p9/l1hdq9teE2qJRcHynlkJhue9xIndnZvM7OyNDZMjNlTO1OPnkzE/FDwnf9EUkdDTUsTbNA1RYWBJJAJtm4knmuc7qmWZ5BccTfcB7AK7YddN3VjeU3jiEpJbyIhyGbRc/ld7mb1uhTWtUSE5vIbOXkYiEW9TMyFVVY5PcYhcYmdnJyuy5SbQT3aG8zeRVhTNPRROldUPia0kAAaouGi5x4km9swLDO6WnqZGsETZCbEkm5sTw4Aeeas1NfNkE/dpc0ZZ8svM/rXMxrm72fYxuROR0kxGbu7kZZNPnJ3zu/rdWqnwD5M+h1Txr+LrE9il6tOuWkoY2aha0DPcP6WjoaRzmyaxJxG8ra4Q+IKbin1ZUqYtCa2EPiCm4p9WVKmLQpodmOZT83W8FbgXSgXNgXSgWi1YEyvwJj4rdw0PGtL58iXEKY+K3cNDxrS+fIkdKbNvNOaGzk/amCooosRbyHP4JcUuhJPG9tVJ7NS9Eidk/glxS6Ek8b21Uns1L0SJqi2w8Vzk3cwlpGjCgxowrYCpIiMoKjKCrhZk2aOKIKGKIKulHI8ZOzs7O7O2h2e52/Vd6xrdqgljZ5TMXIRcDJzZ2J7vLnbSuAKuWbtkfHDrMlaynimheJWB30nMA7jlfJEMr43t1HEYjIrt21blSc0gtKcYjIYMIO4tcDuOd2zu73LkZTk97u7u+l3e93/VFtXdEvLTdckAEaPpoYYI/wBNgb9Lchbd5rlVyvkkdruJxOZ4ooowoQoorQCQcpU+AfJn0OqeNfxdYnsUvVp1cqfAPkz6HVPGv4usT2KXq06zNKZMW7oToycwtphGTNYFNe7N9k2vd7s7jLclPFMLf9w+9kzrDwmr46aOAY7OOKNiYGmhmkK7KK7K+0zX/kyt7J67g1jfCy/WkIKr9Nurq38VrOjDr33pYQ1MbaTH3srsNfC2mUOcyYWyau4NY3wkv1qbJq7g1jfCS/WmBpIjqev4Sb9HRu6x9Fi4rUp20zxc5k0MVj30FC7fitL58i4eyeu4NY/wsv1r6bCy02ICEbMFosvJEYJ2H7TZ8zGuNTWGdobq2txXWlo2U+tqkm9s+CbiiVezi1vNZupqPrU2c2t5rN1NR/IkU5dNCfwS4pdCSWN82aOkZ3Znemprmd2a/Ma7Z4b2sTO11m52dtpqPL/81WjwntBgACisqTuQDGJSU8xFcLXfj9S7QSfpv1rXVXC9uBCUQGP4h97Ioyh+IfeybOyau4NY3wkv1qbJq7g1jfCS/Wm/jv8AX1/ChzQUqGmD8Y+9l9NOH4x97Jq7Jq7g1jfCS/WpsnruDWP8JL9at8w/09fwuDqVjt5StGpj/GPvZFGpj3wPeyZuyeu4NY/wkv1qbJq7g1jfCS/Wp+Ynuev4XI0DO8UthrIt8D3srlm1sXdY27oF7yRszXtpymW92TV3BrG+El+tTZNXcHshvW1LKzt+T5eZ1STSBcxzQzMEZ9vgobo+MOB1jhyWLtitiGomZ5AZ2nmZ2d2vZ2kK9lWG0YN+j5zLeDhLXM139PZD3Z7yppSJ/W75ed/Wvdk1dwaxvhJfrUQaQcyNjSzIAZ9gsqyaMic4u1jiSdyww2nBv0XOZFG1Kff4ucy2myau4NY3wkv1qbJq7g1jfCS/Wu3zQ9z1XI6IiPXPosXPalO4EzTxXvGTM2U2d7nXzjV8XWJ7FL1adbbZNXcGsb4SX61hsadqVFd/TNUBTs0LTtE1NGYMzF3O9nYnfN9lrrvWlqqrM9vptbim6SkZTBwaSb9q0uDFO03cYnd2aQ2B3bSzObtmTG2BUu/VPOi+lL/AvbKblg+YnYk7pwJT4T2SFFN3ICIhcBNnO7Ka93a7Np0eZchafGHuoeRDrGswpChazBjBeGtheWSSUXyyFmBwZrmu87P51btnA2CCCSUJZ3KMHNmNwcXu8mZmXSxfbl/dk6BXTwm3JPyJ9ChSldZNI1RNHC7uLSGwu7XXs3qW42B0u/VPOi+lY/BjdcHKt0Om4goCyewKl36p50X0qbAqXfqnnRfSqGGFvVUFR3KKXuYiAvmEXcnLz33rh7Ka/hJcyPsRijBavYHS79U86L6VxsKcGoaKJpY5JSd5GB2NwdrnZ3va5m8y5uymv4SXMi7FVr7YqalmGaYjFnvYXYWa/wA+ZmU4oVrBeyQrZniMjERjI7wuyndiFrs7P+JavYFS79U86L6VxcXW6T9nPrxpiSFczv5md/coJQFldgVLv1TzovpU2BUu/VPOi+lZUsK64nv/AKhxve/JYI7mv8jXtoXmymv4SXMj7FOKjBavYFS79U86L6VlMJ7IChmaMDMhKMTbLuymvd2uvbTo8ymymv4SXMj7Fz66tlqCy5ZHMrma97szN5GZszIQtDgtgzDXRFLJJKLtI4MwODNcwi973s/4l2tgVLv1TzovpX3i73MXtB9QFpJzyRIm0iJO36MoupWY2BUu/VPOi+lTYFS79U86L6VlXwqr3z/1BNfnuYI7m9TZl5spr+ElzIuxTihaOtwIp44zMZqjKADJsp43a8Wd87MLebzpJ4wfuP3v8ExpsIq2QXAqg3EmcSbJBr2fS17NelzjC+4/e/wQoW1wK8Om5YPmJ1pJ4F7ZTcsHzE7FVSEt8Ye6R5EOsazC0+MPdI8iHWNZhWCEycX25f3ZOgV08JtyT8ifQuZi+3L+7J0CunhNuSfkT6FUoCW2DG64OVbodNxKPBjdcHKt0Om4pKAllh7usuTj6HWdWiw93WXJx9DrOqVCiiiiELU4ut0n7OfXjTCn8EuKXQl7i63Sfs59eNMSQb2dvOzsoKkJIjoXq65YMVou4/0xvc917OLs93lbPoXmxqu4LJ7w7VKhclRdbY1XcFk94dqoVlHLAWRLGQFcz5JeZ/K3nQhb/F3uYvaD6gLR1fgHxD6HWcxd7mLlz6gLR1LO4EzZ3cSZm9dyqVISVZeor0krZnikZ2zO2QWlT+mk3uTmErKEJY7GF9x+9/gtqUBs17gbM2l3EmZYrGF9x+9/ggoW0wL8Om5YPmJ2JKYFeHTcsHzE61VSEt8Ye6h5EOsazC0+MPdQ8iHWNZhWCEycX25f3ZOgV08JtyT8ifQuZi+3L+7J0CunhNuSfkT6FUoCW2DG64OVbodNxKPBjdcHKt0Om4pKAllh7usuTj6HWdWiw93WXJx9DrOqVCiiiiELs4KWsFFM8sgmQlEQfYucmdyF77nu/D/utZs7pN7qeZH9SXSiLITF2d0m91PMj+pEpsNKSQxDJmHLdhYiAclnfRfc7ulsj0W2BykfWZFlKc6XWMTdI8gPWJMVLrGJukeQHrEqhBXdxd7mLlz6gLUO6y+Lvcxe0H1AWjq9rPiH0OgoC5hYTULO7PUhezuz3Mbte3rZs6mymh4SHNPsSoZeq1kXTMtLCShOGQWnEnKKQWHJPO7i7M2jzpA4wvuP3v8ABbJY7GF9x+9/giyFtMCtspuWD5idiSeBXh03LB8xOxQUBLfGHukeRDrGswmfb+DEdcYyPIUZCOQ9zMTO197adGl/euZsBj4SfMHtQChXMX25f3pOgV1MJtyT8ifQvuxLLCjiaECImvcnItLk+l7vIvjCbck/In0KFKW2DG64OVbodNxKPBjdcHKt/wDqbikqAllh7usuTj6HWdTNt3BaOtkaV5TjLJYSuZiZ7tGnR5VztgMfCT5g9qm6Fg1FvNgMfCT5g9q5GEuC40MbSjMR3mwOLizaWd772/JF1CzSi6uDVkNXSvE5uDDGUjuzZTvc4td/9v8AZafYDHwk+YPahCwaPRbYHKR9ZltdgMfCT5g9qJSYDRRmJvPITATFk5LDfdnbP+aLqVrkusYm6R5AesSYyXOMTdI8gPWJVCCu7i73MXtB9QFo6vaz4h9DrOYu9zFy59QFppAYmcX0Ozs/5OgoCSTL1bwsAYr81RIzX5myBe5vzU2Ax8JPmD2q10LBrHYwvuP3v8E563AcI4zkaoN3ACNmcGufJa+7T6kmMYX3H73+CELU2DMUYRmL3EDuQv5nYndlqNmVdvgasEi6q0agCMRnmFmKS4RkNmb7T+RnQu+1Vwmo1snaouq3T52ZV2+BqwU2ZV2+BqwSHe1qrhNRrZO1ePa1Vwmo1snai6Lp87Mq7fA1YIFZhRWTgURyDkm2STMAs7t5WvSN77VXCajWydqnfaq4TUa2TtUXRdN6lqDhMZAe4wJiF7me52Xb2ZV2+BqwSF77VXCajWydqjWtVcJqNbJ2o1kXT52ZV2+BqwU2ZV2+BqwSG77VXCajWydqnfaq4TUa2TtRdF0+tmVdvgasFStS3qmrFglNnFiymZgEc+i/N+qSXfaq4TUa2TtXvfaq4TUa2TtU3RdOSzLSlpD7pCTCTi4vezEzi7s91z+tmXU2ZV2+BqwSHe1qrhNRrZO1ed9qrhNRrZO1F0XT62ZV2+BqwXmzKu3wNWCQ3faq4TUa2TtU77VXCajWydqi6Lp87Mq7fA1YLlWlaMtUfdJSyiuYWuZmZmbyMzfmk332quE1Gtk7VO+1Vwmo1snajWRdO2y7eqaQXCI2YSLKdnES+1czeX8mV3ZlXb4GrBIXvtVcJqNbJ2qd9qrhNRrZO1F0XT52ZV2+BqwU2ZV2+BqwSG77VXCajWydqnfaq4TUa2TtRdF09qjCutkEgKQckxcSujFnufM+dLLGF9x+9/gst32quE1Gtk7UGtq5ZLsuWQ7iO7LMiu0aL0XU3X//2Q=="
                />
              </center>

              <Text fontSize="1xl" mt={5}>
                SISTEMA DE RESERVA DE AULAS
              </Text>
            </Box>
            <Box mt="50px">
              <Nav>
                <Link href="/" color="red">
                  Inicio
                </Link>

                <Link href="/altadereservas">Alta de reserva</Link>

                <Link href="/editarreservas">Editar reserva</Link>

                <Link href="/eliminarreservas">Baja masiva</Link>

                <Link href="/consultadereservas">Consultar reserva</Link>

                <Link href="/gestiondeaulas">Gestion de aulas</Link>

                <Link href="/gestiondeusuarios">Gestion de usuarios</Link>
              </Nav>
            </Box>
          </GridItem>
          <GridItem colSpan={6} bg="blue.100">
            {" "}
            {props.children}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
