-- 최댓값 구하기 https://programmers.co.kr/learn/courses/30/lessons/59415
-- ANIMAL_INS 테이블 가장 최근에 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.

SELECT MAX(DATETIME)
FROM ANIMAL_INS


----------------------------------------------------------------------------------------------
-- 최솟값 구하기 https://programmers.co.kr/learn/courses/30/lessons/59038
-- ANIMAL_INS 테이블 동물 보호소에 가장 먼저 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.

SELECT MIN(DATETIME)
FROM ANIMAL_INS



----------------------------------------------------------------------------------------------
-- 동물 수 구하기  https://programmers.co.kr/learn/courses/30/lessons/59406
-- ANIMAL_INS 테이블 동물 보호소에 동물이 몇 마리 들어왔는지 조회하는 SQL 문을 작성해주세요.

SELECT COUNT(*)
FROM ANIMAL_INS



----------------------------------------------------------------------------------------------
-- 중복 제거하기  https://programmers.co.kr/learn/courses/30/lessons/59408
-- ANIMAL_INS 테이블 동물 보호소에 들어온 동물의 이름은 몇 개인지 조회하는 SQL 문을 작성해주세요. 이때 이름이 NULL인 경우는 집계하지 않으며 중복되는 이름은 하나로 칩니다.

SELECT COUNT(DISTINCT(NAME)) AS COUNT
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
