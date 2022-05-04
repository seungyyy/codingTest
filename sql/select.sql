-- 모든 레코드 조회하기  https://programmers.co.kr/learn/courses/30/lessons/59034
-- ANIMAL_INS  동물 보호소에 들어온 모든 동물의 정보를 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요.

SELECT *
FROM ANIMAL_INS
ORDER BY ANIMAL_ID


----------------------------------------------------------------------------------------------
-- 역순 정렬하기  https://programmers.co.kr/learn/courses/30/lessons/59035
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다  들어온 모든 동물의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요. 이때 결과는 ANIMAL_ID 역순으로 보여주세요.

SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC


----------------------------------------------------------------------------------------------
-- 아픈 동물 찾기  https://programmers.co.kr/learn/courses/30/lessons/59036
--  ANIMAL_INS 테이블 동물 보호소에 들어온 동물 중 아픈 동물1의 아이디와 이름을 조회하는 SQL 문을 작성해주세요. 이때 결과는 아이디 순으로 조회해주세요.

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION='Sick'



----------------------------------------------------------------------------------------------
-- 어린 동물 찾기 https://programmers.co.kr/learn/courses/30/lessons/59037
-- ANIMAL_INS 테이블  동물 중 젊은 동물의 아이디와 이름을 조회하는 SQL 문을 작성해주세요. 이때 결과는 아이디 순으로 조회해주세요.
-- INTAKE_CONDITION이 Aged가 아닌 경우를 뜻함

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION <> 'Aged'



----------------------------------------------------------------------------------------------
-- ANIMAL_INS 테이블 모든 동물의 아이디와 이름을 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요. id와 name만 나오게 출력해주세요
-- 동물의 아이디와 이름  https://programmers.co.kr/learn/courses/30/lessons/59403

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
GROUP BY ANIMAL_ID




----------------------------------------------------------------------------------------------
-- 여러 기준으로 정렬하기 https://programmers.co.kr/learn/courses/30/lessons/59404
-- ANIMAL_INS 테이블 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회하는 SQL문을 작성해주세요. 단, 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저 보여줘야 합니다.

SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC



----------------------------------------------------------------------------------------------
-- 상위 n개 레코드  https://programmers.co.kr/learn/courses/30/lessons/59405
-- ANIMAL_INS 테이블 동물 보호소에 가장 먼저 들어온 동물의 이름을 조회하는 SQL 문을 작성해주세요.

SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1
